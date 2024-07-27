"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useWeather, weatherInvalidate, useWeatherPrefetch } from "@/utils/queries/weatherQueries";
import { useEffect, useState } from "react";

const WeatherSideBar = () => {
    const themeCtx = useTheme();

    useWeatherPrefetch()

    const handleWeatherInvalidate = () => {
        weatherInvalidate();
    };

    const { data: weather, isLoading, isError, error, isFetching } = useWeather();
    const [visible, setVisible] = useState(false);  
    const [updateMessageVisible, setUpdateMessageVisible] = useState(false);

    useEffect(()=> {
        
        setVisible(true); // Pra mostrar a barra lateral automaticamente na primeira vez
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000); // e esconder após 5 segundos

        return () => clearTimeout(timer);

    },[]);

    const toggleSidebar = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        if (!isFetching) {
            setUpdateMessageVisible(true);
            const timer = setTimeout(() => setUpdateMessageVisible(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [isFetching]);

    if(isLoading){
        return <div className="h-28 w-24 absolute right-0 top-1/2">loading...</div>
    }
    if(isError) {
        return <div className="h-28 w-24 absolute right-0 top-1/2">{(error as Error).message}</div>;
    }

    if(weather) {

        const localName = weather.currentWeather.name;
        const temp = weather.currentWeather.main.temp;
        const sensation = weather.currentWeather.main.feels_like;
        const humidity = weather.currentWeather.main.humidity;
        const speed = weather.currentWeather.wind.speed * 3.6;
        const description = weather.currentWeather.weather[0].description;
        const cloudCover = weather.currentWeather.clouds.all;

        const date = new Date;
        const hour = date.getHours();

        const nextForecastTime = weather.rainForecast[0]?.time;
    
        // Usar a previsão de chuva do primeiro item do array rainForecast
        const rainChance = weather.rainForecast[0]?.precipitationProbability;

        const getWeatherDetails = (rainChance:number, cloudCover:number, hour:number) => {
            const conditions = [
                { check: rainChance >= 60, message: 'Vai chover, leve seu guarda-chuva, uma capa e talvez um barco', icon: 'images/storms.png' },
                { check: rainChance >= 40 && rainChance < 60, message: 'Acho que vai chover hen?! leve seu guarda-chuva!', icon: 'images/rain.png' },
                { check: rainChance >= 30 && rainChance < 40, message: 'Pode chover. Previna-se e leve um guarda-chuva ao sair!', icon: 'images/sun&rain.png' },
                { check: rainChance >= 10 && rainChance < 30, message: 'Pouca chance de chuva até o momento', icon: 'images/sun&cloud.png' },
                { check: rainChance < 10 && cloudCover > 10, message: 'Agora é sombra e água fresca', icon: 'images/sun&cloud.png' },
                { check: rainChance < 10 && cloudCover <= 10, message: hour >= 6 && hour <= 17 ? 'Ô SOOOl 😎' : 'Sem chance de chuva', icon: 'images/sun.png' }
            ];
            return conditions.find(condition => condition.check) || { message: '', icon: '' };
        };
        const { message: rainMessage, icon: weatherIconUrl } = getWeatherDetails(rainChance, cloudCover, hour);        
       
        return (
            <div className={`fixed flex z-50 items-center right-0 top-1/2 transform -translate-y-1/2 ${visible ? 'translate-x-0' : `translate-x-80`} transition-transform duration-700 ease-in-out min-h-24`}>
    
                <div className="relative p-1 flex items-center justify-center cursor-pointer bg-teal-300 rounded-l-lg" onClick={toggleSidebar}>
                    <img src="images/weather.png" alt="Weather Icon" className="w-12" />
                </div>
    
                <div className={`relative p-4 w-80 rounded-l-lg shadow-lg flex flex-col items-center gap-2 ${themeCtx.theme === 'dark'? 'bg-gray-800 ' : 'bg-white '}`}>
                    <div className={`flex items-center gap-2 justify-start w-full ${themeCtx.theme === 'dark'? 'text-teal-400 ' : 'text-teal-900 '} `}>
                        <div className=""><img src={weatherIconUrl} className="w-14"/></div>
                        <div>
                            <div className="text-lg font-semibold">{localName}</div>
                            <div className="text-xl font-bold">{temp.toFixed(1)}°C</div>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-1 ${themeCtx.theme === 'dark'? 'text-white/80 ' : 'text-black/70 '}`}>
                        <div className="text-sm"><strong>Sensação térmica: </strong>{sensation.toFixed(1)}°C</div>
                        <div className="text-sm"><strong>Umidade relativa do ar: </strong>{humidity.toFixed()}%</div>
                        <div className="text-sm"><strong>Chance de chuva às {nextForecastTime}: </strong>{rainChance}%</div>
                        <div className="text-sm">{rainMessage}</div>
                        <div className="text-sm"><strong>Cobertura de nuvens: </strong>{cloudCover.toFixed()}%</div>
                        <div className="text-sm">{description}</div>
                        <div className="text-sm"><strong>Velocidade do vento: </strong>{speed.toFixed(1)} km/h</div>
                    </div>
                    <button onClick={handleWeatherInvalidate}>Atualizar Clima</button>
                    {updateMessageVisible &&
                        <div className="flex">
                            <span className="text-sm text-black bg-white/90 rounded-md">clima atualizado &#10003;</span>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default WeatherSideBar;