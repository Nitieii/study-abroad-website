import { configureStore } from '@reduxjs/toolkit'
import pathNameReducer from './pathNameSlice'
import postReducer from './postSlice'
import ImageSlice from "./imageSlice"

const rootReducer = {
 pathName: pathNameReducer,
 post: postReducer,
 image: ImageSlice
}

export default configureStore({
  reducer: rootReducer,
})