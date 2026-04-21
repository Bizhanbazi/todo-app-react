function TodoItem({ todo, deleteTodo, toggleTodo, startEdit }) {
  return (
    <div className="todo-item">
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>

      <div className="actions">
        <button onClick={() => startEdit(todo)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;