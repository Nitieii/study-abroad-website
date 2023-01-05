import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    pathName: null,
    searchResult: []
}

const slice = createSlice({
  name: "pathName",
  initialState,
  reducers: {
    HANDLE_GET_PATHNAME: (state, action) => {
      state.pathName = action.payload;
    },
    HANDLE_GET_SEARCH_RESULT: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

const {reducer,actions} =slice

export const {HANDLE_GET_PATHNAME,HANDLE_GET_SEARCH_RESULT} = actions

export default reducer