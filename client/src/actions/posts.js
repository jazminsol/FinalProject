export const getPosts = () =>{
    return ( dispatch ) => {
      dispatch({type: 'LOADING_POSTS'})
        fetch('http://localhost:3000/posts')
        .then(resp => resp.json())
        .then(posts => {
          console.log(posts)
          dispatch({type: "POSTS_LOADED", payload: posts})
        })
    }
  }
  
  
  export const showPost = (id) =>{
    return ( dispatch ) => {
      dispatch({type: 'SHOW_POST'}, id)
        fetch(`http://localhost:3000/posts/${id}`)
        .then(resp => resp.json())
        .then(Post => {
          dispatch({type: "SHOWING_POST", payload: Post})
        })
        // debugger
    }
  }
  
  export const createPost = ( post) => {
    return ( dispatch ) => {
      dispatch({type: "CREATE_POST"}, post)
      fetch("http://localhost:3000/posts", {
        method: 'POST',
        body: post,
        header: {
          "Content-Type": 'multipart/form-data'
        }
      })
      .then( resp => resp.json())
      .then(newPost => {
        // debugger
        return dispatch({type: "CREATED_POST", payload: newPost})
      })
    }
  }
  
  
  
  export const toEdit = (id, post) => {
    return (dispatch) => {
      dispatch({type: "EDIT_POST"})
      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        body: post,
        header:{
          "Content-Type": 'multipart/form-data'
        }
      })
      .then( resp => resp.json())
      
      .then( editedPost => {
        // debugger
        return dispatch({type: "EDITED_POST", payload: editedPost})
      })
    }
  }
  
  export const deletePost = (id) => {
    return (dispatch) => {
      dispatch({type: "DELETE_POST"})
      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
        headers:{
          "Content-Type": 'application/json'
        }
      })
      .then( dispatch({type: "DELETED_POST", payload: id}))
      
    }
  }