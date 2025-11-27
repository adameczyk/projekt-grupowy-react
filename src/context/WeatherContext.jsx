import { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Warsaw");
  const [weather, setWeather] = useState(null);

  
  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      if (!API_KEY) {
        console.error("Brak klucza API OpenWeather!");
        return;
      }

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pl`
        );
        const data = await res.json();
        setWeather(data);
      } catch (error) {
        console.error("Błąd pobierania pogody:", error);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [city, API_KEY]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weather }}>
      {children}
    </WeatherContext.Provider>
  );
};
