import React from "react";
import Chats from "./Chats.jsx";
import Navbar from "./Navbar.jsx";
import Search from "./Search.jsx";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;
