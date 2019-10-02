import React from 'react';
import Todo from './Todo.js';
import style from './TodoList.css';

const TodoList = props => <div className={style.TodoList}>{props.data.map(todo => <Todo key ={todo.id} count={todo.count} text={todo.text} id={todo.id} removeTodo={props.removeTodo}/>)}</div>

export default TodoList;
