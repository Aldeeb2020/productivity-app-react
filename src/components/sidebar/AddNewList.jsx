import { useState } from "react";
import CustomeInput from "../atoms/CustomeInput/CustomeInput";
import Button from "../atoms/Button/Button";
import AddIcon from '@mui/icons-material/Add';
import ColoredIcon from "../atoms/ColoredIcon/ColoredIcon";
import { useLists } from "../../context/ListsContext";
import ColorsGroup from "../atoms/ColorsGroup/ColorsGroup";
// Default list colors
export default function AddNewList(){
    const {HandleSetLists} = useLists();
    const [selectedColor, setSelectedColor] = useState('#5C7CFA');
    const [newListTitle, setNewListTitle] = useState('');
    return(
        <div className="add-list">
            <div className="flex gap-5">
                <CustomeInput onChange={setNewListTitle} value={newListTitle} onEnter={() => {
                    HandleSetLists({title: newListTitle, iconColor:selectedColor});
                    setNewListTitle("");
                    setSelectedColor('#5C7CFA');
                    }} icon={<ColoredIcon style={{backgroundColor:selectedColor}} />} placeholder={'List Name'}/>
                <Button onClick={() => {
                    HandleSetLists({title: newListTitle, iconColor:selectedColor});
                    setNewListTitle("");
                    setSelectedColor('#5C7CFA');
                    }} title={<AddIcon />} style={{width: '50px'}} />
            </div>
            <ColorsGroup onClick={setSelectedColor}/>
        </div>
    )
}