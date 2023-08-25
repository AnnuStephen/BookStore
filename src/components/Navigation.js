import React from "react";

const Navigation = ({ navigate }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => navigate("home")}>Home</li>
        <li onClick={() => navigate("allbooks")}>All Books</li>
        <li onClick={() => navigate("about")}>About</li>
        <li onClick={() => navigate("login")}>Login</li>
      </ul>
    </nav>
  );
};

export default Navigation;
