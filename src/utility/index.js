import CloudIcon from "../assets/cloud.svg";
import HazeIcon from "../assets/haze.svg";
import SnowIcon from "../assets/icons/snow.svg";
import SunnyIcon from "../assets/icons/sunny.svg";
import RainyIcon from "../assets/rainy.svg";
import ThunderIcon from "../assets/thunder.svg";

import ClearBg from "../assets/backgrounds/clear-sky.jpg";
import HazeBg from "../assets/backgrounds/few-clouds.jpg";
import MistBg from "../assets/backgrounds/mist.jpeg";
import RainBg from "../assets/backgrounds/rainy-day.jpg";
import CloudsBg from "../assets/backgrounds/scattered-clouds.jpg";
import SnowBg from "../assets/backgrounds/sunny.jpg";
import ThunderBg from "../assets/backgrounds/thunderstorm.jpg";
import FogBg from "../assets/backgrounds/winter.jpg";

function getFormattedDate(value, type, inMilliSecond) {
  if (!type) return value;

  if (!inMilliSecond) {
    value = value * 1000;
  }

  const date = new Date(value);
  let options;

  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
}

function getWeatherIcon(climate) {
  switch (climate) {
    case "Rain":
      return RainyIcon;
    case "Clouds":
      return CloudIcon;
    case "Clear":
      return SunnyIcon;
    case "Snow":
      return SnowIcon;
    case "Thunder":
      return ThunderIcon;
    case "Fog":
    case "Haze":
    case "Mist":
      return HazeIcon;
    default:
      return SunnyIcon;
  }
}

function getWeatherBackground(climate) {
  switch (climate) {
    case "Rain":
      return RainBg;
    case "Clouds":
      return CloudsBg;
    case "Clear":
      return ClearBg;
    case "Snow":
      return SnowBg;
    case "Thunder":
      return ThunderBg;
    case "Fog":
      return FogBg;
    case "Haze":
      return HazeBg;
    case "Mist":
      return MistBg;
    default:
      return ClearBg;
  }
}

export { getFormattedDate, getWeatherBackground, getWeatherIcon };
