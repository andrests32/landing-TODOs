import { TodoCounter } from "../TodoCounter";
import { TodoInputSerch } from "../TodoInputSerch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItems";
import { TodoAddTodos } from "../TodoAddButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError"
import { TodosEmpty } from "../TodosEmpty"

function AppUi({
  loading,
  error,
  completTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  serchedTodos,
  checkTodo,
  deleteTodo
}) {
  return (
    <>
      <TodoCounter complet={completTodos} total={totalTodos} />
      <TodoInputSerch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoAddTodos />
      <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError/>}
        {(!loading && serchedTodos.length === 0) && <TodosEmpty/>}
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

export { AppUi };