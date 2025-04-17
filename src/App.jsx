
// Styles
import './styles/style.css';

// Components 
import Sidebar from './components/sidebar/Sidebar';
import StickyWall from './components/stickywall/StickyWall'
import StickyForm from './components/stickywall/StickyForm'
import { useStickies } from './context/StickiesProvider';

// Data 

function App() {
  const {stickyFormShow} = useStickies();
  return (
    <>
    <div className='container'>
        <Sidebar />
        <section className='main-content'>
          <StickyWall />
          {stickyFormShow && <StickyForm/>}
        </section>
    </div>
    </>
  )
}

export default App
