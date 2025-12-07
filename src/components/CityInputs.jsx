import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

export function CityInpuits({}) {
    const { originCity, setOriginCity, currentCity, setCurrentCity } =
        useContext(WeatherContext);

    return (
        <>
            <div className="city-inputs">
                <div className="input-group ">
                    <label htmlFor="origin-city">Origin City:</label>
                    <input
                        type="text"
                        id="origin-city"
                        className="city-input"
                        placeholder="Enter origin city"
                        value={originCity}
                    />
                </div>
                <div className="input-group ">
                    <label htmlFor="current-city">Current City:</label>
                    <input
                        type="text"
                        id="current-city"
                        className="city-input"
                        placeholder="Enter current city"
                        value={currentCity}
                    />
                </div>
            </div>
        </>
    );
}
