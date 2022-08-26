import React from 'react'
import GridIcon from '../../atoms/grid-icon'
import HamburgerIcon from '../../atoms/hamburger-icon'
import HeaderContainer from '../../atoms/header-container'
import HeaderIconContainer from '../../atoms/header-icon-container'
import Logo from '../../atoms/logo'
import ZoomIcon from '../../atoms/zoom-icon'

function Navbar() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderIconContainer>
        <ZoomIcon />
        <GridIcon />
        <HamburgerIcon />
      </HeaderIconContainer>
    </HeaderContainer>
  )
}

export default Navbar
