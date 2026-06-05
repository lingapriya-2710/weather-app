import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import LoadingSpinner from "./components/LoadingSpinner";
import axios from "axios";
import "./App.css";

const API_KEY = "a1667d649c7175bd257533bcc4ef06c9";
const BASE = "https://api.openweathermap.org/data/2.5";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = async (city) => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setWeather(null);
    setForecast([]);
    setSearched(true);

    try {
      // Current weather
      const { data: weatherData } = await axios.get(
        `${BASE}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(weatherData);

      // 5-day forecast
      const { data: forecastData } = await axios.get(
        `${BASE}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Get one reading per day (at 12:00)
      const daily = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(daily);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("City not found. Please check the spelling and try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Background based on weather condition
  const getBg = () => {
    if (!weather) return "default";
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("clear")) return "clear";
    if (main.includes("cloud")) return "cloudy";
    if (main.includes("rain") || main.includes("drizzle")) return "rainy";
    if (main.includes("thunder")) return "stormy";
    if (main.includes("snow")) return "snowy";
    if (main.includes("mist") || main.includes("fog")) return "misty";
    return "default";
  };

  return (
    <div className={`app bg-${getBg()}`}>
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1 className="app-title">🌤 WeatherNow</h1>
          <p className="app-subtitle">Real-time weather for any city in the world</p>
        </div>

        {/* Search */}
        <SearchBar onSearch={handleSearch} loading={loading} />

        {/* Loading */}
        {loading && <LoadingSpinner />}

        {/* Error */}
        {error && (
          <div className="error-box">
            <span className="error-icon">⚠️</span> {error}
          </div>
        )}

        {/* Weather Card */}
        {weather && !loading && <WeatherCard weather={weather} />}

        {/* Forecast */}
        {forecast.length > 0 && !loading && (
          <div className="forecast-section">
            <h3 className="forecast-title">5-Day Forecast</h3>
            <div className="forecast-grid">
              {forecast.map((day) => (
                <ForecastCard key={day.dt} day={day} />
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {!searched && !loading && (
          <div className="empty-state">
            <div className="empty-globe">🌍</div>
            <p>Search for any city to get started</p>
            <div className="sample-cities">
              {["Chennai", "Mumbai", "London", "New York", "Tokyo"].map((c) => (
                <button
                  key={c}
                  className="city-chip"
                  onClick={() => handleSearch(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
