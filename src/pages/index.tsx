import Link from 'next/link'
import InitPlusArrow from '../components/atoms/init-plus-arrow'
import HeaderThumbnailContainer from '../components/atoms/header-thumbnail-container'
import ContainerBackgroundThumbnail from '../components/atoms/container-background-thumbnail'
import ImgThubnail from '../components/atoms/thumbnail'


export default function Home() {
	return (
		<div>
			<HeaderThumbnailContainer>
				<Link href="#" ><a className='text-[#7d38db]'>Início{' '}</a></Link>
				<InitPlusArrow/>
			</HeaderThumbnailContainer>
			<ContainerBackgroundThumbnail>
				<ImgThubnail />
			</ContainerBackgroundThumbnail>
		</div>
	)
}
