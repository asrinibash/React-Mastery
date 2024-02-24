import React,{useContext} from 'react';
import userContext from '../Context/userContext';

function profile() {
    const {user}=useContext(userContext);
    if(!user) return (
        <div>Please Login</div>
    )
    else return (
    <div>Welcome {user.username}</div>
  )
}

export default profile