import React from 'react'
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
	SelfRegulation: 'Autoregulación',
	SelfEfficacy: 'Autoeficacia',
	Empathy: 'Empatía',
}

const ListActivities = ({ variant, children }) => {
	return (
		<div className='listActivities'>
			<div className={`listActivities__title ${variant}`}>
				<span>
					<img src={images[variant]} alt={labels[variant]} />
				</span>
				{labels[variant]}
			</div>
			<div className='listActivities__containerCards'>{children}</div>
		</div>
	)
}

ListActivities.propTypes = {
	children: (props, propName) => {
		let error
		const prop = props[propName]
		React.Children.forEach(prop, (child) => {
			if (child.type.name !== 'CardActivitie')
				error = new Error(
					`<ListActivities> only accepts children of type <CardActivitie>".`
				)
		})
		return error
	},
	variant: PropTypes.oneOf([
		'SelfKnowledge',
		'SelfRegulation',
		'SelfEfficacy',
		'Empathy',
	]),
}

ListActivities.defaultProps = {
	variant: 'SelfKnowledge',
}

export default ListActivities
