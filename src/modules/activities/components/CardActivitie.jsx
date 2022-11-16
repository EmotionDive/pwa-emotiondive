import React from 'react'
import PropTypes from 'prop-types'

const CardActivitie = ({
	number,
	title,
	description,
	variant = 'SelfKnowledge',
	optional = false,
}) => {
	return (
		<div className={`activitieCard ${variant}`}>
			<div className='activitieCard__title'>
				<span>{number}</span>
				{title}
			</div>
			<div className='justifyText'>
				{optional ? <b>Opcional:</b> : null}
				{description}
			</div>
		</div>
	)
}

CardActivitie.propTypes = {
	number: PropTypes.any,
	title: PropTypes.string,
	description: PropTypes.string,
	optional: PropTypes.bool,
	variant: PropTypes.oneOf([
		'SelfKnowledge',
		'SelfRegulation',
		'SelfEfficacy',
		'Empathy',
	]),
}

export default CardActivitie
