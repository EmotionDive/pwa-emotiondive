import StatisticsIcon from '../../assets/icons/Statistics.svg?component'
import ActivitiesIcon from '../../assets/icons/Activities.svg?component'
import HamburguerIcon from '../../assets/icons/Hamburguer.svg?component'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBarButton from '../Buttons/NavBarButton'

const DesktopFragmentNavBar = () => {
	const selectedButton = useLocation().pathname
	const navigate = useNavigate()

	return (
		<div className='desktopFragmentNavBar'>
			<NavBarButton
				label='Estadísticas'
				iconSVG={<StatisticsIcon />}
				selected={selectedButton.includes('estadisticas')}
				onClick={() => {
					navigate('/estadisticas')
				}}
			/>
			<NavBarButton
				label='Actividades'
				iconSVG={<ActivitiesIcon />}
				selected={selectedButton.includes('actividades')}
				onClick={() => {
					navigate('/actividades')
				}}
			/>
			<NavBarButton
				className='desktopFragmentNavBar__option--hamburguer'
				iconSVG={<HamburguerIcon />}
				selected={selectedButton.includes('otros')}
			/>
		</div>
	)
}

export default DesktopFragmentNavBar
