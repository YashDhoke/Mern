/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  // Constructor to initialize the todo list
  constructor() {
    // Initialize an empty array to store todos
    this.todos = [];
  }

  // Method to add a new todo to the list
  add(todo) {
    // Push the provided todo to the todos array
    this.todos.push(todo);
  }

  // Method to remove a todo at a specific index from the list
  remove(indexOfTodo) {
    // Check if the provided index is valid
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      // Remove the todo at the specified index using splice
      this.todos.splice(indexOfTodo, 1);
    } 
    //else {
    //   // Throw an error for an invalid index
    //   throw new Error("Invalid index");
    // }
  }

  // Method to update a todo at a specific index in the list
  update(index, updatedTodo) {
    // Check if the provided index is valid
    if (index >= 0 && index < this.todos.length) {
      // Update the todo at the specified index with the provided value
      this.todos[index] = updatedTodo;
    } 
    // else {
    //   // Throw an error for an invalid index
    //   throw new Error("Invalid index");
    // }
  }

  // Method to get all todos in the list
  getAll() {
    // Return the entire list of todos
    return this.todos;
  }

  // Method to get a todo at a specific index from the list
  get(indexOfTodo) {
    // Check if the provided index is valid
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      // Return the todo at the specified index
      return this.todos[indexOfTodo];
    } 
    return null ; 
    // else {
    //   // Throw an error for an invalid index
    //   throw new Error("Invalid index");
    // }
  }

  // Method to clear all todos from the list
  clear() {
    // Set the todos array to an empty array
    this.todos = [];
  }
}

// Export the Todo class to make it available for external use
module.exports = Todo;


module.exports = Todo;
