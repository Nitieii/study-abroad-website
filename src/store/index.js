import { configureStore } from '@reduxjs/toolkit'
import pathNameReducer from './pathNameSlice'
import StudyAbroadSlice from './StudyAbroadSlice'


const rootReducer = {
 pathName: pathNameReducer,
 StudyAbroad: StudyAbroadSlice,
}

export default configureStore({
  reducer: rootReducer,
})