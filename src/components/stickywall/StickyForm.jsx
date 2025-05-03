import React, {useState } from 'react'
// Components
import CustomeInput from '../atoms/CustomeInput/CustomeInput'
import CustomeTextarea from '../atoms/CustomeTextarea/CustomeTextarea'
import Button from '../atoms/Button/Button';
import ColoredIcon from '../atoms/ColoredIcon/ColoredIcon';
// Icons
import {CloseRoundedIcon} from '../../constant/constant';
import { useStickies } from '../../context/StickiesProvider';
import ColorsGroup from '../atoms/ColorsGroup/ColorsGroup';
import { ACTIONS } from '../../reducers/stickiesReducer';

// Context

const StickyForm = ({mode = "add", stickyToUpdate}) => {
  const [id, setId] = useState(mode == "update" ? stickyToUpdate.id : 15);
  const [title, setTitle] = useState(mode == "update" ? stickyToUpdate.title : "");
  const [desc, setDesc] = useState(mode == "update" ? stickyToUpdate.desc : "");
  const [selectedColor, setSelectedColor] = useState(mode == "update" ? stickyToUpdate.bg : '#FF6B6B');
  const {setStickyFormShow, dispatch} = useStickies();
  const [colorMenu, setColorMenu] = useState(false);

  // Add sticky 
  function handleSubmit(e,sticky){
    e.preventDefault();
    if(mode == "add"){
      handleAddSticky(sticky);
    }else{
      handleUpdateSticky(sticky);
    }
    setTitle("");
    setDesc("");
  }

  function handleAddSticky(sticky){
    dispatch({type: ACTIONS.ADD, payload: sticky})
  }
  
  function handleUpdateSticky(sticky){
    dispatch({type: ACTIONS.UPDATE, payload: sticky})
  }

  return (
    <form className="sticky-form" onSubmit={(e) => {
      handleSubmit(e, {id: id, title:title, description:desc, bg: selectedColor})
    }}>
        <div className='sticky-from__header'>
            <h3> {mode == "update" ? "Update " : "Add "}Sticky:</h3>
            <button onClick={(e) => {
              e.preventDefault();
              setStickyFormShow(false);
            }}><CloseRoundedIcon /></button>
        </div>
        <div className='sticky-form__controll'> 
            <CustomeInput  icon={<ColoredIcon onClick={() => setColorMenu(true)} style={{backgroundColor:selectedColor}} />}   onChange={setTitle} value={title} placeholder={'Sticky title'}/>
        </div>
        <ColorsGroup onClick={setSelectedColor} />

        <div className='sticky-form__controll'> 
            <CustomeTextarea onChange={setDesc} value={desc} placeholder={'Description'}/>
        </div>
        <div className='sticky-form__buttons-group'> 
            <Button title={'Delete'} type={'outline'}/>
            <Button title={'Save'}/>
        </div>
    </form>
  )
}

export default StickyForm