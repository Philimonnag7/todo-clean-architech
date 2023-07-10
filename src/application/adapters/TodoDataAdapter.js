export default class TodoDataAdapter {
  static adapt(todoData) {
    return {
      id: todoData.id,
      title: todoData.title,
      completed: todoData.completed,
    };
  }
}
