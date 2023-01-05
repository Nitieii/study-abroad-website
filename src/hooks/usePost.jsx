import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axios"
import { POST_API, GET_API, DELETE_API, UPDATE_API } from "../utils/api";
import {
  HANDLE_LOADING,
  GET_POST,
  HANDLE_SET_TYPE,
  GET_TOTALPAGE,
} from "../store/postSlice";


const usePost = () => {
  const dispatch = useDispatch();

  const { post, isLoading, type, totalPage } = useSelector(
    (state) => state.post
  );

  const handleGetPost = async (page, cat, type) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(
        GET_API({ page: page, cat: cat, type: type }).getPost
      );
        console.log(res.data)
      if (res.data.status === "success") {
        dispatch(GET_TOTALPAGE(res.data.totalPage));
        if (page == 1) {
          console.log(res.data.posts);
          dispatch(GET_POST(res.data.posts));
        } else {
          const newArray = [...post, ...res.data.posts];
          dispatch(GET_POST(newArray));
          console.log(newArray);
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

  return {
    post,
    isLoading,
    handleGetPost,

    type,
    handleChangeSetType,
    totalPage,
  };
};

export default usePost;
