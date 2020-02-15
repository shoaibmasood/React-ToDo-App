import React, { Component } from 'react';

class AddTodos extends Component {
  state = {
    content: ''
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            {' '}
            <h6>Add New Task:</h6>{' '}
          </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
export default AddTodos;
