import React from 'react'

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className='logo'>STL Chat</span>
        <span className='title'>Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login