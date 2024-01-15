import { TodoCounter } from "./TodoCounter";
import { TodoInputSerch } from "./TodoInputSerch";
import { TodoList } from "./TodoList";
import { TodoAddTodos } from "./TodoAddButton";
import { TodoItem } from "./TodoItems";
import React from "react";
import { BrowserRouter } from "./BrowserRouter";

const defaultTodos = [
  { text: "Aprender Laravel", complete: true },
  { text: "Polimorfismo con PHP", complete: false },
  { text: "Metodos de Abstraccion", complete: false },
  { text: "Leer Habitos atomicos", complete: false },
  { text: "Buscar nuevas canciones", complete: false }
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

  const checkTodo = (text) => {
    const newTodos = [...tODOs];
    const indexTodos = newTodos.findIndex((tODOs) => tODOs.text === text);
    newTodos[indexTodos].complete = true;
    setTODOs(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...tODOs];
    const indexTodos = newTodos.findIndex((tODOs) => tODOs.text === text);
    newTodos.splice(indexTodos, 1);
    setTODOs(newTodos);
  };

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
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
            onComplete={() => checkTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <BrowserRouter basename="../public/index2.html"></BrowserRouter>
    </>
  );
}

export default App;
