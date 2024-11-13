import { useState } from "react";
import Header from "../components/header/Header";
import WeatherBoard from "../components/weather/WeatherBoard";
import { useWeatherContext } from "../hooks";

import { useEffect } from "react";
import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "../assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "../assets/backgrounds/sunny.jpg";
import ThunderStormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";

const HomePage = () => {
  const { weather, loading } = useWeatherContext();
  const { climate } = weather;

  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bgImage = getBackgroundImage(climate);
    setClimateImage(bgImage);
  }, [climate]);

  return (
    <>
      {loading.state ? (
        <p>{loading.message}</p>
      ) : (
        <div
          style={{
            background: `url('${climateImage}')`,
          }}
          className={`bg-body font-[Roboto] text-light h-screen grid place-items-center bg-no-repeat bg-cover`}
        >
          <Header />
          <main>
            <section className="">
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default HomePage;
