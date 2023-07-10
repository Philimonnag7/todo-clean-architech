export default class TodoApiClient {
  getAll() {
    // Simulate API call and return todo list
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Buy groceries", completed: false },
          { id: 2, title: "Do laundry", completed: true },
          { id: 3, title: "Walk the dog", completed: false },
        ]);
      }, 1000);
    });
  }

  create(todo) {
    // Simulate API call to create a new todo
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: Date.now(), ...todo });
      }, 500);
    });
  }
}
