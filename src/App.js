import { TodoCounter } from "./TodoCounter";
import { TodoInputSerch } from "./TodoInputSerch";
import { TodoList } from "./TodoList";
import { TodoAddTodos } from "./TodoAddButton";
import { TodoItem } from "./TodoItems";
import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "Ver Peliculas", complet: true },
  { text: "Lavar Ropa", complet: false },
  { text: "Cepillar Dientes", complet: false },
  { text: "Leer", complet: false },
  { text: "Escuchar Musica", complet: false }
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter complet={16} total={25} />
      <TodoInputSerch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} complet={todo.complet} />
        ))}
      </TodoList>
      <TodoAddTodos />
    </React.Fragment>
  );
}

export default App;
