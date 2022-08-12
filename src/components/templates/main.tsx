import Head from 'next/head'
import Navbar from '../molecules/navbar'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({children}) => {
	return( 
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Gama Academy - Playlists</title>
			</Head>
			<Navbar/>
			{children}
		</>
	)
}

export default Main