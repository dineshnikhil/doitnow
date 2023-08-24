import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const NavLink = ({ linkName }: { linkName: string }) => {
	return (
		<Button
			variant="contained"
			style={{
				backgroundColor: '#040d12',
			}}
		>
			{linkName}
		</Button>
	);
};

export default function Nav() {
	return (
		<AppBar
			style={{
				padding: '.5% 2%',
			}}
		>
			<Toolbar
				style={{
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				<div
					style={{
						width: '20%',
					}}
				>
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
				<div
					style={{
						width: '20%',
					}}
				>
					<Link
						href="/signin"
						style={{
							margin: '0 5%',
						}}
					>
						<NavLink linkName="sign in" />
					</Link>
					<Link href="/signup">
						<NavLink linkName="sign up" />
					</Link>
				</div>
			</Toolbar>
		</AppBar>
	);
}
