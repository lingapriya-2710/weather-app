export default function ForecastCard({ day }) {
  const {
    dt_txt,
    main: { temp },
    weather: [{ description, icon }],
  } = day;

  const dayName = new Date(dt_txt).toLocaleDateString("en-IN", {
    weekday: "short",
  });

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="forecast-card">
      <div className="forecast-day">{dayName}</div>
      <img src={iconUrl} alt={description} />
      <div className="forecast-temp">{Math.round(temp)}°C</div>
      <div className="forecast-desc">{description}</div>
    </div>
  );
}
