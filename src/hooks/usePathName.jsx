import React from "react";
import { HANDLE_GET_PATHNAME ,HANDLE_GET_SEARCH_RESULT,HANDLE_GET_SEARCH_RESULT_PAGE} from "../store/pathNameSlice";
import { useDispatch, useSelector } from "react-redux";

function usePathName() {
  const dispatch = useDispatch();
  const { pathName,searchResult,searchResultPage } = useSelector((state) => state.pathName);

  const handleGetPathName = (path) => {
    dispatch(HANDLE_GET_PATHNAME(path));
  } 

  const handleSearch = (kw) => {
    dispatch(HANDLE_GET_SEARCH_RESULT(kw))
    dispatch(HANDLE_GET_SEARCH_RESULT_PAGE(kw))
  }

  return {handleGetPathName,pathName,handleSearch,searchResult,searchResultPage}
}

export default usePathName;
