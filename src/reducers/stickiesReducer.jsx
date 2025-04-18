export const ACTIONS = {
    ADD: "add",
    DELETE: "delete"
};
export default function stickiesReducer(stickies, action){
    switch(action.type){
        case ACTIONS.ADD:{
            if(action.payload.title.trim() != "" && action.payload.description.trim() != ""){
                return [...stickies,action.payload];
            }else{
                return stickies;
            }
        }
        case ACTIONS.DELETE: {
            console.log(action.payload);

            return stickies.filter(item => item.id != action.payload);
        }
        default:
            return stickies;
    } 
    
}