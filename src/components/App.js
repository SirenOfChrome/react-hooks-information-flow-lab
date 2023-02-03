import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const appClass = isDarkMode ? "App dark" : "App light";

  const handleDarkModeClick = (value) => {
    setDarkMode(value);
  };

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
