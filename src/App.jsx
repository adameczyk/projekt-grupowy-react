import { useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";

export default function App() {
  const { weather, city } = useContext(WeatherContext);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Pogoda dla: <span className="text-blue-600">{city}</span>
      </h1>

      <SearchBar />

      {!weather ? (
        <p className="text-lg">Ładowanie...</p>
      ) : weather.cod !== 200 ? (
        <p className="text-red-500 text-xl mt-4">Nie znaleziono miasta.</p>
      ) : (
        <div className="bg-white shadow-md p-6 rounded-lg mt-4 text-center w-full max-w-md">
          <p className="text-4xl font-bold">{weather.main.temp}°C</p>
          <p className="text-gray-700 capitalize text-lg">
            {weather.weather[0].description}
          </p>

          <div className="mt-4 text-gray-600">
            <p>Wilgotność: {weather.main.humidity}%</p>
            <p>Ciśnienie: {weather.main.pressure} hPa</p>
            <p>Wiatr: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}