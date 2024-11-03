import { configureStore } from '@reduxjs/toolkit'
import appReducer from './AppSlice';

//This creates a Redux store 
const store = configureStore({
  reducer:{
    app:appReducer

  }
  
  })

export default store