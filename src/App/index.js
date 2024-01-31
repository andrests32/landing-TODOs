import React from "react";
import { AppUi } from "./AppUi";
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
  // Cuando hacemos el importe de nuestras props como objeto debemos tomar muy encuenta que los nombres que colocamos dentro de nuestro custom hooks sera iguales, 
  // const {todos, saveTodos} = useLocalStorage("TODOS_V1", []);
  // Ahora si deseamos ocupar el mismo nombre de nuestros parametros anteriores usaremos los props nombrados es decir los colocaremos con los puntos indicando que peternecen asi al objeto que llamamos del custome hooks. 
  // const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);
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
    <AppUi
      loading={loading}
      error={error}
      completTodos={completTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      serchedTodos={serchedTodos}
      checkTodo={checkTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
