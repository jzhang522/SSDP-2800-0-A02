import CityInpuits from "../components/CityInputs";
import WeatherCard from "../components/WeatherCard";

export default function Home({}) {
    return (
        <>
            <div className="app-main">
                <h2>💱 Currency Exchange</h2>
                <CityInpuits></CityInpuits>
                <WeatherCard></WeatherCard>
            </div>
        </>
    );
}
