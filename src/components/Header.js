import React, { useState } from "react";

function Header({ onDarkModeClick }) {
  const [isDarkMode, setDarkMode] = useState(false);
  
  const handleDarkModeClick = () => {
    setDarkMode(!isDarkMode);
    onDarkModeClick(!isDarkMode);
  };

  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
