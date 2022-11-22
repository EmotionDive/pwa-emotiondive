import PropTypes from 'prop-types'
import selfKnowledge from '@assets/images/pictures/Self-knowledge.png'
import selfEfficacy from '@assets/images/pictures/Self-efficacy.png'
import selfRegulation from '@assets/images/pictures/Self-regulation.png'
import empathy from '@assets/images/pictures/Empathy.png'

const images = {
	SelfKnowledge: selfKnowledge,
	SelfRegulation: selfRegulation,
	SelfEfficacy: selfEfficacy,
	Empathy: empathy,
}

const labels = {
	SelfKnowledge: 'Autoconocimiento',
	SelfRegulation: 'Autoregulación',
	SelfEfficacy: 'Autoeficacia',
	Empathy: 'Empatía',
}

const ActivitiesLocalizationBar = ({ variant, title }) => {
	return (
		<header className='localizationBar localizationBar--background activities'>
			<div
				className={`localizationBar--background__info activities ${variant}`}
			>
				<img src={images[variant]} alt='EmotionDive Logo' />
				{title}
			</div>
		</header>
	)
}

ActivitiesLocalizationBar.propTypes = {
	title: PropTypes.string,
	variant: PropTypes.oneOf([
		'SelfKnowledge',
		'SelfRegulation',
		'SelfEfficacy',
		'Empathy',
	]),
}

ActivitiesLocalizationBar.defaultProps = {
	title: 'Activity Title',
	variant: 'SelfKnowledge',
}

export default ActivitiesLocalizationBar
