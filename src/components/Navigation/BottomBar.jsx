import StatisticsIcon from '../../assets/icons/Statistics.svg?component'
import ActivitiesIcon from '../../assets/icons/Activities.svg?component'
import HamburguerIcon from '../../assets/icons/Hamburguer.svg?component'
import { BottomBarBotton, NavBarDropdown } from './components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const BottomBar = () => {
	const selectedButton = useLocation().pathname
	const navigate = useNavigate()
	const [openDropdown, setOpenDropdown] = useState(true)

	const toggleDropdown = (e) => {
		if (e) e.stopPropagation()
		setOpenDropdown(!openDropdown)
	}

	return (
		<>
			{openDropdown ? (
				<NavBarDropdown
					onClickOutside={toggleDropdown}
					selectedButton={selectedButton}
				/>
			) : null}
			<footer className='bottomBar'>
				<BottomBarBotton
					label='Estadísticas'
					iconSVG={<StatisticsIcon />}
					selected={selectedButton.includes('estadisticas')}
					onClick={() => {
						navigate('/estadisticas')
					}}
				/>
				<BottomBarBotton
					label='Actividades'
					iconSVG={<ActivitiesIcon />}
					selected={selectedButton.includes('actividades')}
					onClick={() => {
						navigate('/actividades')
					}}
				/>
				<BottomBarBotton
					label='Ver Más'
					iconSVG={<HamburguerIcon />}
					onClick={toggleDropdown}
				/>
			</footer>
		</>
	)
}

export default BottomBar
