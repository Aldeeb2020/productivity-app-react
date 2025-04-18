import { useState } from "react";
import CustomeInput from "../atoms/CustomeInput/CustomeInput";
import Button from "../atoms/Button/Button";
import AddIcon from '@mui/icons-material/Add';
import ColoredIcon from "../atoms/ColoredIcon/ColoredIcon";
import { useLists } from "../../context/ListsProvider";
import ColorsGroup from "../atoms/ColorsGroup/ColorsGroup";
import { ACTIONS } from "../../reducers/stickiesReducer";
// Default list colors
export default function AddNewList(){
    const {dispatch} = useLists();
    const [selectedColor, setSelectedColor] = useState('#5C7CFA');
    const [newListTitle, setNewListTitle] = useState('');
    function HandleAddList(newList){
        dispatch({type: ACTIONS.ADD, payload: newList})
    }
    return(
        <div className="add-list">
            <div className="flex gap-5">
                <CustomeInput onChange={setNewListTitle} value={newListTitle} onEnter={() => {
                    HandleAddList({title: newListTitle, iconColor:selectedColor});
                    setNewListTitle("");
                    setSelectedColor('#5C7CFA');
                    }} icon={<ColoredIcon style={{backgroundColor:selectedColor}} />} placeholder={'List Name'}/>
                <Button onClick={() => {
                    HandleAddList({title: newListTitle, iconColor:selectedColor});
                    setNewListTitle("");
                    setSelectedColor('#5C7CFA');
                    }} title={<AddIcon />} style={{width: '50px'}} />
            </div>
            <ColorsGroup onClick={setSelectedColor}/>
        </div>
    )
}