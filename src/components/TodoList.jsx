import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo, startEdit }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          startEdit={startEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;