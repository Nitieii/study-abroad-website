import { configureStore } from '@reduxjs/toolkit'
import authReducer from './AuthSlice'
import filterReducer from './FilterSlice'
import applicationReducer from './ApplicationSlice'
import dealRegisterReducer from './DealRegisterSlice'
import notiReducer from './NotiSlice'

const rootReducer = {
  auth: authReducer,
  filter: filterReducer,
  noti: notiReducer,
  application: applicationReducer,
  dealRegister: dealRegisterReducer,
}

export default configureStore({
  reducer: rootReducer,
})