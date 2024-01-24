// import { CompleteIcon } from './CompleteIcon'
// import { DeleteIcon } from './DeleteIcon'
import "./TodoItems.css";
import { TiTick } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";


function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/* <CompleteIcon /> */}
      {<span
        className={`Icon Icon-check ${props.complete && "Icon-check--active"}`}
        // className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <TiTick className="IconSvgCheck"/>
      </span>}
      <p className={`TodoItem-p ${props.complete && "TodoItem-p--Complete"}`}>
        {props.text}
      </p>
      {/* <DeleteIcon /> */}
      {<span className="Icon Icon-delete"
      onClick={props.onDelete}
      ><TiTimes className="IconSvgDelete"/></span>}
    </li>
  );
}

export { TodoItem };
