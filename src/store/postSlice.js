import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  post: [],
  culture: [],
  totalPage: 1,
  type: "",
  selectedIndex: 0,
};
const slice = createSlice({
  name: "post",
  name: "culture",
  initialState,
  reducers: {
    HANDLE_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
    GET_POST: (state, action) => {
      state.post = action.payload;
    },
    GET_CULTURE: (state, action) => {
      state.culture = action.payload;
    },
    HANDLE_SET_TYPE: (state, action) => {
      state.type = action.payload;
    },
    GET_TOTALPAGE: (state, action) => {
      state.totalPage = action.payload;
    },
    HANDLE_SET_SELECTED_INDEX: (state, action) => {
      state.selectedIndex = action.payload;
    },
    
  },
});

const { reducer, actions } = slice;
export const {
  GET_POST,
  HANDLE_LOADING,
  GET_CULTURE,
  HANDLE_SET_TYPE,
  GET_TOTALPAGE,
  HANDLE_SET_SELECTED_INDEX,
} = actions;

export default reducer;
