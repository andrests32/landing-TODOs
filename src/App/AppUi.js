import { TodoCounter } from "../TodoCounter";
import { TodoInputSerch } from "../TodoInputSerch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItems";
import { TodoAddTodos } from "../TodoAddButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { TodoContext } from "../TodoContext";
import React from "react";

function AppUi() {
  // Con esta sintaxis lo que hacemos es sintetizar el (Consumer evitando las funciones en la cual tendremos que agregar las props de nuestro provider )
  const { loading, error, serchedTodos, checkTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <>
      <TodoCounter
      // complet={completTodos} total={totalTodos}
      />
      <TodoInputSerch
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      />
      <TodoAddTodos />

      {/* Podemos usar esta sintaxis para hacer un consumo de nuestro (TODOCONTEXT), haciendo uso de la siguiente sintaxis (TodoContext.Consumer) en donde encapsulamos todo el codigo dentro del mismo para poder agregar las prosp que queramos recibir de nuestro provider */}
      {/* <TodoContext.Consumer> */}
      {/* {({loading, error, serchedTodos, checkTodo, deleteTodo }) => ( */}

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && serchedTodos.length === 0 && <TodosEmpty />}
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
      {/* )} */}
      {/* </TodoContext.Consumer> Este codigo comentado hace referencia arriba */}
    </>
  );
}

export { AppUi };
