import React from 'react'

const Tag = ({title, bg}) => {
  return (
    <div className='tag' style={{backgroundColor:bg}}>
        {title}
    </div>
  )
}

export default Tag