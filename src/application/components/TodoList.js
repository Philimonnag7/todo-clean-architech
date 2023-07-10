export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
        </li>
      ))}
    </ul>
  );
}
