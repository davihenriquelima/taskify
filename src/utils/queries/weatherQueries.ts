import { useQuery } from "@tanstack/react-query";
import { getWeather } from "@/utils/api/apiWeather";
import { Weather } from "@/types/Weather";
import { useQueryClient } from '@tanstack/react-query';
import { queryClient } from "../queryClient";

// hook para usar a query de clima
export const useWeather = () => {
    const query = useQuery<Weather | undefined, Error>({
        queryKey: ['weather'],
        queryFn: getWeather,
        staleTime: 600000, // 10 minutos
        refetchInterval: 600000, // 10 minutos
    });
    return query;
};

// Prefetch dos dados do Weather
export const useWeatherPrefetch = async () => {
    const queryClient = useQueryClient();
    await queryClient.prefetchQuery({ queryKey: ['weather'], queryFn: getWeather });
}

// Invalidate dos dados do Weather
export const weatherInvalidate = () => {
    queryClient.invalidateQueries({
        queryKey: ['weather']
    });
}