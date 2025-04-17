import { createContext, useState, useContext } from "react";
import { tempData } from '../constant/constant';

let StickiesContext = createContext();

export default function StickesProvider({children}){
      // Use States 
      const [stickyFormShow, setStickyFormShow] = useState(false);
      const [stickies, setStickies] = useState(tempData);
    
      // Add sticky 
      function handleAddSticky(sticky){
        if(sticky.title.trim() == "" && sticky.description.trim() == ""){
          return;
        }
        setStickies([...stickies,sticky]);
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
  
