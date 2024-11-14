import SearchIcon from "../../assets/search.svg";
import { getLocationByName } from "../../data/location-data";
import { useDebounce, useLocationContext } from "../../hooks";

const Search = () => {
  const { setSelectedLocation } = useLocationContext();

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  const doSearch = useDebounce((searchTerm) => {
    const fetchedLocation = getLocationByName(searchTerm);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={handleSearchTermChange}
        />
        <button type="submit">
          <img src={SearchIcon} />
        </button>
      </div>
    </form>
  );
};

export default Search;
