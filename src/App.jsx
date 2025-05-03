
// Styles
import './styles/style.css';

// Components 
import Sidebar from './components/sidebar/Sidebar';
import StickyWall from './components/stickywall/StickyWall'
import StickyForm from './components/stickywall/StickyForm'
import { useStickies } from './context/StickiesProvider';

// Data 

function App() {
  const {stickyFormShow, formData} = useStickies();
  return (
    <>
    <div className='container'>
        <Sidebar />
        <section className='main-content'>
          <StickyWall />
          {stickyFormShow == "add" && <StickyForm /> }
          {stickyFormShow == "update" && <StickyForm mode='update' stickyToUpdate={formData}/> }
        </section>
    </div>
    </>
  )
}

export default App
