import AddTaskForm from './AddTaskForm';

type todoType = {
	title: String;
	description: String;
};

export default function DashBoard({ todos }: { todos: [] }) {
	return (
		<>
			<AddTaskForm />
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
