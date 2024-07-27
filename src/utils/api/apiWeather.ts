import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';
import { Weather } from "@/types/Weather";

// requisição da API usando a geolocalização do navegador

export const getWeather = async (): Promise<Weather | undefined> => {
    try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        const lang = navigator.language.slice(0, 2);

        try {
            const currentWeather = await axios.get(currentWeatherUrl, {
                params: {
                    lat: latitude,
                    lon: longitude,
                    appid: apiKey,
                    units: 'metric',
                    lang: lang
                }
            });
            const rainForecast = await axios.get(forecastWeatherUrl, {
                params: {
                    lat: latitude,
                    lon: longitude,
                    appid: apiKey,
                    units: 'metric',
                    lang: lang
                }
            });
    
            const rainData = rainForecast.data.list.map((forecast: any) => {
                const forecastDateTime = new Date(forecast.dt_txt).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
                const forecastDate = forecastDateTime.split(',')[0].trim(); // apenas a data na string do horário da previsão
                const forecastHour = forecastDateTime.split(',')[1].trim().substring(0, 5); // substring pega os primeiros 5 caracteres do horário
                const precipitationProbability = forecast.pop !== undefined ? forecast.pop * 100 : 0;
    
                return {
                    date: forecastDate,
                    time: forecastHour,
                    precipitationProbability: precipitationProbability
                };
            });
    
            return {
                currentWeather: currentWeather.data,
                rainForecast: rainData, // todas as previsões do dia
            };
        } catch (apiError) {
            console.error('Erro ao buscar dados climáticos', apiError);
            throw new Error('Erro ao buscar dados climáticos');
        }

    } catch (geoError) {
        console.error('Erro ao obter localização', geoError);
        throw new Error('Erro ao obter localização');
    }
}