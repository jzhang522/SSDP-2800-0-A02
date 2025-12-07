import { useState } from "react";
import { WeatherContext } from "./WeatherContext";

export function WeatherProvider({ children }) {
    const [originCity, setOriginCity] = useState("Vancouver");
    const [currentCity, setCurrentCity] = useState("New York");

    return (
        <WeatherContext.Provider
            value={{ originCity, setOriginCity, currentCity, setCurrentCity }}
        >
            {children}
        </WeatherContext.Provider>
    );
}
