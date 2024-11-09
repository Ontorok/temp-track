import { useContext } from "react";
import { LocationContext } from "../context";

export default function useLocationContext() {
  return useContext(LocationContext);
}
