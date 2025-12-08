import { WeatherContext } from "../components/WeatherContext";
import { useContext } from "react";
import CityInpuits from "../components/CityInputs";
import CurrencyCard from "../components/CurrencyCard";

export default function Currency() {
    const { originCity, currentCity } = useContext(WeatherContext);
    return (
        <>
            <div className="app-main">
                <h2>💱 Currency Exchange</h2>
                <CityInpuits />
                <div className="weather-grid">
                    <CurrencyCard cityName={originCity} otherCityName={currentCity} title={"Origin City"} />
                    <CurrencyCard cityName={currentCity} otherCityName={originCity} title={"Current City"}/>
                </div>
            </div>
        </>
    );
}
