const GET_API = ({id,  page,cat, type}) => {
    return {
      userById: `/user/${id}`,
      getPost: `/posts?page=${page}&category=${cat}&type=${type}`,
      getNews: `/posts?page=${page}&category=${cat}`,
    };
  }
  
  const POST_API = id => {
    return {
      createUserAccount: `/user`,
      createPost: "/post",
      login: "/login",
    }
  }
  
  const UPDATE_API = id => {
    return {

    }
  }
  
  const DELETE_API = id => {
    return {

    }
  }
  
  export { GET_API, POST_API, UPDATE_API, DELETE_API }