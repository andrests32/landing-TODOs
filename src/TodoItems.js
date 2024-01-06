import "./TodoItems.css";
function TodoItem(props) {
  return (
    <section>
      <div className="containerTodoItems">
        <li className="TodoItem">
          <span className="Icon Icon-check Icon-check--active">V</span>
          <p className="TodoItem-p TodoItem-p--Complete">{props.text}</p>
          <span className="Icon Icon-delete">X</span>
        </li>
      </div>
    </section>
  );
}

export { TodoItem };
