import React from 'react'
import Add from "../images/addAvatar.png"

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className='logo'>STL Chat</span>
        <span className='title'>Register</span>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id='file' style={{display:"none"}}/>
          <label htmlFor="file"><img src={Add}/><span>Add an avatar</span></label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register