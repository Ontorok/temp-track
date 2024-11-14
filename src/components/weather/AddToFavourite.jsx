import { useFavouriteContext, useWeatherContext } from "../../hooks";

import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";

const AddToFavourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useFavouriteContext();
  const { weather } = useWeatherContext();
  const { latitude, longitude, location } = weather;

  const isInFavourites = favourites.find(
    (f) => f.location === weather.location
  );

  const handleFavourite = () => {
    if (isInFavourites) {
      removeFromFavourites(weather.location);
    } else {
      addToFavourites(latitude, longitude, location);
    }
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isInFavourites ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
