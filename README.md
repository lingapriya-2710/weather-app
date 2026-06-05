#  WeatherNow — Real-Time Weather App

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Custom-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=for-the-badge)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

> A real-time weather application that shows current weather conditions and a 5-day forecast for any city in the world — built with React and OpenWeatherMap API.

---

## Live Demo

[weather-app.netlify]https://weather-predection-lingapriya.netlify.app/
---

##  Features

-  **Search any city** in the world by name
-  **Current temperature** in Celsius with "feels like" reading
-  **Humidity, Wind Speed, Pressure, Visibility** stats
-  **5-Day Forecast** with daily weather icons
-  **Dynamic background** that changes based on weather condition
  - **Clear** → warm orange gradient
  -  **Cloudy** → grey gradient
  - **Stormy** → deep purple gradient
  -  **Snowy** → light blue/white gradient
  -  **Misty** → blue gradient
-  **Quick search chips** for popular cities
-  **Fully responsive** — works on mobile and desktop
-  **Error handling** for invalid city names

---

##  Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| [React](https://react.dev) | Frontend UI framework | 18.x |
| [Vite](https://vitejs.dev) | Build tool & dev server | 5.x |
| [Axios](https://axios-http.com) | API calls / HTTP requests | 1.x |
| [OpenWeatherMap API](https://openweathermap.org/api) | Weather data source | Free tier |
| Custom CSS | Styling & animations | — |
| [Netlify](https://app.netlify.co/) |  Deployment

---

## 📁 Project Structure

```
weather-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx       # Search input + button
│   │   ├── WeatherCard.jsx     # Current weather display
│   │   ├── ForecastCard.jsx    # Single day forecast card
│   │   └── LoadingSpinner.jsx  # Loading animation
│   ├── App.jsx                 # Main app + API logic
│   ├── App.css                 # All styles
│   └── main.jsx                # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

##  APIs Used

### OpenWeatherMap API
- **Current Weather** — `GET /data/2.5/weather?q={city}&appid={key}&units=metric`
- **5-Day Forecast** — `GET /data/2.5/forecast?q={city}&appid={key}&units=metric`
- **Weather Icons** — `https://openweathermap.org/img/wn/{icon}@2x.png`
- Free tier: 60 calls/minute, 1,000,000 calls/month
- Sign up at: [openweathermap.org](https://openweathermap.org)

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher
- npm (comes with Node.js)
- A free [OpenWeatherMap API key](https://openweathermap.org/api)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/YOURUSERNAME/weather-app.git
cd weather-app
```

**2. Install dependencies**
```bash
npm install
```

**3. Add your API key**

Open `src/App.jsx` and replace the API key on line 4:
```javascript
const API_KEY = "your_api_key_here";
```

**4. Start the development server**
```bash
npm run dev
```

**5. Open in browser**
```
http://localhost:5173
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

##  Deployment on netlify

1. Push your code to GitHub
2. Go to https://app.netlify.co/ and sign in with GitHub
3. Click **"Add New Project"** → select your repo
4. Click **"Deploy"** — live in 60 seconds!

Every push to GitHub auto-deploys the latest version.

---

## Resources & References

### Tools Used
- [VS Code](https://code.visualstudio.com) — Code editor
- [GitHub](https://github.com) — Version control & hosting
- [Netlify](https://app.netlify.co/) — Free deployment
- [OpenWeatherMap](https://openweathermap.org) — Free weather API
- [Google Fonts](https://fonts.google.com) — Inter font family

---

## What I Learned

- Building functional components with React hooks (`useState`, `useEffect`)
- Making API calls with `axios` and handling async/await
- Passing data between components using **props**
- Handling loading states and error messages
- Dynamic CSS changes based on live data
- Deploying a React app on Vercel

---

##  Future Improvements

- [ ] Celsius / Fahrenheit toggle
- [ ] Auto-detect user's location (geolocation)
- [ ] Hourly forecast
- [ ] Save recently searched cities
- [ ] Dark / Light mode toggle
- [ ] Move API key to environment variable (.env)

---

## Author

**Hemav** — 2nd Year IT Student
- 📧 [E-mail](lingapriyasasikumar2710@gmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/linga-priya271013/)
- 🐱 [GitHub](https://github.com/lingapriya-2710)
- 🌐 [Portfolio](https://yourportfolio.com)

---


⭐ If you found this project helpful, please give it a star on GitHub!
