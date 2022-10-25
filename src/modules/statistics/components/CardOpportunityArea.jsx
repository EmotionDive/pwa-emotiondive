import React from 'react'
import selfKnowledgemage from '../../../assets/images/pictures/Self-knowledge.png'
import selfRegulationImage from '../../../assets/images/pictures/Self-regulation.png'
import selfEfficacyImage from '../../../assets/images/pictures/Self-efficacy.png'
import empathyImage from '../../../assets/images/pictures/Empathy.png'
import PropTypes from 'prop-types'

const images = {
	SelfKnowledge: selfKnowledgemage,
	SelfRegulation: selfRegulationImage,
	SelfEfficacy: selfEfficacyImage,
	Empathy: empathyImage,
}

const CardOpportunityArea = ({ children, type }) => {
	return (
		<div className='cardOpportunityArea'>
			<div
				className={`cardOpportunityArea__area cardOpportunityArea__area--${type}`}
			>
				<div>
					<img src={images[type]} alt='SelfEfficacy' />
				</div>
			</div>
			<div className='cardOpportunityArea__text'>
				<p>{children}</p>
			</div>
		</div>
	)
}

CardOpportunityArea.propTypes = {
	children: PropTypes.any,
	type: PropTypes.oneOf([
		'SelfKnowledge',
		'SelfRegulation',
		'SelfEfficacy',
		'Empathy',
	]),
}

CardOpportunityArea.defaultProps = {
	type: 'SelfKnowledge',
}

export default CardOpportunityArea
