import classNames from "classnames";

const SidebarLink = ({title, icon, cls, num = 0, onClick}) => {
  return (
    <div className={classNames("sidebar__link ", cls)} onClick={onClick}>
        <div className='sidebar__link-left'>
            {icon}
            <p>{title}</p>
        </div>
        <div className='sidebar__link-right' style={{display: num == 0 && 'none'}}>{num}</div>
    </div>
  )
}

export default SidebarLink