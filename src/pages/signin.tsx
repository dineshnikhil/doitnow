import SignInForm from '@/components/SignInForm';
import { useRef } from 'react';

export default function SignIn() {
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	async function signinHandler(event: React.FormEvent) {
		event.preventDefault();

		const response = await fetch('http://localhost:3000/api/user/signin', {
			method: 'POST',
			body: JSON.stringify({
				username: username.current?.value,
				password: password.current?.value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		console.log(data);
	}

	return (
		<SignInForm
			username={username}
			password={password}
			onSigninHandler={signinHandler}
		/>
	);
}
