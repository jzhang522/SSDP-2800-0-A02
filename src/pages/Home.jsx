import CityInpuits from "../components/CityInputs";
import WeatherCard from "../components/WeatherCard";

export default function Home({}) {
    return (
        <>
            <h2>🌤️ Weather Comparison</h2>
            <CityInpuits></CityInpuits>
            <WeatherCard></WeatherCard>
        </>
    );
}
