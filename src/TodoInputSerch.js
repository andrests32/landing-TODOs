import React from "react";
import "./TodoInputSerch.css";
function TodoInputSerch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Ingresa una nueva tarea"
      className="TodoInput"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoInputSerch };
