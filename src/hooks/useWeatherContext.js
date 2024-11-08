import { useContext } from "react";
import { WeatherContext } from "../context";

export default function useWeatherContext() {
  return useContext(WeatherContext);
}
