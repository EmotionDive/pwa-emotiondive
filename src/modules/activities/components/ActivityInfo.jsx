import React, { useEffect, useState } from 'react'
import { useOutsideClick } from '../../../utils/hooks/useOutsideClick'
import ActivitiesTCC from '../../../assets/icons/ActivitiesTCC.svg?component'
import Offline from '../../../assets/icons/Offline.svg?component'
import Book from '../../../assets/icons/Activities.svg?component'
import Progress from '../../../assets/icons/Progress.svg?component'
import Time from '../../../assets/icons/Time.svg?component'
import Benefits from '../../../assets/icons/Benefits.svg?component'
import PropTypes from 'prop-types'

const ActivityInfo = ({
	open,
	onClickButton,
	onClickOutside,
	data,
	variant,
	addToWeekPlanButton,
	onClickAddToWeekPlanButton,
}) => {
	const [openInfo, setOpenInfo] = useState(false)
	const [exit, onExit] = useState(false)

	useEffect(() => {
		if (!openInfo && open) {
			setOpenInfo(true)
		} else {
			close()
		}
	}, [open])

	const close = () => {
		onExit(true)
		setTimeout(() => {
			onExit(false)
			setOpenInfo(false)
		}, 400)
	}

	const ref = useOutsideClick(() => {
		onClickOutside()
	})

	if (openInfo)
		return (
			<div
				className={`modal__background ${exit ? 'modal--exit' : ''} ${
					open ? 'open' : ''
				} `}
			>
				<div className={`activityInfo ${variant}`} ref={ref}>
					<div className='activityInfo__title'>
						<span>{data.id_actividad}</span>
						{data.nombre}
					</div>
					<div className='activityInfo__content'>
						<div className='activityInfo__chips'>
							<span className='activityInfo__chips__chipActivity'>
								<ActivitiesTCC />
								Act. Anterior: 1
							</span>
							{data.offline_bandera ? (
								<span className='activityInfo__chips__chipOffline'>
									<Offline />
									Offline
								</span>
							) : null}
						</div>
						<div className='activityInfo__data book'>
							<div>
								<Book />
							</div>
							<div>
								{data.descripcion.split('\n').map((p, key) => (
									<p key={key}>{p}</p>
								))}
							</div>
						</div>
						<div className='activityInfo__data progress'>
							<div>
								<Progress />
							</div>
							<div>
								{data.instrucciones.split('\n').map((p, key) => (
									<p key={key}>{p}</p>
								))}
							</div>
						</div>
						<div className='activityInfo__data time'>
							<div>
								<Time />
							</div>
							<div>
								<p>
									Esta actividad te tomará alrededor de{' '}
									{parseInt(data.tiempo_estimado.split(':')[1])} minutos
									completarla.
								</p>
							</div>
						</div>
						<div className='activityInfo__data benefits'>
							<div>
								<Benefits />
							</div>
							<div>
								{data.beneficios.split('\n').map((p, key) => (
									<p key={key}>{p}</p>
								))}
							</div>
						</div>
						<div
							className={`button__container ${
								addToWeekPlanButton !== null ? 'weekPlan' : ''
							}`}
						>
							<button className='button' onClick={onClickButton}>
								{addToWeekPlanButton !== null ? 'Ver otra' : 'Okey'}
							</button>
							{addToWeekPlanButton === null ? null : (
								<button
									className='button'
									onClick={() => onClickAddToWeekPlanButton(data.id_actividad)}
								>
									{addToWeekPlanButton === 'true'
										? 'Agregar a Plan Semanal'
										: 'Quitar de Plan Semanal'}
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	else return null
}

ActivityInfo.propTypes = {
	open: PropTypes.bool,
	onClickButton: PropTypes.func,
	onClickOutside: PropTypes.func,
	exitOnClickButton: PropTypes.bool,
	exitOnClickOutside: PropTypes.bool,
	data: PropTypes.object,
	variant: PropTypes.oneOf([
		'SelfKnowledge',
		'SelfRegulation',
		'SelfEfficacy',
		'Empathy',
		'',
	]),
	addToWeekPlanButton: PropTypes.oneOf(['true', 'false']),
	onClickAddToWeekPlanButton: PropTypes.func,
}

ActivityInfo.defaultProps = {
	open: false,
	onClickButton: () => {},
	onClickOutside: () => {},
	data: {},
	addToWeekPlanButton: null,
	onClickAddToWeekPlanButton: () => {},
}

export default ActivityInfo
