import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'pink',
  textDecoration: 'none',
  color: 'white',
}


const NavBar = (props) => {
  
  return(
    <div className="navbar" >

    <NavLink to='/posts' exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}><span> Feed </span></NavLink> | 

      <NavLink to='/posts/new' style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}><span> New Post </span></NavLink> |

      <NavLink to='/home' style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}><span> Home </span></NavLink> | 
 

      <NavLink to='/logout'exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}><span> Log Out </span></NavLink> 
    </div>
  ) 
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.users)
  return {
    user: state.users.currentUser
  }
}
export default connect(mapStateToProps)(NavBar);