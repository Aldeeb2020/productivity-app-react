import React, { createContext, useContext, useState } from 'react'

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
    const [lists, setLists] = useState(listLinks);

    function HandleSetLists(newList){
        if(newList.title.trim() != ""){
            setLists([...lists, newList]);
        }
    }
    
  return (
    <ListsContext.Provider value={{lists, HandleSetLists, addNewListShow, setAddNewListShow}}>
        {children}
    </ListsContext.Provider>
  )
}
export function useLists(){
    return useContext(ListsContext);
}
export default ListsProvider;