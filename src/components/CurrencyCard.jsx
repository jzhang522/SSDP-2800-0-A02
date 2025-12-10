import { useState, useEffect } from "react";
import.meta.env.VITE_WEATHER_API_KEY;
import { countries, currencies } from "country-data";

export default function CurrencyCard({ cityName, otherCityName, title }) {
    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [countryCode, setCountryCode] = useState(null);
    const [currencyData, setCurrencyData] = useState(null);
    const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const currencyApiKey = import.meta.env.VITE_EXCHANGERATE_API_KEY;

    useEffect(() => {
        if (!cityName.trim() && !otherCityName.trim()) {
            return;
        }

        let isMounted = true;

        const fetchCurrency = async () => {
            setLoading(true);
            setError(null);

            try {
                const currentCountryCode = await getCountryCode(
                    cityName,
                    weatherApiKey
                );
                const otherCountryCode = await getCountryCode(
                    otherCityName,
                    weatherApiKey
                );

                if (!currentCountryCode || !otherCountryCode) {
                    throw new Error("Country not found!");
                }

                setCountryCode(currentCountryCode);

                const currentCurrencyCode = getCurrencyCode(currentCountryCode);
                const otherCurrencyCode = getCurrencyCode(otherCountryCode);

                if (!currentCurrencyCode || !otherCurrencyCode) {
                    throw new Error("Currency code not found!");
                }

                const result = await fetch(
                    `https://v6.exchangerate-api.com/v6/${currencyApiKey}/pair/${otherCurrencyCode}/${currentCurrencyCode}/100`
                );

                if (!result.ok)
                    throw new Error("Currency exchange info not found.");
                const data = await result.json();

                if (isMounted) {
                    setCurrencyData(data);
                    setLoading(false);
                }
            } catch (ex) {
                if (isMounted) {
                    setError(ex.message);
                    setCurrencyData(null);
                    setLoading(false);
                }
            }
        };

        fetchCurrency();

        return () => {
            isMounted = false;
        };
    }, [cityName, otherCityName, weatherApiKey, currencyApiKey]);

    if (loading)
        return <div className="weather-card loading">Loading weather...</div>;
    if (error) return <div className="weather-card error">Error: {error}</div>;
    if (!currencyData)
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
                    {cityName}, {countryCode}
                </p>
                <div className="temperature">
                    <p className="temp-value">
                        {getCurrencySymbol(currencyData?.target_code) ?? "_"}
                        {currencyData?.conversion_result.toFixed(2) ?? "0.00"}
                    </p>
                    <p className="description">
                        {currencyData?.target_code ?? "_"}
                    </p>
                </div>
                <div className="weather-details">
                    <div className="detail-item">
                        <p className="label">Exhanged From:</p>
                        <p className="value">
                            100 {currencyData?.base_code ?? "_"}
                        </p>
                    </div>
                    <div className="detail-item">
                        <p className="label">Exhange Rate:</p>
                        <p className="value">
                            {currencyData?.conversion_rate ?? "_"}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

async function getCountryCode(cityName, key) {
    const weatherResult = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`
    );
    if (!weatherResult.ok) return null;

    const country = await weatherResult.json();

    return country.sys.country;
}

function getCurrencyCode(countryCode) {
    const country = countries[countryCode];

    if (!country || !country.currencies || country.currencies.length === 0) {
        return null;
    }

    return country.currencies[0];
}

function getCurrencySymbol(currencyCode) {
    if (!currencyCode) return null;

    const info = currencies[currencyCode];
    return info.symbol;
}
