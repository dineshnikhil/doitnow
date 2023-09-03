import SignUpForm from '@/components/SignUpForm';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export default function SignIn() {
	const router = useRouter();
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const email = useRef<HTMLInputElement>(null);

	async function signupHandler(event: React.FormEvent) {
		event.preventDefault();

		signIn('credentials', {
			email: email.current?.value,
			username: username.current?.value,
			password: password.current?.value,
			callbackUrl: '/',
		});
	}

	async function signupWithGithubHandler() {
		signIn('github', { callbackUrl: '/' });
	}

	return (
		<SignUpForm
			email={email}
			username={username}
			password={password}
			onSignupHandler={signupHandler}
			onSignupWithGithubHandler={signupWithGithubHandler}
		/>
	);
}
