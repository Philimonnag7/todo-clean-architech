export default class GetTodos {
  constructor(todoApiClient) {
    this.todoApiClient = todoApiClient;
  }

  execute() {
    return this.todoApiClient.getAll();
  }
}
