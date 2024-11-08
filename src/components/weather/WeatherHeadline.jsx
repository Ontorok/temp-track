import { useWeatherContext } from "../../hooks";
import { getFormattedDate, getWeatherIcon } from "../../utility";

const WeatherHeadline = () => {
  const { weather } = useWeatherContext();
  const {
    location,
    climate,
    temperature,
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
    time,
    latitude,
    longitude,
  } = weather;

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt={climate} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {temperature}
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src="./assets/pin.svg" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time || 0, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadline;
