"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useWeather } from "@/utils/queries/weatherQueries";
import { useEffect, useState } from "react";

const WeatherSideBar = () => {

    const themeCtx = useTheme();
    const { data: weather, isLoading, isError, error, refetch } = useWeather();
    const [visible, setVisible] = useState(false);  

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
        const date = new Date
        const hour = date.getHours()

        // Usar a previsão de chuva do primeiro item do array rainForecast
        const rainChance = weather.rainForecast[0]?.precipitationProbability;
        let rainMessage = '';
        let weatherIconUrl = '';

        if (rainChance >= 60) {
            rainMessage = 'Vai chover, leve seu guarda-chuva, uma capa e talvez um barco';
            weatherIconUrl = 'images/storms.png';
        } else if (rainChance >= 40 && rainChance < 60) {
            rainMessage = 'Acho que vai chover hen?! leve seu guarda-chuva!';
            weatherIconUrl = 'images/rain.png';
        } else if (rainChance >= 30 && rainChance < 40) {
            rainMessage = 'Pode chover. Previna-se e leve um guarda-chuva ao sair!';
            weatherIconUrl = 'images/sun&rain.png'; 
        } else if (rainChance >= 10 && rainChance < 30){
            rainMessage = 'Pouca chance de chuva até o momento';
            weatherIconUrl = 'images/sun&cloud.png';
        } else if (rainChance < 10 && cloudCover > 10 ) {
            rainMessage = 'Agora é sombra e água fresca';
            weatherIconUrl = 'images/sun&cloud.png';
        } else if (rainChance < 10 && cloudCover <= 10 ) {
            rainMessage = hour >= 6 && hour <= 17 ? 'Ô SOOOl 😎' : 'Sem chance de chuva';
            weatherIconUrl = 'images/sun.png';
        }
       
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
                        <div className="text-sm"><strong>Chance de chuva nas próximas 3h: </strong>{rainChance}%</div>
                        <div className="text-sm">{rainMessage}</div>
                        <div className="text-sm"><strong>Cobertura de nuvens: </strong>{cloudCover.toFixed()}%</div>
                        <div className="text-sm">{description}</div>
                        <div className="text-sm"><strong>Velocidade do vento: </strong>{speed.toFixed(1)} km/h</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherSideBar;