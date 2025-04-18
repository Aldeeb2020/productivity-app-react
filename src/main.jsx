import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StickiesProvider from './context/StickiesProvider.jsx'
import ListsProvider from './context/ListsProvider.jsx'
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
