import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          count: "1",
          text: "clean room",
          id: uuid.v4(),
        },
        {
          count: "2",
          text: " wach the dishes",
          id: uuid.v4(),
        },
        {
          count: "3",
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
      count: data.length
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
      <div>
        <Title title="My List" listCount={this.state.data.length}/>
        <div className={style.TodoApp}>
          <TodoList data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
