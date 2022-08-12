import Link from 'next/link'
import BackgroundThumbnail from '../components/atoms/container-background-thumbnail'
import GridIcon from '../components/atoms/grid-icon'
import HamburgerIcon from '../components/atoms/hamburger-icon'
import HeaderContainer from '../components/atoms/header-container'
import HeaderIconContainer from '../components/atoms/header-icon-container'
import InitPlusArrow from '../components/atoms/init-plus-arrow'
import Logo from '../components/atoms/logo'
import HeaderThumbnailContainer from '../components/atoms/header-thumbnail-container'
import ThumbnailContainer from '../components/atoms/header-thumbnail-container'
import ZoomIcon from '../components/atoms/zoom-icon'
import ContainerBackgroundThumbnail from '../components/atoms/container-background-thumbnail'
import { Fragment } from 'react'
import ImgThubnail from '../components/atoms/thumbnail'


export default function Home() {
	return (
		<div>
		
		<HeaderThumbnailContainer>
			<Link href="#" ><a className=' mx-4 hover: underline-offset-2 text-[#7d38db]'>Início</a></Link>
			<InitPlusArrow/>
			</HeaderThumbnailContainer>
		 <ContainerBackgroundThumbnail>
		 	<Link href="#"><a><ImgThubnail></ImgThubnail></a></Link>
			 </ContainerBackgroundThumbnail>
		</div>
	)
}
