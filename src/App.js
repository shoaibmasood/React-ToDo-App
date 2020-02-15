import React, { Component } from 'react';
import Todos from './Todos';
import AddTods from './AddTodos';
// import CompleteBtn from './CompleteBtn';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'first task', completed: false },
      { id: 2, content: '2nd task', completed: false }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id; // returns false if id is equal to clicked id so its
    });
    this.setState({
      todos: todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's App</h1>
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          markComplete={this.markComplete}
        />
        {/* <CompleteBtn todos={this.state.todos} /> */}
        <AddTods addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
