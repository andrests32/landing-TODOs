import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onsubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCnacel = () => {
    setOpenModal(false);
  };

  const onchange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onsubmit}>
      <label className="title">Agrega una nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onchange}
        typeof="text"
        className="textarea"
      />
      <div className="buttons">
        <button type="submit" className="TodoForm-button TodoForm--add">
          Agregar
        </button>
        <button
          type="button"
          className="TodoForm-button TodoForm--Cancel"
          onClick={onCnacel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
