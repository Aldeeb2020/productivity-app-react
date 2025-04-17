export const ACTIONS = {
    ADD: "add"
};
export default function stickiesReducer(stickies, action){
    switch(action.type){
        case ACTIONS.ADD:
            if(action.payload.title.trim() != "" && action.payload.description.trim() != ""){
                return [...stickies,action.payload];
            }else{
                return stickies;
            }
        default:
            return stickies;
    } 
    
}