import React from 'react'
import './ColorsGroup.css';
import { listColors } from '../../../constant/constant';
const ColorsGroup = ({onClick}) => {
    
  return (
    <div className='colors-group'>
        {listColors.map((color) => {
            return <div  onClick={() => onClick(color)} style={{backgroundColor: color}}></div>
        })}
    </div>
  )
}

export default ColorsGroup