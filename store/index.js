import { configureStore } from '@reduxjs/toolkit'
import pathNameReducer from './pathNameSlice'


const rootReducer = {
 pathName: pathNameReducer
}

export default configureStore({
  reducer: rootReducer,
})