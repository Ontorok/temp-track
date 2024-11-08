import { useFavouriteContext, useWeatherContext } from "../../hooks";
const AddToFavourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useFavouriteContext();
  const { weather } = useWeatherContext();

  const handleAddToFavourite = () => {
    const isInFavourites = favourites.find(
      (f) => f.location === weather.location
    );
    console.log({ isInFavourites, favourites, weather });
    if (isInFavourites) {
      removeFromFavourites(weather.location);
    } else {
      addToFavourites(weather.latitude, weather.longitude, weather.location);
    }
  };

  return (
    <div className="md:col-span-2" onClick={handleAddToFavourite}>
      <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>Add to Favourite</span>
          <img src="./assets/heart.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
