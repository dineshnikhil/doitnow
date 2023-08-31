import DashBoard from '@/components/DashBoard';
import Wellcome from '@/components/Wellcome';
import { useSession } from 'next-auth/react';
import { getSession } from 'next-auth/react';

export default function Home({ todos }: { todos: [] }) {
	const session = useSession();

	return <>{session.data ? <DashBoard todos={todos} /> : <Wellcome />}</>;
}

export async function getServerSideProps(context: any) {
	const session = await getSession(context);
	const response = await fetch('http://localhost:3000/api/todo');
	const data = await response.json();

	return {
		props: {
			session,
			todos: data,
		},
	};
}
