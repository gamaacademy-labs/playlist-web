import React from 'react'
import Image from 'next/image'

function ImgThubnail() {
	return (
		<div className='bg-[#7D38DB] rounded-lg p-2 flex items-center justify-center relative max-w-md'>
			<Image
				src='https://cdn.discordapp.com/attachments/1006677588242088016/1007389202641588415/HA04_HTML.jpg'
				alt="Image thumbnail"
				className='rounded-md object-cover'
				height={200}
				width={435}
			/>
			<div className='absolute right-5 top-5'>
				<p className='bg-[#7D38DB] text-white px-1 rounded'>PLAYLIST</p>
			</div>
		</div>
	)
}

export default ImgThubnail
