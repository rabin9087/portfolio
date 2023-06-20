import axios from 'axios';
import React, { useState, useEffect } from 'react'

const PostAPI = () => {

	const [data, setData] = useState({
		userId: '',
		title: '',
		body: '',
	});

	const handleInput = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		setData({...data, [name]: value})
	}

	const submitForm =(e) => {
		e.preventDefault();
		axios.post('https://jsonplaceholder.typicode.com/todos/1', data)
		.then(response => {
			console.log(response)
		}).catch(err => {
			console.log(err)
		})
	}

	return <>
		<div>
			<form onSubmit={submitForm}>
				<div>
					<input type='text' name ='userId' value={data.userId} onChange={handleInput}/>
				</div>
				<div>
					<input type='text' name ='title' value={data.title} onChange={handleInput}/>
				</div>
				<div>
					<input type='text' name ='body' value={data.body} onChange={handleInput}/>
				</div>
				<br />
				<button type='submit'>Submit</button>
			</form>
		</div>
	</>;
};
export default PostAPI;
