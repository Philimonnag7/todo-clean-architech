import { useState } from "react";

export default function TodoForm({ onCreateTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onCreateTodo({
      title: title.trim(),
      completed: false,
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
