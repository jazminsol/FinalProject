export default (state = { users:[], currentUser: "", loading: false}, action ) => {
    switch(action.type){
      case "LOADING_USERS":
        return {
          ...state,
          loading: true
        }
  
      case "USERS_LOADED":
        return {
          users: action.payload,
          loading: false
        }
  
      case "SHOW_USER":
        return {
          ...state,
          loading: true
        }
  
      case "SHOWING_USER":
        return {
          users: action.payload,
          loading: false
        }
  
      case "CREATE_USER":
        return{
          ...state,
          loading: true
        }
  
      case "CREATED_USER":
        return {
          users: [...state.users, action.payload], 
          loading: false
        }
      
      case "GET_USER":
        return {
          ...state,
          loading: true
        }
        
  
      case "GOT_USER":
        return {
          ...state,
          currentUser: action.payload,
          loading: false
        }
      
      case "EDIT_USER":
        return {
          ...state,
          loading: true
        }
  
      case "EDITED_USER":
        return {
          ...state,
          currentUser: action.payload,
          loading: false
        }
  
      case "LOG_OUT":
        return {
          ...state,
          loading: true
        }
  
      case "LOGGED_OUT":
        return {
          ...state,
          users: [],
          currentUser: "",
          loading: false
        }
  
      default: 
      return state
    }
  }