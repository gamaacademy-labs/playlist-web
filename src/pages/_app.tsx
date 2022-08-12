import { ThemeProvider } from 'styled-components'
import { createTheme } from '@gama-academy/smash-web'
import '../styles/globals.css'
import Layout from '../components/templates/main'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider theme={createTheme()}>
			<Layout>
				<AnimatePresence
					exitBeforeEnter
					initial={true}
					onExitComplete={() => {
						if (typeof window !== 'undefined') {
							window.scrollTo({ top: 0 })
						}
					}}
				>
					<Component {...pageProps} key={router.route}/>
				</AnimatePresence>
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
