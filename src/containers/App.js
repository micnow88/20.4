import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import Todo from '../components/Todo.js';
import TodoForm from '../components/TodoForm.js';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          text: "clean room",
          id: uuid.v4(),
        },
        {
          text: " wach the dishes",
          id: uuid.v4(),
        },
        {
          text: "feed the cat",
          id: uuid.v4(),
        }
      ]
    };
  }

  addTodo(val){
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title title="My List" listCount={this.state.data.length}/>
        <Todo data={this.state.data} remove={this.removeTodo.bind(this)}/>
        <TodoForm add={this.addTodo.bind(this)}/>
      </div>
    );
  }
}

export default hot(module)(App);
