import SignInForm from '@/components/SignInForm';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
	const email = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const router = useRouter();

	async function signinHandler(event: React.FormEvent) {
		event.preventDefault();

		// signIn('credentials', {
		// 	email: email.current?.value,
		// 	password: password.current?.value,
		// 	callbackUrl: '/',
		// });

		const response = await fetch('http://localhost:3000/api/user/signin', {
			method: 'POST',
			body: JSON.stringify({
				email: email.current?.value,
				password: password.current?.value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		console.log(data);
		router.push('/dashboard');
	}

	return (
		<SignInForm
			email={email}
			password={password}
			onSigninHandler={signinHandler}
		/>
	);
}
