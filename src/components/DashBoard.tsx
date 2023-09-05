import AddTaskForm from './AddTaskForm';
import TaskTable from './ui/table/TaskTable';

export default function DashBoard({ todos }: { todos: [] }) {
	return (
		<>
			<AddTaskForm />
			<TaskTable todos={todos} />
		</>
	);
}
