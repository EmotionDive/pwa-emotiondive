import SadIcon from '../../../../../assets/icons/SadIcon.svg?component'
import HappinessIcon from '../../../../../assets/icons/HappinessIcon.svg?component'
import LoveIcon from '../../../../../assets/icons/LoveIcon.svg?component'
import ScareIcon from '../../../../../assets/icons/ScareIcon.svg?component'
import AngryIcon from '../../../../../assets/icons/AngryIcon.svg?component'
import PropTypes from 'prop-types'

const emotions = {
	scare: {
		label: 'Miedo',
		svg: <ScareIcon />,
	},
	happiness: {
		label: 'Alegría',
		svg: <HappinessIcon />,
	},
	sad: {
		label: 'Tristeza',
		svg: <SadIcon />,
	},
	angry: {
		label: 'Enojo',
		svg: <AngryIcon />,
	},
	love: {
		label: 'Afecto',
		svg: <LoveIcon />,
	},
}

const EmotionButton = ({ emotion, active, onClick, mark }) => {
	return (
		<button
			className={`EmotionButton ${emotion} ${
				active || mark ? 'active' : ''
			} ${mark}`}
			onClick={onClick}
		>
			{emotions[emotion].svg}
			<div className={`${mark ? 'mark' : ''}`}>
				<span>{emotions[emotion].label}</span>
				{!mark || mark === 'opaque'
					? ''
					: mark === 'success'
					? '✔'
					: mark === 'error'
					? '✕'
					: '〇'}
			</div>
		</button>
	)
}

EmotionButton.propTypes = {
	emotion: PropTypes.oneOf(['scare', 'happiness', 'sad', 'angry', 'love']),
	active: PropTypes.bool,
	onClick: PropTypes.func,
	mark: PropTypes.oneOf(['', 'success', 'error', 'absence', 'opaque']),
}

EmotionButton.defaultProps = {
	emotion: 'scare',
	active: false,
	onClick: () => {},
	mark: '',
}

export default EmotionButton
