import React, { useEffect, useState } from 'react'
import { useOutsideClick } from '../../../utils/hooks/useOutsideClick'
import ActivitiesTCC from '../../../assets/icons/ActivitiesTCC.svg?component'
import Offline from '../../../assets/icons/Offline.svg?component'
import Book from '../../../assets/icons/Activities.svg?component'
import Progress from '../../../assets/icons/Progress.svg?component'
import Time from '../../../assets/icons/Time.svg?component'
import Benefits from '../../../assets/icons/Benefits.svg?component'
import PropTypes from 'prop-types'

const ActivityInfo = ({ open, onClickButton, onClickOutside }) => {
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
				<div className='activityInfo' ref={ref}>
					<div className='activityInfo__title'>
						<span>1</span>
						¡Identifica emociones faciales!
					</div>
					<div className='activityInfo__content'>
						<div className='activityInfo__chips'>
							<span className='activityInfo__chips__chipActivity'>
								<ActivitiesTCC />
								Act. Anterior: 1
							</span>
							<span className='activityInfo__chips__chipOffline'>
								<Offline />
								Offline
							</span>
						</div>
						<div className='activityInfo__data book'>
							<div>
								<Book />
							</div>
							<div>
								<p>Aprende a identificar las emociones de las personas.</p>
								<p>
									Se te plantearan una breve situación y un rostro de una
									persona, tu trabajo es identificar que emoción se percibe.
								</p>
							</div>
						</div>
						<div className='activityInfo__data progress'>
							<div>
								<Progress />
							</div>
							<div>
								<p>
									Debes de realizar 1 vez esta actividad y se te retroalimentará
									al finalizar.
								</p>
							</div>
						</div>
						<div className='activityInfo__data time'>
							<div>
								<Time />
							</div>
							<div>
								<p>
									Esta actividad te tomará alrededor de 15 minutos completarla.
								</p>
							</div>
						</div>
						<div className='activityInfo__data benefits'>
							<div>
								<Benefits />
							</div>
							<div>
								<p>
									Al completar esta actividad comprenderás como se expresan las
									emociones ante diversas situaciones.
								</p>
							</div>
						</div>
						<button className='button' onClick={onClickButton}>
							Okey
						</button>
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
}

ActivityInfo.defaultProps = {
	open: false,
	onClickButton: () => {},
	onClickOutside: () => {},
}

export default ActivityInfo
