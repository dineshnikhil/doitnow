import { TextField } from '@mui/material';
import React from 'react';

type formInputParams = {
	label: string;
	type: string;
	inputRef: React.RefObject<HTMLInputElement>;
};

export default function FormInput({ label, type, inputRef }: formInputParams) {
	return (
		<TextField
			style={{
				margin: '2% 0',
			}}
			variant="outlined"
			fullWidth
			label={label}
			type={type}
			inputRef={inputRef}
		/>
	);
}
