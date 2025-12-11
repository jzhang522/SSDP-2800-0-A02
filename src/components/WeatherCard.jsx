const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

// ...use url in your fetch logic...

export default WeatherCard;