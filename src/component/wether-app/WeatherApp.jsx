import React, { useState, useEffect } from "react";
import { useFetch } from "./custom-hook/useFetch";

const WeatherComponent = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [api, setApi] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setLatitude(pos.coords.latitude);
                    setLongitude(pos.coords.longitude);
                },
                (err) => console.error("Geolocation error:", err)
            );
        }
    }, []);

    useEffect(() => {
        if (latitude && longitude) {
            setApi(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bf909b4a90c47e810fc156dc73c0ed75`
            );
        }
    }, [latitude, longitude]); 

    const { data, loading, error } = useFetch(api);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Weather Data</h2>
            {data && (
                <>
                    <p>Location: {data.name}</p>
                    <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
                    <p>Weather: {data.weather[0].description}</p>
                </>
            )}
        </div>
    );
};

export default WeatherComponent;
