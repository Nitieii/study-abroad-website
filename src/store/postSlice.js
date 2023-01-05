import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  post: [],
  totalPage: 1,
  type: "du-hoc-han-quoc",
};

const slice = createSlice({
  name: "post",
  initialState,
  reducers: {
    HANDLE_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
    GET_POST: (state, action) => {
      state.post = action.payload;
    },
    HANDLE_SET_TYPE: (state, action) => {
      state.type = action.payload;
    },
    GET_TOTALPAGE: (state, action) => {
      state.totalPage = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { GET_POST, HANDLE_LOADING, HANDLE_SET_TYPE, GET_TOTALPAGE } =
  actions;

export default reducer;
