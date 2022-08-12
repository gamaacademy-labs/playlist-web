import React from 'react'
import ContainerBackgroundThumbnail from '../../atoms/container-background-thumbnail'
import ImgThubnail from '../../atoms/thumbnail'

const Thumbnail: React.FC = () => {
	return (
		<ContainerBackgroundThumbnail>
			<ImgThubnail />
		</ContainerBackgroundThumbnail>
	)
}

export default Thumbnail