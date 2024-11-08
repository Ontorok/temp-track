import { useContext } from "react";
import { FavouriteContext } from "../context";

export default function useFavouriteContext() {
  return useContext(FavouriteContext);
}
