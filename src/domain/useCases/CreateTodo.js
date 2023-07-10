export default class CreateTodo {
  constructor(todoApiClient) {
    this.todoApiClient = todoApiClient;
  }

  execute(todo) {
    return this.todoApiClient.create(todo);
  }
}
