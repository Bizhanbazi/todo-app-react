function TodoForm({ addTodo, editId, editText, setEditText, saveEdit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editText.trim()) return;

    if (editId) {
      saveEdit();
    } else {
      addTodo(editText);
    }

    setEditText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />

      <button type="submit">
        {editId ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default TodoForm;