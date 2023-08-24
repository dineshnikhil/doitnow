import Nav from '@/components/Nav';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#183D3D',
		},
		secondary: {
			main: '#5C8374',
		},
		background: {
			default: '#252422',
			paper: '#93B1A6',
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
