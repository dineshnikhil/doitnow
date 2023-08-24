import { Button } from '@mui/material';

type formButtonProps = {
	msg: string;
};

export default function FormButton({ msg }: formButtonProps) {
	return (
		<Button
			variant="contained"
			fullWidth
			style={{
				padding: '3%',
				fontWeight: 'bold',
				margin: '2% 0',
			}}
		>
			{msg}
		</Button>
	);
}
