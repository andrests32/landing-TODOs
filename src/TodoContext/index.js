import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);
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
    <TodoContext.Provider
      value={{
        loading,
        error,
        completTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        serchedTodos,
        checkTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
