import SignInForm from '@/components/SignInForm';
import { useRef } from 'react';

export default function SignIn() {
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	function signinHandler(event: React.FormEvent) {
		event.preventDefault();
		console.log(username.current?.value);
	}

	return (
		<SignInForm
			username={username}
			password={password}
			onSigninHandler={signinHandler}
		/>
	);
}
