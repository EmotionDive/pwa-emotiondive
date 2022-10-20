import StatisticsIcon from '../../../assets/icons/Statistics.svg?component'
import { useOutsideClick } from '../../../utils/hooks/useOutsideClick'
import NavbarDropdownButton from './NavbarDropdownButton'
import PropTypes from 'prop-types'

const NavBarDropdown = ({ onClickOutside }) => {
	const ref = useOutsideClick(onClickOutside)

	return (
		<div ref={ref} className='desktopFragmentNavBar__dropdown'>
			<NavbarDropdownButton
				iconSVG={<StatisticsIcon />}
				label={'Estadísticas'}
			/>
			<NavbarDropdownButton
				iconSVG={<StatisticsIcon />}
				label={'Estadísticas'}
			/>
			<NavbarDropdownButton
				iconSVG={<StatisticsIcon />}
				label={'Estadísticas'}
			/>
		</div>
	)
}

NavBarDropdown.propTypes = {
	onClickOutside: PropTypes.func,
}

NavBarDropdown.defaultProps = {
	onClickOutside: () => {},
}

export default NavBarDropdown
