import Head from 'next/head'
import React from 'react'
import Navbar from '../molecules/navbar'

interface Props {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gama Academy - Playlists</title>
      </Head>
      <Navbar />
      {children}
    </>
  )
}

export default Main
