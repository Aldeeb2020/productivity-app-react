import { createContext, useState, useContext, useReducer } from "react";
import { tempData } from '../constant/constant';
import stickiesReducer from "../reducers/stickiesReducer";
import { ACTIONS } from "../reducers/stickiesReducer";

let StickiesContext = createContext();

export default function StickesProvider({children}){
      // Use States 
      const [stickyFormShow, setStickyFormShow] = useState(false);
      const [stickies, dispatch] = useReducer(stickiesReducer,tempData);
    
      // Add sticky 
      function handleAddSticky(sticky){
        dispatch({type: ACTIONS.ADD, payload: sticky})
      }
      
    return (
        <StickiesContext.Provider value={{stickyFormShow, setStickyFormShow, stickies, handleAddSticky}}>
            {children}
        </StickiesContext.Provider>
    )
}
export const useStickies = () => {
    const context = useContext(StickiesContext);
    if (!context) {
      throw new Error("useSticky must be used within a StickesProvider");
    }
    return context;
};
  
