import StatisticsIcon from '../../assets/icons/Statistics.svg?component'
import ActivitiesIcon from '../../assets/icons/Activities.svg?component'
import HamburguerIcon from '../../assets/icons/Hamburguer.svg?component'
import { BottomBarBotton } from './components'
import { useLocation, useNavigate } from 'react-router-dom'

const BottomBar = () => {
	const selectedButton = useLocation().pathname
	const navigate = useNavigate()

	return (
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
				selected={selectedButton.includes('otros')}
			/>
		</footer>
	)
}

export default BottomBar
