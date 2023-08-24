import { Button } from '@mui/material';

type formButtonProps = {
	msg: string;
	onSigninHandler: (event: React.FormEvent) => void;
};

export default function FormButton({ msg, onSigninHandler }: formButtonProps) {
	return (
		<Button
			variant="contained"
			fullWidth
			style={{
				padding: '3%',
				fontWeight: 'bold',
				margin: '2% 0',
			}}
			onClick={onSigninHandler}
		>
			{msg}
		</Button>
	);
}
