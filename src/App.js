import { TodoCounter } from "./TodoCounter";
import { TodoInputSerch } from "./TodoInputSerch";
import { TodoList } from "./TodoList";
import { TodoAddTodos } from "./TodoAddButton";
import { TodoItem } from "./TodoItems";
import React from "react";

const defaultTodos = [
  { text: "Ver Peliculas", complet: true },
  { text: "Lavar Ropa", complet: true },
  { text: "Cepillar Dientes", complet: false },
  { text: "Leer", complet: false },
  { text: "Escuchar Musica", complet: false }
];
function App() {
  const [tODOs, setTODOs] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  // console.log("Busqueda de datos del search" + searchValue);

  const completTodos = tODOs.filter((todo) => !!todo.complet).length;
  const totalTodos = tODOs.length;

  return (
    <>
      <TodoCounter complet={completTodos} total={totalTodos} />
      <TodoInputSerch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
        <TodoAddTodos />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} complete={todo.complete} />
        ))}
      </TodoList>
    </>
  );
}

export default App;