import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Quill from './components/Quill.jsx'
import StickiesProvider from './context/StickiesContext.jsx'
import ListsProvider from './context/ListsContext.jsx'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <ListsProvider>
    <StickiesProvider >
        <StrictMode>
          <App />
        </StrictMode>
    </StickiesProvider>
  </ListsProvider>
    // <StrictMode>
    //   <Test />
    // </StrictMode>
)
