import React from 'react';
import Todo from './Todo.js';
import style from './TodoList.css';

const TodoList = props => (<ul className={style.task}><Todo /></ul>);

export default TodoList;
