export default function WeatherCard({ weather }) {
  const {
    name,
    sys: { country },
    main: { temp, feels_like, humidity, pressure },
    weather: [{ description, icon }],
    wind: { speed },
    visibility,
  } = weather;

  const date = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const visKm = visibility ? (visibility / 1000).toFixed(1) : "N/A";

  return (
    <div className="weather-card">
      {/* Top row */}
      <div className="weather-top">
        <div className="weather-location">
          <h2>{name}</h2>
          <div className="country">📍 {country}</div>
          <div className="date">{date}</div>
        </div>
        <div className="weather-icon-wrap">
          <img src={iconUrl} alt={description} />
          <div className="condition">{description}</div>
        </div>
      </div>

      {/* Temperature */}
      <div className="temp-row">
        <div className="temp-main">{Math.round(temp)}°C</div>
        <div className="temp-feels">Feels like {Math.round(feels_like)}°C</div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-icon">💧</div>
          <div className="stat-value">{humidity}%</div>
          <div className="stat-label">Humidity</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">💨</div>
          <div className="stat-value">{speed} m/s</div>
          <div className="stat-label">Wind Speed</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🔵</div>
          <div className="stat-value">{pressure} hPa</div>
          <div className="stat-label">Pressure</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">👁</div>
          <div className="stat-value">{visKm} km</div>
          <div className="stat-label">Visibility</div>
        </div>
      </div>
    </div>
  );
}
