import React from 'react'

const CategoryList = ({children, label,style,listStyle}) => {
  return (
    <div className='sidebar__category-list' style={style}>
        <p className='sidebar__label' >{label}</p>
        <div className="sidebar__list" style={listStyle}>
          {children}
        </div>
    </div>
  )
}

export default CategoryList