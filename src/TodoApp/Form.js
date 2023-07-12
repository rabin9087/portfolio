import React, { useState } from 'react';
import styles from '../style.module.css';
import shortid from 'shortid';
import TodoList from './TodoList';

const Form = () => {
	const [ todo, setTodo ] = useState('');
	const [ todoList, setTodoList ] = useState([]);

	const handleChange = (e) => {
		if (e.target.value !== '') {
			setTodo(e.target.value);
			console.log(todo);
		} else {
			alert('Please enter Todo list');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodoList([ ...todoList, { name: todo, id: shortid.generate() } ]);
		setTodo('');
		console.log(todoList);
	};

	return (
		<div className={styles.todoForm}>
			<form onSubmit={handleSubmit}>
				<input value={todo} onChange={handleChange} className={styles.todoInput} placeholder="Add Todo Item" />
				<button type="submit" className={styles.todoButton}>
					Add
				</button>
			</form>
			<TodoList todoList={todoList} setTodoList={setTodoList} />
		</div>
	);
};

export default Form;
