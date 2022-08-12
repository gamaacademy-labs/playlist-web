import Link from 'next/link'
import React from 'react'
import HeaderThumbnailContainer from '../../atoms/header-thumbnail-container'
import InitPlusArrow from '../../atoms/init-plus-arrow'

const PlaylistHeader: React.FC = () => {
	return (
		<HeaderThumbnailContainer>
			<Link href="#" ><a className='text-[#7d38db]'>Início{' '}</a></Link>
			<InitPlusArrow/>
		</HeaderThumbnailContainer>
	)
}

export default PlaylistHeader