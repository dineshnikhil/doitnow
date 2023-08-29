import DashBoard from '@/components/DashBoard';
import Wellcome from '@/components/Wellcome';

export default function Home({ todos }: { todos: [] }) {
	const isLoged = false;

	return <>{!isLoged ? <Wellcome /> : <DashBoard todos={todos} />}</>;
}

export async function getServerSideProps() {
	const response = await fetch('http://localhost:3000/api/todo');
	const data = await response.json();

	return {
		props: {
			todos: data,
		},
	};
}
