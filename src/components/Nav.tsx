import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export default function Nav() {
	return (
		<AppBar>
			<Toolbar
				style={{
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				<div>
					<Link
						href="/"
						style={{
							textDecoration: 'none',
							color: '#ffffff',
						}}
					>
						<Typography variant="h4">🎯 DoItNow</Typography>
					</Link>
				</div>
				<div>
					<Link href="/signin">
						<Button variant="contained">sign in</Button>
					</Link>
					<Button variant="contained">sign up</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}
