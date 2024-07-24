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
    
        /*a linha new Date().toLocaleString... cria uma string no GMT de Sao Paulo representando a data 
        e hora atual*/
        const currentDateTime = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        const currentDate = currentDateTime.split(',')[0].trim(); // pega apenas a data em currentDateTime
        const currentHour = currentDateTime.split(',')[1].trim().split(':')[0]; // Pega apenas a hora

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

        const upcomingRainData = rainData.filter((forecast: any) => {
            if (forecast.date > currentDate) return true;
            if (forecast.date === currentDate && forecast.time >= currentHour) return true;
            return false;
        });

        return {
            currentWeather: currentWeather.data,
            rainForecast: rainData, // todas as previsões do dia
            upcomingRainData: upcomingRainData // todas as PRÓXIMAS previsões
        };

    } catch (error) {
        console.error('Erro ao buscar dados climáticos', error);
    }
}

// configurar prefetch, invalidation e mutations necessárias