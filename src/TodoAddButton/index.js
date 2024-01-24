import "./TodoAddButton.css";
import { TiPlus } from "react-icons/ti";

function TodoAddTodos() {
  return (
    <button
      className="CreatBttn"
      onClick={(event) => console.log("hiciste click")}
    >
      <p className="iconPlus"><TiPlus /></p>
    </button>
  );
}

export { TodoAddTodos };
