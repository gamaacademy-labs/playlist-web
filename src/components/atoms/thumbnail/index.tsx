import React from 'react'
import Image from 'next/image'
import Thumbnail from '../../../assets/images/imageThumb.png'



function ImgThubnail() {
	return (
		<div>
			<Image 
				src={Thumbnail}
				alt="Image thumbnail"
				className='object-cover'
				layout='responsive'
			/>
		</div>
	)
}

export default ImgThubnail
