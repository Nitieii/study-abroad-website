import {createSlice} from "@reduxjs/toolkit"

const initialSlice ={
    pathName: null
}

const slice = createSlice({
    name: 'pathName',
    initialSlice,
    reducers: {
        HANDLE_GET_PATHNAME:(state,action) => {
            state.pathName = window.location.pathname
        }
    }
})

const {reducer,actions} =slice

export const {HANDLE_GET_PATHNAME} = actions

export default reducer