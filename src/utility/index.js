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
      return "./assets/rainy.svg";
    case "Clouds":
      return "./assets/cloud.svg";
    case "Clear":
      return "./assets/icons/sunny.svg";
    case "Snow":
      return "./assets/icons/snow.svg";
    case "Thunder":
      return "./assets/thunder.svg";
    case "Fog":
    case "Haze":
    case "Mist":
      return "./assets/haze.svg";
    default:
      return "./assets/icons/sunny.svg";
  }
}

export { getFormattedDate, getWeatherIcon };
