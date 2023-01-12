import { createSlice } from "@reduxjs/toolkit";
const InitialState = {
  isLoading: false,
  img: [],
};

const slice = createSlice({
  name: "image",
  initialState: InitialState,
  reducers: {
    LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
    GET_IMG: (state, action) => {
      state.img = action.payload;
    },
  },
});

const { reducer, actions } = slice;

export const { LOADING, GET_IMG } = actions;

export default reducer;
