import { TextField } from '@mui/material';
import { type } from 'os';

type formInputParams = {
	label: string;
	type: string;
};

export default function FormInput({ label, type }: formInputParams) {
	return (
		<TextField
			style={{
				margin: '2% 0',
			}}
			variant="outlined"
			label={label}
			type={type}
			fullWidth
		/>
	);
}
