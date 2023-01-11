const GET_API = (id,  page  =  1, type) => {
    return {
      userById: `/user/${id}`,
      getImage:`images?category=${cat}`,
      getPost: `/posts?page=${page}&category=${cat}&type=${type}`,
      getNews: `/posts?page=${page}&category=${cat}`,
      getCultures: `/post?page=${page}&category=${cat}`,
    }
  }
  
  const POST_API = id => {
    return {

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