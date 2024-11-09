import Header from "../components/header/Header";
import WeatherBoard from "../components/weather/WeatherBoard";
import { useWeatherContext } from "../hooks";

const HomePage = () => {
  const { loading } = useWeatherContext();

  return (
    <>
      {loading.state ? (
        <p>{loading.message}</p>
      ) : (
        <>
          <Header />
          <main>
            <section className="">
              <WeatherBoard />
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default HomePage;
