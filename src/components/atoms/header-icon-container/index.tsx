import React from 'react'

function HeaderIconContainer({children}) {
	return (
		<div className='flex flex-row items-center gap-4'>
			{children}
		</div>
	)
}

export default HeaderIconContainer