import React, { useEffect, useState } from 'react'
import { useOutsideClick } from '../../../utils/hooks/useOutsideClick'
import ActivitiesTCC from '../../../assets/icons/ActivitiesTCC.svg?component'
import Offline from '../../../assets/icons/Offline.svg?component'
import Book from '../../../assets/icons/Activities.svg?component'
import Progress from '../../../assets/icons/Progress.svg?component'
import Time from '../../../assets/icons/Time.svg?component'
import Benefits from '../../../assets/icons/Benefits.svg?component'
import PropTypes from 'prop-types'
import { TextButton } from '../../../components/Buttons'

const ActivityInfo = ({
	open,
	onClickButton,
	onClickOutside,
	data,
	variant,
	addToWeekPlanButton,
	onClickAddToWeekPlanButton,
	addDoActivityButton,
	onClickDoActivityButton,
	showRealizations,
}) => {
	const [openInfo, setOpenInfo] = useState(false)
	const [notTimeToDo, setNotTimeToDo] = useState(false)
	const [exit, onExit] = useState(false)

	useEffect(() => {
		if (!openInfo && open) {
			setOpenInfo(true)
		} else {
			close()
		}
	}, [open])

	useEffect(() => {
		let bool = false
		if (data.last_realization) {
			const currentTime = new Date()
			const lastTime = new Date(data.last_realization)
			lastTime.setDate(lastTime.getDate() + 1)
			bool = currentTime.getTime() < lastTime.getTime()
		}

		setNotTimeToDo(bool)
	}, [data])

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
						<span>{data.activity.id_actividad}</span>
						{data.activity.nombre}
					</div>
					<div className='activityInfo__content'>
						<div className='activityInfo__chips'>
							{showRealizations ? (
								<span className='activityInfo__chips__chipActivity'>
									<ActivitiesTCC />
									Realizada {data.progreso} veces
								</span>
							) : data.next_activity === null ? null : (
								<span className='activityInfo__chips__chipActivity'>
									<ActivitiesTCC />
									Act. Siguiente: {data.next_activity}
								</span>
							)}
							{data.activity.offline_bandera ? (
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
								{data.activity.descripcion.split('\n').map((p, key) => (
									<p key={key}>{p}</p>
								))}
							</div>
						</div>
						<div className='activityInfo__data progress'>
							<div>
								<Progress />
							</div>
							<div>
								{data.activity.instrucciones.split('\n').map((p, key) => (
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
									{parseInt(data.activity.tiempo_estimado.split(':')[1])}{' '}
									minutos completarla.
								</p>
							</div>
						</div>
						<div className='activityInfo__data benefits'>
							<div>
								<Benefits />
							</div>
							<div>
								{data.activity.beneficios.split('\n').map((p, key) => (
									<p key={key}>{p}</p>
								))}
							</div>
						</div>
						{notTimeToDo && addDoActivityButton === true && !data.done_flag ? (
							<span className='systemText__paragraph'>
								Ya realizaste la iteración de hoy, vuelve mañana para realizar
								la siguiente.
							</span>
						) : null}
						<div
							className={`button__container ${
								addToWeekPlanButton === null && addDoActivityButton === false
									? ''
									: 'weekPlan'
							}`}
						>
							<button className='button' onClick={onClickButton}>
								{addToWeekPlanButton === null && addDoActivityButton === false
									? 'Okey'
									: 'Ver otra'}
							</button>
							{addToWeekPlanButton === null ? null : (
								<button
									className='button'
									onClick={() =>
										onClickAddToWeekPlanButton(data.activity.id_actividad)
									}
								>
									{addToWeekPlanButton === 'true'
										? 'Agregar a Plan Semanal'
										: 'Quitar de Plan Semanal'}
								</button>
							)}
							{addDoActivityButton === false ? null : data.done_flag ? (
								<TextButton className='disabled'>
									¡Actividad Completada!
								</TextButton>
							) : (
								<button
									className='button'
									onClick={() =>
										onClickDoActivityButton(data.activity.id_actividad)
									}
									disabled={notTimeToDo}
								>
									Realizar actividad
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
	addDoActivityButton: PropTypes.bool,
	onClickDoActivityButton: PropTypes.func,
	showRealizations: PropTypes.bool,
}

ActivityInfo.defaultProps = {
	open: false,
	onClickButton: () => {},
	onClickOutside: () => {},
	data: {},
	addToWeekPlanButton: null,
	onClickAddToWeekPlanButton: () => {},
	addDoActivityButton: false,
	onClickDoActivityButton: () => {},
	showRealizations: false,
}

export default ActivityInfo
