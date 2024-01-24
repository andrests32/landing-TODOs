import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoInputSerch } from "../TodoInputSerch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItems";
import { TodoAddTodos } from "../TodoAddButton";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   { text: "Ver Peliculas", complete: false },
//   { text: "Lavar Ropa", complete: false },
//   { text: "Cepillar Dientes", complete: false },
//   { text: "Leer", complete: false },
//   { text: "Escuchar Musica", complete: false }
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));



function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  // console.log("Busqueda de datos del search" + searchValue);

  const completTodos = todos.filter((todo) => !!todo.complete).length;
  const totalTodos = todos.length;

  const serchedTodos = todos.filter((todo) => {
    const todoTex = todo.text.toLowerCase();
    const serchText = searchValue.toLowerCase();
    return todoTex.includes(serchText);
  });

  const checkTodo = (text) => {
    const newTodos = [...todos];
    const indexTodos = newTodos.findIndex((todos) => todos.text === text);
    newTodos[indexTodos].complete = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const indexTodos = newTodos.findIndex((todos) => todos.text === text);
    newTodos.splice(indexTodos, 1);
    saveTodos(newTodos);
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
    </>
  );
}

export default App;
