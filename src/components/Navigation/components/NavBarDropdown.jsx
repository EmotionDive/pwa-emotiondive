import TestIcon from '../../../assets/icons/Test.svg?component'
import ConfigurationIcon from '../../../assets/icons/Configuration.svg?component'
import HelpIcon from '../../../assets/icons/Help.svg?component'
import LogoutIcon from '../../../assets/icons/Logout.svg?component'
import { useOutsideClick } from '../../../utils/hooks/useOutsideClick'
import NavbarDropdownButton from './NavbarDropdownButton'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const NavBarDropdown = ({ onClickOutside, selectedButton }) => {
	const ref = useOutsideClick(onClickOutside)
	const navigate = useNavigate()

	return (
		<div ref={ref} className='desktopFragmentNavBar__dropdown'>
			<NavbarDropdownButton
				iconSVG={<TestIcon />}
				label={'Test IE'}
				selected={selectedButton.includes('testIE')}
				onClick={() => {
					navigate('/testIE')
				}}
			/>
			<NavbarDropdownButton
				iconSVG={<ConfigurationIcon />}
				label={'Configuración'}
				selected={selectedButton.includes('configuracion')}
				onClick={() => {
					navigate('/configuracion')
				}}
			/>
			<NavbarDropdownButton
				iconSVG={<HelpIcon />}
				label={'Ayuda'}
				selected={selectedButton.includes('ayuda')}
				onClick={() => {
					navigate('/ayuda')
				}}
			/>
			<NavbarDropdownButton
				className='desktopFragmentNavBar__dropdown__button--logout'
				iconSVG={<LogoutIcon />}
				label={'Cerrar Sesión'}
				onClick={() => {
					console.log('Cerrar Sesión')
				}}
			/>
		</div>
	)
}

NavBarDropdown.propTypes = {
	onClickOutside: PropTypes.func,
	selectedButton: PropTypes.string,
}

NavBarDropdown.defaultProps = {
	onClickOutside: () => {},
	selectedButton: '',
}

export default NavBarDropdown
