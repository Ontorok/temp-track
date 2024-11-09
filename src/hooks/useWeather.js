import { useEffect, useState } from "react";
import { WEATHER_API } from "../constants/apiUrls";
import useLocationContext from "./useLocationContext";
const initialWeatherState = {
  location: "",
  climate: "",
  climateDescription: "",
  temperature: "",
  maxTemperature: "",
  minTemperature: "",
  humidity: "",
  cloudPercentage: "",
  wind: "",
  time: "",
  latitude: "",
  longitude: "",
};
const initialLoadingState = {
  state: false,
  message: "",
};
export default function useWeather() {
  const [weather, setWeather] = useState(initialWeatherState);
  const [loading, setLoading] = useState(initialLoadingState);
  const [error, setError] = useState(null);
  const { selectedLocation } = useLocationContext();

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading((prev) => ({
        ...prev,
        state: true,
        message: "Fetching weather data...",
      }));

      const response = await fetch(WEATHER_API.getWeather(latitude, longitude));
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const mappedWeatherData = {
        ...weather,
        location: data.name,
        climate: data.weather[0].main,
        climateDescription: data.weather[0].description,
        temperature: Math.round(data.main.temp),
        maxTemperature: Math.round(data.main.temp_max),
        minTemperature: Math.round(data.main.temp_min),
        humidity: data.main.humidity,
        cloudPercentage: data.clouds.all,
        wind: data.wind.speed,
        time: data.dt,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
      };
      setWeather(mappedWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading((prev) => ({ ...prev, state: false, message: "" }));
    }
  };

  useEffect(() => {
    setLoading((prev) => ({
      ...prev,
      state: true,
      message: "Finding Location",
    }));
    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return { weather, loading, error };
}
