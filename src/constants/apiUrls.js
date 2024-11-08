const WEATHER_API = {
  getWeather: (latitude, longitude) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`,
};

export { WEATHER_API };
