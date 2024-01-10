import "./TodoAddButton.css";

function TodoAddTodos() {
  return (
    <button
      className="CreatBttn"
      onClick={(event) => console.log("hiciste click")}
    >
      +
    </button>
  );
}

export { TodoAddTodos };
