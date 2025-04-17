
const CustomeTextarea = ({icon, placeholder, onChange, value}) => {
    return (
      <div className='search'>
        {icon}
        <textarea onChange={(e) => onChange(e.target.value)} value={value} className='search__input' type="text" placeholder={placeholder}/>
      </div>
    )
  }
  
  export default CustomeTextarea