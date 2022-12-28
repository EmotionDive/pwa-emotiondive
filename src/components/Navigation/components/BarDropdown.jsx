import TestIcon from '../../../assets/icons/Test.svg?component'
import ConfigurationIcon from '../../../assets/icons/Configuration.svg?component'
import HelpIcon from '../../../assets/icons/Help.svg?component'
import LogoutIcon from '../../../assets/icons/Logout.svg?component'
import { useOutsideClick } from '../../../utils/hooks/useOutsideClick'
import NavbarDropdownButton from './BarDropdownButton'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import useUser from '../../../data/hooks/useUser'
import { useModalAction } from '../../Modal'
import useActivities from '../../../data/hooks/useActivities'
import ActivitiesService from '../../../fetchers/ActivitiesService'

const NavBarDropdown = ({ onClickOutside, selectedButton }) => {
	const ref = useOutsideClick(onClickOutside)
	const navigate = useNavigate()
	const { logout, userData } = useUser()
	const { competences } = useActivities()
	const { operateModal } = useModalAction()

	const handleNavigate = (path) => {
		navigate(path)
		setTimeout(onClickOutside, 300)
	}

	const handleTestIE = async () => {
		let isTime = false
		if (competences.length !== 0) {
			await ActivitiesService.areCompletedAndTimeForTest(
				userData.username,
				competences
			)
				.then((res) => {
					if (res.status == 'success') {
						isTime = res.test_ready_flag
					}
				})
				.catch(() => console.error('Error on Server'))
		}

		if (!isTime)
			operateModal(
				'¡No tan rápido!',
				'Aún no es tiempo de volver a realizar el Test de Inteligencia Emocional. ¡Vuelve cuando hayas terminado todas las actividades de tus competencias seleccionadas!',
				'confirm',
				['De acuerdo'],
				() => {},
				true
			)
		else navigate('/testIE', { state: { fromTestIE: true } })
		setTimeout(onClickOutside, 300)
	}

	return (
		<div ref={ref} className='BarDropdown'>
			<NavbarDropdownButton
				iconSVG={<TestIcon />}
				label={'Test IE'}
				selected={selectedButton.includes('testIE')}
				onClick={() => handleTestIE()}
			/>
			<NavbarDropdownButton
				iconSVG={<ConfigurationIcon />}
				label={'Configuración'}
				selected={selectedButton.includes('configuracion')}
				onClick={() => {
					handleNavigate('/configuracion')
				}}
			/>
			<NavbarDropdownButton
				iconSVG={<HelpIcon />}
				label={'Ayuda'}
				selected={selectedButton.includes('ayuda')}
				onClick={() => {
					handleNavigate('/ayuda')
				}}
			/>
			<NavbarDropdownButton
				className='BarDropdown__button--logout'
				iconSVG={<LogoutIcon />}
				label={'Cerrar Sesión'}
				onClick={() => {
					logout({ returnTo: window.location.origin })
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
