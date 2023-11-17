import React from 'react'

function User(props) { //{userObj:{}}
  return (
   <div className="card">
    <img src={props.userObj.avatar} className='w-100' alt="" />
    <div className="card-body">
        <p className="lead fs2">{props.userObj.first_name} {props.userObj.first_name}</p>
        <p className="lead">{props.userObj.email}</p>
    </div>
   </div>
  )
}

export default User