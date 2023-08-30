import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

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
	const session = useSession();

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
					{session.data ? (
						<Link
							href="/api/auth/signout"
							style={{
								margin: '0 5%',
							}}
							onClick={(e) => {
								e.preventDefault();
								signOut();
							}}
						>
							<NavLink linkName="sign out" />
						</Link>
					) : (
						<>
							<Link
								href="/signin"
								style={{
									margin: '0 5%',
								}}
								onClick={(e) => {
									e.preventDefault();
									signIn();
								}}
							>
								<NavLink linkName="sign in" />
							</Link>
							<Link href="/signup">
								<NavLink linkName="sign up" />
							</Link>
						</>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
}
