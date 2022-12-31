import selfKnowledge from '../../../assets/images/pictures/Self-knowledge.png'
import selfEfficacy from '../../../assets/images/pictures/Self-efficacy.png'
import selfRegulation from '../../../assets/images/pictures/Self-regulation.png'
import empathy from '../../../assets/images/pictures/Empathy.png'
import PropTypes from 'prop-types'

const images = {
	SelfKnowledge: selfKnowledge,
	SelfRegulation: selfRegulation,
	SelfEfficacy: selfEfficacy,
	Empathy: empathy,
}

const labels = {
	SelfKnowledge: 'Autoconocimiento',
	SelfRegulation: 'Autorregulación',
	SelfEfficacy: 'Autoeficacia',
	Empathy: 'Empatía',
}

const CognitiveButton = ({ variant, active, onClick }) => {
	return (
		<button
			className={`cognitiveCards__card ${variant} ${active ? 'active' : ''}`}
			onClick={onClick}
		>
			<div>
				<img src={images[variant]} alt={labels[variant]} />
			</div>
			<span>{labels[variant]}</span>
		</button>
	)
}

CognitiveButton.propTypes = {
	variant: PropTypes.oneOf([
		'SelfKnowledge',
		'SelfRegulation',
		'SelfEfficacy',
		'Empathy',
	]),
	active: PropTypes.bool,
	onClick: PropTypes.func,
}

CognitiveButton.defaultProps = {
	variant: 'SelfKnowledge',
	active: false,
	onClick: () => {},
}

export default CognitiveButton
