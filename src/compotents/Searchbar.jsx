import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function SearchBar() {
  const { setCity } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-4 py-2 rounded w-full"
        placeholder="Wpisz nazwę miasta..."
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Szukaj
      </button>
    </form>
  );
}