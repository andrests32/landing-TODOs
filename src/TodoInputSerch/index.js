import React from "react";
import "./TodoInputSerch.css";
import { TodoContext } from "../TodoContext";
import { HiMagnifyingGlass } from "react-icons/hi2";

function TodoInputSerch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div id="container-input">
      <HiMagnifyingGlass id="lupa-input"/>

      <input
        placeholder="Busca tus tareas"
        className="TodoInput"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoInputSerch };
