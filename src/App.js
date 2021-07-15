import React, {Component} from 'react';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 'id-1', text: 'Вивчити основи Реакт', completed: true},
      {id: 'id-2', text: 'Розібратися з Реакт Роутер', completed: false},
      {id: 'id-3', text: 'Пережити Редакс', completed: false},
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !==todoId),
    }))
  }

  render() {
    const {todos} = this.state;
    const totalTodoCount = todos.length
    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc+1 : acc), 0);
    console.log(completedTodos);

  return (
    <>
    <h1>Состояние компонента</h1>
    <div>
      <p>Загальна кількість: {totalTodoCount}</p>
      <p>Кількість виконаних: {completedTodos}</p>
    </div>

    <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
    </>
  );
}
}

export default App;
