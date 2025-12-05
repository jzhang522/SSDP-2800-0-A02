import { useState } from "react";
import { WeatherContext } from "./WeatherContext";

export function WeatherProvider({ children }) {
    const [originCity, setOriginCity] = useState("");
    const [currentCity, setCurrentCity] = useState("");

    return (
        <WeatherContext.Provider
            value={{ originCity, setOriginCity, currentCity, setCurrentCity }}
        >
            {children}
        </WeatherContext.Provider>
    );
}
