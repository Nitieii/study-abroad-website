import React from "react";
import { HANDLE_GET_PATHNAME ,HANDLE_GET_SEARCH_RESULT} from "../store/pathNameSlice";
import { useDispatch, useSelector } from "react-redux";

function usePathName() {
  const dispatch = useDispatch();
  const { pathName,searchResult } = useSelector((state) => state.pathName);

  const handleGetPathName = (path) => {
    dispatch(HANDLE_GET_PATHNAME(path));
  } 

  const handleGetSearchResult = (kw) => {
    dispatch(HANDLE_GET_SEARCH_RESULT(kw))
  }

  return {handleGetPathName,pathName,handleGetSearchResult,searchResult}
}

export default usePathName;
