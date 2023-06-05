import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    pathName: null,
    searchResult: "",
    searchResultPage:""
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
    HANDLE_GET_SEARCH_RESULT_PAGE: (state, action) => {
      state.searchResultPage = action.payload;
    }
  },
});

const {reducer,actions} =slice

export const {HANDLE_GET_PATHNAME,HANDLE_GET_SEARCH_RESULT,HANDLE_GET_SEARCH_RESULT_PAGE} = actions

export default reducer