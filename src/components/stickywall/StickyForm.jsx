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

const StickyForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const {setStickyFormShow, dispatch} = useStickies();
  const [selectedColor, setSelectedColor] = useState('#FF6B6B');
  const [colorMenu, setColorMenu] = useState(false);

  // Add sticky 
  function handleAddSticky(sticky){
    dispatch({type: ACTIONS.ADD, payload: sticky})
  }
  
  return (
    <form className="sticky-form" onSubmit={(e) => {
      e.preventDefault();
      handleAddSticky({id: 15, title:title, description:desc, bg: selectedColor});
      setTitle("");
      setDesc("");
    }}>
        <div className='sticky-from__header'>
            <h3>Sticky:</h3>
            <button onClick={(e) => {
              e.preventDefault();
              setStickyFormShow(false);
            }}><CloseRoundedIcon /></button>
        </div>
        <div className='sticky-form__controll'> 
            <CustomeInput icon={<ColoredIcon onClick={() => setColorMenu(true)} style={{backgroundColor:selectedColor}} />}   onChange={setTitle} value={title} placeholder={'Sticky title'}/>
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