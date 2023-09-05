import AddTaskForm from './AddTaskForm';
import TaskTable from './ui/table/TaskTable';

type todoType = {
	title: String;
	description: String;
};

export default function DashBoard({ todos }: { todos: [] }) {
	return (
		<>
			<AddTaskForm />
			<TaskTable />
			<div
				style={{
					padding: '7% 15%',
				}}
			>
				{todos.map((todo: any) => {
					return <h1 key={todo._id}>{todo.title}</h1>;
				})}
			</div>
		</>
	);
}
