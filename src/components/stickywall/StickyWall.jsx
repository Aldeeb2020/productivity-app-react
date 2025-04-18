import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {useStickies} from '../../context/StickiesProvider';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ACTIONS } from '../../reducers/stickiesReducer';
function StickyWall(){
  // Use Context 
  const {setStickyFormShow, stickies, dispatch} = useStickies();

  return (
    <section className='sticky-wall'>

        <div className="sticky-wall__header">
            <h1>Sticky Wall</h1>
            <button className='sticky_wall__addbtn' onClick={(e) => {
              e.preventDefault();
              setStickyFormShow(true);
            }}><AddRoundedIcon /></button>
        </div>
        
        <div className="sticky-wall__stickies">
          {
            stickies.map(function(sticky){
              return (
                <div className='sticky' style={{backgroundColor: sticky.bg}}>
                  <h3 className='sticky__title'>{sticky.title}</h3>
                  <p>{sticky.description}</p>
                  <HighlightOffIcon onClick={() => dispatch({type: ACTIONS.DELETE, payload: sticky.id})} className='sticky__delete'/>
                </div>
              )
            })
          }
        </div>
    </section>
  )
}

export default StickyWall