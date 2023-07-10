import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import CreateTodo from "../../domain/useCases/CreateTodo";
import GetTodos from "../../domain/useCases/GetTodos";
import TodoApiClient from "../../infastructure/apiClients/TodoApiClient";
import TodoDataAdapter from "../adapters/TodoDataAdapter";
import Todo from "../../domain/entities/Todo";

export default function DashboardContainer() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const todoApiClient = new TodoApiClient();
      const getTodos = new GetTodos(todoApiClient);
      const todoList = await getTodos.execute();
      setTodos(todoList);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
    setLoading(false);
  };

  const handleCreateTodo = async (todo) => {
    setLoading(true);
    try {
      const todoApiClient = new TodoApiClient();
      const createTodo = new CreateTodo(todoApiClient);
      await createTodo.execute(todo);
      await fetchTodos();
    } catch (error) {
      console.error("Failed to create todo:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <TodoForm onCreateTodo={handleCreateTodo} disabled={loading} />
      {loading ? <p>Loading...</p> : <TodoList todos={todos} />}
    </>
  );
}
