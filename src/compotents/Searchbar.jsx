import { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function SearchBar() {
  const { setCity } = useContext(WeatherContext);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setCity(value.trim());
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6 w-full max-w-md">
      <input
        className="border px-4 py-2 rounded flex-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Wpisz nazwę miasta..."
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Szukaj
      </button>
    </form>
  );
}