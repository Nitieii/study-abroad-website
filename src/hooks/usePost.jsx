import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axios";
import { POST_API, GET_API, DELETE_API, UPDATE_API } from "../utils/api";
import {
  HANDLE_LOADING,
  GET_POST,
  HANDLE_SET_TYPE,
  GET_TOTALPAGE,
  HANDLE_SET_SELECTED_INDEX,
  GET_CULTURE,
} from "../store/postSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const usePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [arrayPost, setArray] = useState([])
  // arrayPost.length = 3
  const { post, culture, isLoading, type, totalPage, selectedIndex } =
    useSelector((state) => state.post);

  const handleGetPost = async (page, cat, type) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(
        GET_API({ page: page, cat: cat, type: type }).getPost
      );
      // console.log(res.data)
      if (res.data.status === "success") {
        dispatch(GET_TOTALPAGE(res.data.totalPage));
        if (page == 1) {
          // console.log(res.data.posts);
          dispatch(GET_POST(res.data.posts));
          // setArray(res.data.posts)
        } else {
          const newArray = [...post, ...res.data.posts];
          dispatch(GET_POST(newArray));
          // console.log(newArray);
        }
      }
      dispatch(HANDLE_LOADING(false));
    } catch (e) {
      dispatch(HANDLE_LOADING(false));
      console.log(e);
    }
  };

  const handleChangeSetType = (type) => {
    dispatch(HANDLE_SET_TYPE(type));
  };

  const handleGetNews = async (page, cat) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(
        GET_API({ page: page, cat: cat }).getNews
      );
      if (res.data.status === "success") {
        dispatch(GET_TOTALPAGE(res.data.totalPage));
        if (page === 1) {
          dispatch(GET_POST(res.data.posts));
        } else {
          const newArray = [...news, ...res.data.posts];
          dispatch(GET_POST(newArray));
        }
      }
      dispatch(HANDLE_LOADING(false));
    } catch (e) {
      console.log(e);
      dispatch(HANDLE_LOADING(false));
    }
  };

  const handleGetCulture = async (page, cat, type) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(
        GET_API({ page: page, cat: cat, type: type }).getCulture
      );
      if (res.data.status === "success") {
        dispatch(GET_CULTURE(res.data.totalPage));
        if (page === 1) {
          dispatch(GET_CULTURE(res.data.posts));
        } else {
          const newArray = [...culture, ...res.data.posts];
          dispatch(GET_POST(newArray));
        }
      }
      dispatch(HANDLE_LOADING(false));
    } catch (e) {
      console.log(e);
      dispatch(HANDLE_LOADING(false));
    }
  };

  const handleGetSearchResult = async (keyword) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(
        GET_API({ keyword: keyword }).getSearchResult
      );
      if (res.data.status === "success") {
        dispatch(GET_POST(res.data.posts));
        navigate("/ket-qua");
      }
      dispatch(HANDLE_LOADING(false));
    } catch (error) {
      console.log("error", error);
      dispatch(HANDLE_LOADING(false));
    }
  };

  const handleSetSelectedIndex = (index) => {
    dispatch(HANDLE_SET_SELECTED_INDEX(index));
  };

  return {
    post,
    isLoading,
    handleGetPost,
    handleSetSelectedIndex,
    type,
    handleChangeSetType,
    totalPage,
    handleGetSearchResult,
    handleGetNews,
    selectedIndex,
    // arrayPost,
    handleGetCulture,
    culture,
  };
};

export default usePost;
