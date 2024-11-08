import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { weather, loading, error } = useWeather();
  return (
    <WeatherContext.Provider value={{ weather, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
