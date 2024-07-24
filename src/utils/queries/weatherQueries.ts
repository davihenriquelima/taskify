import { useQuery } from "@tanstack/react-query";
import { getWeather } from "@/utils/api/apiWeather";
import { Weather } from "@/types/Weather";

// função para buscar o clima utilizando geolocalização
const fetchWeather = async (): Promise<Weather | undefined> => {
    try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        const lang = navigator.language.slice(0, 2);

        try {
            const weatherData = await getWeather(latitude, longitude, lang);
            return weatherData;
        } catch (apiError) {
            console.error('Erro ao buscar dados climáticos', apiError);
            throw new Error('Erro ao buscar dados climáticos');
        }

    } catch (geoError) {
        console.error('Erro ao obter localização', geoError);
        throw new Error('Erro ao obter localização');
    }
};

// hook para usar a query de clima
export const useWeather = () => {
    const query = useQuery<Weather | undefined, Error>({
        queryKey: ['weather'],
        queryFn: fetchWeather,
        staleTime: 600000, // 10 minutos
        refetchInterval: 600000, // 10 minutos
    });
    return query;
};
