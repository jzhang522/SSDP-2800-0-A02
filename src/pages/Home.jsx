import { WeatherContext } from "../components/WeatherContext";
import { useContext } from "react";
import CityInpuits from "../components/CityInputs";
import WeatherCard from "../components/WeatherCard";

export default function Currency() {
    const { originCity, currentCity } = useContext(WeatherContext);
    return (
        <>
            <div className="app-main">
                <h2>🌤️Weather Comparison</h2>
                <CityInpuits />
                <div className="weather-grid">
                    <WeatherCard cityName={originCity} title={"Origin City"} />
                    <WeatherCard cityName={currentCity} title={"Current City"}/>
                </div>
            </div>
        </>
    );
}