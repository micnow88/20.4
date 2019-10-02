import React from 'react';
import style from './Todo.css';

const Todo = props => <div className={style.Todo}>{`${props.count} ${props.text}`}</div>

export default Todo;
