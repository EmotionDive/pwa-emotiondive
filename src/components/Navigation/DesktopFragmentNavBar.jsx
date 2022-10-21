import StatisticsIcon from '../../assets/icons/Statistics.svg?component'
import ActivitiesIcon from '../../assets/icons/Activities.svg?component'
import HamburguerIcon from '../../assets/icons/Hamburguer.svg?component'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavBarButton, NavBarDropdown } from './components'
import { useState } from 'react'

const DesktopFragmentNavBar = () => {
	const selectedButton = useLocation().pathname
	const navigate = useNavigate()
	const [openDropdown, setOpenDropdown] = useState(false)

	const toggleDropdown = (e) => {
		if (e) e.stopPropagation()
		setOpenDropdown(!openDropdown)
	}

	return (
		<div className='desktopFragmentNavBar'>
			<NavBarButton
				label='Actividades'
				iconSVG={<ActivitiesIcon />}
				selected={selectedButton.includes('actividades')}
				onClick={() => {
					navigate('/actividades')
				}}
			/>
			<NavBarButton
				label='Estadísticas'
				iconSVG={<StatisticsIcon />}
				selected={selectedButton.includes('estadisticas')}
				onClick={() => {
					navigate('/estadisticas')
				}}
			/>
			<NavBarButton
				className='desktopFragmentNavBar__option--hamburguer'
				iconSVG={<HamburguerIcon />}
				onClick={toggleDropdown}
			/>
			{openDropdown ? (
				<NavBarDropdown
					onClickOutside={toggleDropdown}
					selectedButton={selectedButton}
				/>
			) : null}
		</div>
	)
}

export default DesktopFragmentNavBar
