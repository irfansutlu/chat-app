import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> STL Chat</span>
      <div className="user">
        <img
          src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar