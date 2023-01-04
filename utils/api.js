const GET_API = (id,  page  =  1, type) => {
    return {
      userById: `/user/${id}`,
    }
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