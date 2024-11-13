import HeartIcon from "../../assets/heart.svg";

const Favourite = ({ onFavModalToggle }) => {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onFavModalToggle}
    >
      <img src={HeartIcon} alt="" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Favourite;
