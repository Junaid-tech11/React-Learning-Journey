import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter } from 'react-router-dom' // <--- 1. IMPORT THIS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>        {/* <--- 2. OPEN THE ROUTER */}
        <App />
      </BrowserRouter>       {/* <--- 3. CLOSE THE ROUTER */}
    </Provider>
  </React.StrictMode>,
)