import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import CityInputs from "./CityInputs";
import WeatherCard from "./WeatherCard";

function Main() {
  const { weather, isLoading, error } = useContext(WeatherContext);
  
  return (
    <main className="app-main">
      
     <CityInputs />
       
      <section className="weather-grid">
        <WeatherCard 
          title="City 1 Weather"
          data={weather.city1}
          isLoading={isLoading}
          error={error}
        />
        <WeatherCard 
          title="City 2 Weather"
          data={weather.city2}
          isLoading={isLoading}
          error={error}
        />  
      </section>
    </main>
  );
}

export default Main;