import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeather = async (lat: number, lon: number, lang: string) => {
    try {
        const currentWeather = await axios.get(currentWeatherUrl, {
            params: {
                lat,
                lon,
                appid: apiKey,
                units: 'metric',
                lang: lang
            }
        });

        const rainForecast = await axios.get(forecastWeatherUrl, {
            params: {
                lat,
                lon,
                appid: apiKey,
                units: 'metric',
                lang: lang
            }
        });

        /*a linha new Date().toISOString() cria uma string no formato ISO representando a data 
        e hora atual, divide a string entre T's e forma uma array com cada item entre eles*/
        const today = new Date().toISOString().split('T')[0];

        /*rainForecast.data.list é uma lista de previsões de 3 horas.
        .filter((forecast: any) => forecast.dt_txt.startsWith(today)) filtra essa lista para incluir apenas previsões onde a data (forecast.dt_txt) começa com a data de hoje (today). forecast.dt_txt é uma string no formato "YYYY-MM-DD HH:mm", então startsWith(today) verifica se a previsão é para hoje
        */
        const todayForecasts = rainForecast.data.list.filter((forecast: any) => forecast.dt_txt.startsWith(today));

        /* todayForecasts.map((forecast: any) => ({ ... })) percorre cada previsão filtrada para hoje 
        e cria um novo array de objetos contendo:
        time: forecast.dt_txt: A hora da previsão.
        rainVolume: forecast.rain ? forecast.rain['3h'] : 0: O volume de chuva previsto em milímetros para as próximas 3 horas. Se forecast.rain existir, pegamos o valor de forecast.rain['3h']. Se não existir, assumimos que o volume de chuva é 0.
        precipitationProbability: forecast.pop * 100: A probabilidade de precipitação (expressa como um valor entre 0 e 1) multiplicada por 100 para obter um valor em porcentagem. 
        */
        const rainData = todayForecasts.map((forecast: any) => {
            const rainVolume = forecast.rain && forecast.rain['3h'] !== undefined ? forecast.rain['3h'] : 'sem dados';
            const precipitationProbability = forecast.pop !== undefined ? forecast.pop * 100 : 0;
        
            console.log(`Forecast time: ${forecast.dt_txt}`);
            console.log(`Full forecast object: `, forecast);
            console.log(`Rain Volume: ${rainVolume}`);
            console.log(`Precipitation Probability: ${precipitationProbability}%`);
        
            return {
                time: forecast.dt_txt,
                rainVolume: rainVolume,
                precipitationProbability: precipitationProbability
            };
        });
        
        return {
            currentWeather: currentWeather.data,
            rainForecast: rainData
        };
    } catch (error) {
        console.error('Erro ao buscar dados climáticos', error);
    }
}