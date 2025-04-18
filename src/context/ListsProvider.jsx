import React, { createContext, useContext, useReducer, useState } from 'react'
import listsReducer from '../reducers/listsReducer';

const ListsContext = createContext();

const listLinks = [
    { title: "Personal", iconColor: "#FF6B6B" },
    { title: "Work", iconColor: "#66D9E8" },
    { title: "List1", iconColor: "#FFD43B" },
    { title: "List12", iconColor: "#FFD43B" },
    { title: "List3", iconColor: "#FFD43B" },
];

const ListsProvider = ({children}) => {
    const [addNewListShow, setAddNewListShow] = useState(false);
    const [lists, dispatch] = useReducer(listsReducer,listLinks);


    
  return (
    <ListsContext.Provider value={{lists, dispatch, addNewListShow, setAddNewListShow}}>
        {children}
    </ListsContext.Provider>
  )
}
export function useLists(){
    return useContext(ListsContext);
}
export default ListsProvider;