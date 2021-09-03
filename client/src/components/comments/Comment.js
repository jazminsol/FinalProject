import React from 'react'

function Comment(props) {
   console.log(props)
  return(<div>
    {<img src={props.user.image} alt='pic' width='50' />}{props.content}
  </div>)
}

export default Comment