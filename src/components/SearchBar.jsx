import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search for a city... e.g. Chennai, London"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-btn" type="submit" disabled={loading}>
        {loading ? "Searching..." : "🔍 Search"}
      </button>
    </form>
  );
}
