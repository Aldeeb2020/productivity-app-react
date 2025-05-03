import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StickiesProvider from './context/StickiesProvider.jsx'
import ListsProvider from './context/ListsProvider.jsx'
import Test from './Test.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <ListsProvider>
    <StickiesProvider >
        <StrictMode>
          <App />
        </StrictMode>
    </StickiesProvider>
  </ListsProvider>
  </Provider>
    // <StrictMode>
    //   <Test />
    // </StrictMode>
)
