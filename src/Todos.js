import React from 'react';

const Todos = ({ todos, deleteTodo, markComplete }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      const completed = todo.completed;

      return (
        <div className="collection-item" key={todo.id}>
          <p>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
            >
              {todo.content}
            </span>

            <span
              className="right"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              X
            </span>

            <span style={completedBtn}>
              <button
                className="waves-effect waves-light btn-small"
                onClick={() => {
                  markComplete(todo.id);
                }}
              >
                {completed ? 'Completed' : 'Incomplete'}
              </button>
            </span>
          </p>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no todo's left </p>
  );

  return <div className="todos collection">{todoList}</div>;
};

const completedBtn = {
  display: 'flex',
  justifyContent: 'flex-start'
};

export default Todos;
