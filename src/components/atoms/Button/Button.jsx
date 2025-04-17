import './Button.css'
export default function Button({title,type, style, onClick}){
    return(
        <button onClick={onClick} style={style} className={`button ${type == 'outline' ? 'button--outline':''}`}>
            {title}
        </button>
    )
}