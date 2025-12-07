import { useState, useEffect } from "react";
import.meta.env.VITE_WEATHER_API_KEY

export default function CurrencyCard({ cityName, title }) {
    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

    useEffect(() => {
        if (!cityName.trim()) {
            return;
        }

        const fetchCurrency = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}&units=metric`);

                if(!result.ok) throw new Error("User not found.");
                
                const data = await result.json();
                console.log(data.sys);
            } catch (ex) {
                setError(ex.message);
                setLoading(false);
            }
        };

        fetchCurrency();

    }, [cityName, weatherApiKey]);

    return (
        <>
            <div className="weather-card">
                <h3>{title}</h3>
                <p className="city-name">{cityName}, </p>
                <div className="temperature">
                    <p className="temp-value">asdfasdf</p>
                    <p className="description">asdfasdf</p>
                </div>
                <div className="weather-details">
                    <div className="detail-item">
                        <p className="label">Humidity:</p>
                        <p className="value">1</p>
                    </div>
                    <div className="detail-item">
                        <p className="label">Wind:</p>
                        <p className="value">1</p>
                    </div>
                </div>
            </div>
        </>
    );
}
