import './Sidebar.css'
// Components
import CategoryList from './CategoryList';
import CustomeInput from  '../atoms/CustomeInput/CustomeInput'
import SidebarLink from './SidebarLink';
import SidebarHeader from './SidebarHeader';
import Tag from './Tag';
import AddNewList from './AddNewList';

// Icons 
import {CalendarMonthOutlinedIcon, StickyNote2OutlinedIcon, ChecklistOutlinedIcon, UpdateOutlinedIcon, AddIcon ,SearchOutlinedIcon} from '../../constant/constant'
import ColoredIcon from '../atoms/ColoredIcon/ColoredIcon';
import { useLists } from '../../context/ListsProvider';

const taskLinks = [
    { title: "Upcomming", icon: <UpdateOutlinedIcon className="sidebar__link-icon" /> },
    { title: "Tasks", icon: <ChecklistOutlinedIcon className="sidebar__link-icon" />, cls: "active" },
    { title: "Callendar", icon: <CalendarMonthOutlinedIcon className="sidebar__link-icon" /> },
    { title: "Sticky Wall", icon: <StickyNote2OutlinedIcon className="sidebar__link-icon" />, num: 12 },
];
  
const tags = [
    {title: 'Tag1', bg:'#FFDADA'},
    {title: 'Tag2', bg:''},
];
export default function Sidebar(){
    const {lists, HandleSetLists, addNewListShow, setAddNewListShow} = useLists();


    return(
        <nav className="sidebar">
            <SidebarHeader />

            <CustomeInput icon={<SearchOutlinedIcon className='search__icon'/>}  placeholder={'Search'}/>

            <CategoryList label={"tasks"}>  
                {
                    taskLinks.map(function(item){
                        return(
                            <SidebarLink title={item.title} icon={item.icon} cls={item.cls} className={item.className}/> 
                        )
                    })
                }
            </CategoryList>

            <CategoryList label={"lists"}>  
                {
                    lists.map(function({title, iconColor}){
                        return(
                            <SidebarLink key={title} title={title} icon={<ColoredIcon style={{ backgroundColor: iconColor }} />} />
                        )
                    })
                }
                <SidebarLink onClick={ () => {setAddNewListShow(!addNewListShow)}}  title={'Add New List'} num={0} icon={<AddIcon />}/>
                {addNewListShow && <AddNewList/>}
            </CategoryList>

            <CategoryList listStyle={{flexDirection: 'row', gap:'.5rem', justifyContent:'flex-start'}} label={"tags"}>  
                {
                    tags.map(function({title, bg}){
                        return(
                            <Tag title={title} bg={bg}/>
                        )
                    })
                }
                <Tag title={'+'}/>
            </CategoryList>
        </nav>
    )
}