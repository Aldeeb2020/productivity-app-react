import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {useStickies} from '../../context/StickiesContext';


function StickyWall(){
  // Use Context 
  const {setStickyFormShow, stickies} = useStickies();

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
                </div>
              )
            })
          }
        </div>
    </section>
  )
}

export default StickyWall