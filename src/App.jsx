import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import FavouriteProvider from "./provider/FavouriteProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <Header />
        <main>
          <section className="">
            <WeatherBoard />
          </section>
        </main>
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
