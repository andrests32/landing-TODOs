import "./EmptyTodos.css";
import { TiArrowUpThick } from "react-icons/ti";
import { TiWarningOutline } from "react-icons/ti";

function TodosEmpty() {
  return (
    <main>
      <TiArrowUpThick className="flecha" />
      <div id="container">
        <div>
          <TiWarningOutline id="alerta" />
        </div>
        <span className="container-Span">¡Ups! No tienes tareas, puedes agregar una.</span>
      </div>
    </main>
  );
}

export { TodosEmpty };
