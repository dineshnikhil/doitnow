import { Paper, Typography } from '@mui/material';
import FormInput from './ui/inputfeilds/FormInput';
import FormButton from './ui/buttons/FormButton';

import React from 'react';

type signupFormProps = {
	email: React.RefObject<HTMLInputElement>;
	username: React.RefObject<HTMLInputElement>;
	password: React.RefObject<HTMLInputElement>;
	onSignupHandler: (event: React.FormEvent) => void;
	onSignupWithGithubHandler: (evernt: any) => void;
};

export default function SignUpForm({
	email,
	username,
	password,
	onSignupHandler,
	onSignupWithGithubHandler,
}: signupFormProps) {
	return (
		<Paper
			elevation={3}
			style={{
				margin: '9% auto',
				width: '30%',
				padding: '5%',
			}}
		>
			<div
				style={{
					textAlign: 'center',
				}}
			>
				<Typography variant="h4">Create Your 🎯DoItNow Account</Typography>
				<Typography
					variant="body1"
					style={{
						margin: '5%',
					}}
				>
					Join the productivity revolution and unlock the full potential of your
					tasks with a few simple steps.
				</Typography>
			</div>
			<form>
				<FormInput label="email" type="text" inputRef={email} />
				<FormInput label="username" type="text" inputRef={username} />
				<FormInput label="password" type="password" inputRef={password} />
				<FormButton
					msg="Sign Up for Free 🤝"
					onSigninHandler={onSignupHandler}
				/>
				<FormButton
					msg="sign up from github"
					onSigninHandler={onSignupWithGithubHandler}
				/>
			</form>
		</Paper>
	);
}
