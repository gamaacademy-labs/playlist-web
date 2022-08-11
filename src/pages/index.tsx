import GridIcon from '../components/atoms/grid-icon'
import HamburgerIcon from '../components/atoms/hamburger-icon'
import HeaderContainer from '../components/atoms/header-container'
import HeaderIconContainer from '../components/atoms/header-icon-container'
import Logo from '../components/atoms/logo'
import ZoomIcon from '../components/atoms/zoom-icon'

export default function Home() {
	return (
		<HeaderContainer>
			<Logo />
			<HeaderIconContainer>
				<ZoomIcon/>
				<GridIcon/>
				<HamburgerIcon />
			</HeaderIconContainer>
		</HeaderContainer>
	)
}
