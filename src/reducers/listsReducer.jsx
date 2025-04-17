import { ACTIONS } from "./stickiesReducer";

export default function listsReducer(lists, action){
    switch(action.type){
        case ACTIONS.ADD:
            if(action.payload.title.trim() != ""){
                return [...lists, action.payload];
            }else{
                return lists;
            }
        default:
            return lists;
    }
}