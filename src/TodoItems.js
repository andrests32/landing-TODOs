import "./TodoItems.css";
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.complet && "Icon-check--active"}`}
      >
        ✔
      </span>
      <p className={`TodoItem-p ${props.complet && "TodoItem-p--Complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">✘</span>
    </li>
  );
}

export { TodoItem };
