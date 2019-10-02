import React from 'react';
import style from './Todo.css';

const Todo = props => props.data.map(task => (
  <li className={style.task} key={task.id}>{task.text}
    <button key={task.id} onClick={() => props.remove(task.id)}>X</button>
  </li>
));

export default Todo;
