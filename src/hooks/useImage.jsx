import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axios";
import { POST_API, GET_API, DELETE_API, UPDATE_API } from "../utils/api";
import { LOADING, GET_IMG } from "../store/imageSlice";

const useImg = () => {
  const dispatch = useDispatch();
  const { isLoading, img } = useSelector((state) => state.image);

  const handleGetIMG = async (cat) => {
    dispatch(LOADING(true))
    try {
      const res = await axiosInstance.get(GET_API({ cat: cat }).getImage);
      if(res.data.status === "success"){
        // console.log(res.data.images)
        dispatch(GET_IMG(res.data.images))
      }
      dispatch(LOADING(false))
    } catch (e) {
      console.log(e);
      dispatch(LOADING(false));
    }
  };

  return {
    isLoading,
    img,
    handleGetIMG
  };
};

export default useImg
