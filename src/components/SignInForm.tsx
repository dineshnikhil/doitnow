import { Paper, Typography } from '@mui/material';
import FormInput from './ui/inputfeilds/FormInput';
import FormButton from './ui/buttons/FormButton';

export default function SignInForm() {
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
				<Typography
					variant="h3"
					style={{
						marginBottom: '2%',
					}}
				>
					Welcome Back!
				</Typography>
				<Typography variant="h4">Sign In to Your 🎯DoItNow Account</Typography>
				<Typography
					variant="body1"
					style={{
						marginBottom: '5%',
					}}
				>
					Sign in and pick up where you left off, your tasks are waiting for
					you!
				</Typography>
			</div>
			<form>
				<FormInput label="username" type="text" />
				<FormInput label="password" type="password" />
				<FormButton msg="Sign In 🚀" />
			</form>
		</Paper>
	);
}
