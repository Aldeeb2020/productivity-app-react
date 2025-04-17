import React from 'react'
import './ColoredIcon.css'
const ColoredIcon = ({style, onClick}) => {
  return (
    <div style={style} onClick={() => onClick()} className='colored-icon'></div>
  )
}

export default ColoredIcon