import React from "react";
import { useFetch } from "./custom-hook/useFetch";

const WeatherComponent = ({ latitude, longitude }) => {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bf909b4a90c47e810fc156dc73c0ed75`;
    const { data, loading, error } = useFetch(api);

    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No data available.</p>;

    return (
        <div>
            <h2>Weather in {data.name}</h2>
            <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Condition: {data.weather[0].description}</p>
        </div>
    );
};

export default WeatherComponent;
