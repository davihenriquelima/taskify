export type Weather = {
    currentWeather: {
        name: string;
        main: {
            temp: number;
            feels_like: number;
            humidity: number;
        };
        wind: {
            speed: number;
        };
        weather: {
            description: string;
        }[];
        clouds: {
            all: number; // Cobertura de nuvens em porcentagem
        };
    };
    rainForecast: {
        date: string,
        time: string;
        precipitationProbability: number;
    }[];
}