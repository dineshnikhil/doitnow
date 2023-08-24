import Nav from '@/components/Nav';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#EB5E28',
		},
		secondary: {
			main: '#FF6969',
		},
		background: {
			default: '#252422',
			paper: '#32312E',
		},
		text: {
			primary: '#ffffff',
		},
		action: {
			active: '#EB5E28',
			hover: '#EB5E28',
			disabled: '#EB5E28',
			focus: '#EB5E28',
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Nav />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
