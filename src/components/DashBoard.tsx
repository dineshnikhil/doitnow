import AddTaskForm from './AddTaskForm';
import TaskTable from './ui/table/TaskTable';
import React from 'react';

import CustomeModal from './ui/modal/CustomeModal';
import Button from '@mui/material/Button';

export default function DashBoard({ todos }: { todos: [] }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div
			style={{
				padding: '7% 15%',
			}}
		>
			<Button onClick={handleOpen}>Open modal</Button>
			<CustomeModal onHandleClose={handleClose} open={open} />

			<TaskTable todos={todos} />
		</div>
	);
}
