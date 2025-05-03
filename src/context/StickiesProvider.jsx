import { createContext, useState, useContext, useReducer } from "react";
import { tempData } from "../constant/constant";
import stickiesReducer from "../reducers/stickiesReducer";

let StickiesContext = createContext();

export default function StickesProvider({ children }) {
  // Use States
  // HIDEN // ADD // UPDATE
  const [stickyFormShow, setStickyFormShow] = useState("hidden");
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    desc: "",
    bg: "red",
  });
  const [stickies, dispatch] = useReducer(stickiesReducer, tempData);

  return (
    <StickiesContext.Provider
      value={{
        stickyFormShow,
        setStickyFormShow,
        stickies,
        dispatch,
        formData,
        setFormData,
      }}
    >
      {children}
    </StickiesContext.Provider>
  );
}
export const useStickies = () => {
  const context = useContext(StickiesContext);
  if (!context) {
    throw new Error("useSticky must be used within a StickesProvider");
  }
  return context;
};
