import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <Header />
      <main>
        <section className="">
          <WeatherBoard />
        </section>
      </main>
    </WeatherProvider>
  );
}

export default App;
