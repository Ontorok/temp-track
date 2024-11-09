import HomePage from "./pages/HomePage";
import FavouriteProvider from "./provider/FavouriteProvider";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <HomePage />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
