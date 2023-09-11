import { Paper, Typography } from '@mui/material';
import FormInput from './ui/inputfeilds/FormInput';
import FormButton from './ui/buttons/FormButton';

import React from 'react';
import { useRef } from 'react';

export default function AddTaskForm() {
	const title = useRef<HTMLInputElement>(null);
	const description = useRef<HTMLInputElement>(null);

	async function onAddTaskHandler(event: React.FormEvent) {
		event.preventDefault();
		// const session = await getSession({ req });
		// console.log(session);

		const response = await fetch('http://localhost:3000/api/todo', {
			method: 'POST',
			body: JSON.stringify({
				title: title.current?.value,
				description: description.current?.value,
			}),
			headers: {
				'Content-Type': 'application/json',
				// 'Authorization': `Bearer ${session?.accessToken || ''}`,
			},
		});

		const data = await response.json();
		console.log(data);
	}

	return (
		<Paper
			elevation={3}
			style={{
				margin: '9% auto 2% auto',
				width: '30%',
				padding: '5%',
			}}
		>
			<h2
				style={{
					textAlign: 'center',
				}}
			>
				Add your task
			</h2>
			<form>
				<FormInput label="title" type="text" inputRef={title} />
				<FormInput label="description" type="text" inputRef={description} />
				<FormButton msg="Add Task" onSigninHandler={onAddTaskHandler} />
			</form>
		</Paper>
	);
}
