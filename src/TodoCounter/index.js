// const styles = {
//   backgroundColor: 'red'
// }
import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
   const {
    completTodos,
    totalTodos,

  } = React.useContext(TodoContext);

  return (
    <header className="divTiltle">
      <h1
        className="todoTilte"
        // style={{
        //   color: "#360b41",
        //   fontSize: "40px",
        //   backgroundColor: "#ccc9aa",
        //   textAlign: "center",
        //   margin: "10px",
        //   padding: "20px",
        //   borderRadius: "50px",
        //   boxShadow: "2px 2px 2px 1px #360b41"
        // }}
      >
        Has Completado <span className="spanDeco">{completTodos}</span> de{" "}
        <span className="spanDeco">{totalTodos}</span> Tareas
      </h1>
    </header>
  );
}

export { TodoCounter };
