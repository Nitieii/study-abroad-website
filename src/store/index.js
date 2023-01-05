import { configureStore } from '@reduxjs/toolkit'
import pathNameReducer from './pathNameSlice'
import postReducer from './postSlice'


const rootReducer = {
 pathName: pathNameReducer,
 post: postReducer
}

export default configureStore({
  reducer: rootReducer,
})