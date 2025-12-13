import { useState, useEffect } from "react";

export default function WeatherCard({ cityName, title }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

    useEffect(() => {
        if (!cityName.trim()) {
            return;
        }

        let isMounted = true;

        const fetchWather = async () => {
            setLoading(true);
            setError(null);

            try {
                const weatherResult = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}&units=metric`
                );
                if (!weatherResult.ok) {
                    throw new Error("City not found");
                }

                const data = await weatherResult.json();

                if (isMounted) {
                    setWeatherData(data);
                    console.log(data);
                    setLoading(false);
                }
            } catch (ex) {
                if (isMounted) {
                    setError(ex.message);
                    setWeatherData(null);
                    setLoading(false);
                }
            }
        };

        fetchWather();

        return () => {
            isMounted = false;
        };
    }, [cityName, weatherApiKey]);

    if (loading)
        return <div className="weather-card loading">Loading weather...</div>;
    if (error) return <div className="weather-card error">Error: {error}</div>;
    if (!weatherData)
        return (
            <div className="weather-card placeholder">
                Enter a city name to search
            </div>
        );

    return (
        <>
            <div className="weather-card">
                <h3>{title}</h3>
                <p className="city-name">
                    {cityName}, {weatherData.sys.country}
                </p>
                <div className="temperature">
                    <p className="temp-value">
                        {weatherData.main.temp.toFixed(0)}&deg;C
                    </p>
                    <p className="description">
                        {weatherData.weather[0].description}
                    </p>
                </div>
                <div className="weather-details">
                    <div className="detail-item">
                        <p className="label">Humidity:</p>
                        <p className="value">
                            {weatherData.main.humidity}%
                        </p>
                    </div>
                    <div className="detail-item">
                        <p className="label">Wind:</p>
                        <p className="value">
                            {weatherData.wind.speed} m/s
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}