import React from "react";
import "./TodoAddButton.css";
import { TiPlus } from "react-icons/ti";
import { TodoContext } from "../TodoContext";

function TodoAddTodos() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <button
      className="CreatBttn"
      onClick={() => {
        !openModal ? setOpenModal(true) : setOpenModal(false);
      }}
    >
      <p className="iconPlus">
        <TiPlus />
      </p>
    </button>
  );
}

export { TodoAddTodos };
