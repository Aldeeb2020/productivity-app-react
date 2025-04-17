
import  './CustomeInput.css'
const CustomeInput = ({icon, placeholder,value, onChange, onEnter}) => {
  
  return (
    <div className="custome-input">
      {icon}
      <input onKeyDown={(e) => {
        if(e.key == 'Enter' &&   onEnter){
          onEnter();
          e.target.value = "";
        }
      }} onChange={ (e) => {
        if(onChange){
          onChange(e.target.value);
        }
      }
      } value={value} className='custome-input__input' type="text" placeholder={placeholder}/>
    </div>
  )
}

export default CustomeInput