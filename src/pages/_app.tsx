import { ThemeProvider } from 'styled-components';
import { createTheme } from '@gama-academy/smash-web';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={createTheme()}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp
