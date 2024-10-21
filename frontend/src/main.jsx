import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import rootReducer from "./Reducers"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer:rootReducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>      
    </Provider>
)
