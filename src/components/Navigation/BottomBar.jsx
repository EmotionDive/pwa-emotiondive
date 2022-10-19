import StatisticsIcon from '../../assets/icons/Statistics.svg?component'
import ActivitiesIcon from '../../assets/icons/Activities.svg?component'
import HamburguerIcon from '../../assets/icons/Hamburguer.svg?component'
import { ButtonBarBotton } from '../Buttons'

const BottomBar = () => {
	return (
		<footer className='bottomBar'>
			<ButtonBarBotton
				label='Estadísticas'
				iconSVG={<StatisticsIcon />}
				selected
			/>
			<ButtonBarBotton label='Actividades' iconSVG={<ActivitiesIcon />} />
			<ButtonBarBotton label='Ver Más' iconSVG={<HamburguerIcon />} />
		</footer>
	)
}

export default BottomBar
