import "./TodoItems.css";
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.complete && "Icon-check--active"}`}
        // className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        ✔
      </span>
      <p className={`TodoItem-p ${props.complete && "TodoItem-p--Complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >✘</span>
    </li>
  );
}

export { TodoItem };
