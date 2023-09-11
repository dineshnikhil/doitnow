import DashBoard from '@/components/DashBoard';

export default function DashBoardOfUser({ todos }: { todos: [] }) {
	return <DashBoard todos={todos} />;
}

export async function getServerSideProps(context: any) {
	const response = await fetch('http://localhost:3000/api/todo');
	const data = await response.json();

	return {
		props: {
			todos: data.todos,
		},
	};
}
