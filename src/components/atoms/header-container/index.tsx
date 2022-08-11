import React from 'react'

function HeaderContainer({children}) {
	return (
		<header className='flex justify-between p-5 border-b border-[#D7DBDA]'>
			{children}
		</header>
	)
}

export default HeaderContainer