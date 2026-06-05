export default function LoadingSpinner() {
  return (
    <div className="spinner-wrap">
      <div className="spinner"></div>
      <span>Fetching weather data...</span>
    </div>
  );
}
