import { Button } from '@mui/material';

export default function NavButton({ linkName }: { linkName: string }) {
	return (
		<Button variant="outlined" style={{ color: '#ffffff' }}>
			{linkName}
		</Button>
	);
}
