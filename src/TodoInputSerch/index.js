import React from "react";
import "./TodoInputSerch.css";
import { TodoContext } from "../TodoContext";
function TodoInputSerch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
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
