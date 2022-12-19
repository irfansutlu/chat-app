import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find a user"/>
      </div>
      <div className="user-chat">
        <img src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" />
        <div className="userchat-info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
