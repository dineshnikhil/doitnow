import SignUpForm from '@/components/SignUpForm';
import { useRef } from 'react';

export default function SignIn() {
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const email = useRef<HTMLInputElement>(null);

	function signupHandler(event: React.FormEvent) {
		event.preventDefault();
		console.log(username.current?.value);
	}

	return (
		<SignUpForm
			email={email}
			username={username}
			password={password}
			onSignupHandler={signupHandler}
		/>
	);
}
