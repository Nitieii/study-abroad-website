import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
}

const slice = createSlice({
    name: 'study-abroad',
    initialState,
    reducers:{

    }
})

const { reducer, action } = slice

export default reducer