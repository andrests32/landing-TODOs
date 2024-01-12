import { TodoCounter } from "./TodoCounter";
import { TodoInputSerch } from "./TodoInputSerch";
import { TodoList } from "./TodoList";
import { TodoAddTodos } from "./TodoAddButton";
import { TodoItem } from "./TodoItems";
import React from "react";

const defaultTodos = [
  { text: "Ver Peliculas", complete: true },
  { text: "Lavar Ropa", complete: false },
  { text: "Cepillar Dientes", complete: false },
  { text: "Leer", complete: false },
  { text: "Escuchar Musica", complete: false }
];
function App() {
  const [tODOs, setTODOs] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  // console.log("Busqueda de datos del search" + searchValue);

  const completTodos = tODOs.filter((todo) => !!todo.complete).length;
  const totalTodos = tODOs.length;

  const serchedTodos = tODOs.filter((todo) => {
    const todoTex = todo.text.toLowerCase();
    const serchText = searchValue.toLowerCase();
    return todoTex.includes(serchText);
  });

  return (
    <>
      <TodoCounter complet={completTodos} total={totalTodos} />
      <TodoInputSerch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoAddTodos />
      <TodoList>
        {serchedTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} complete={todo.complete} />
        ))}
      </TodoList>
    </>
  );
}

export default App;
