import React from 'react'
import PropTypes from 'prop-types'

const CardActivitie = ({
	number,
	title,
	description,
	variant = 'SelfKnowledge',
	optional = false,
	onClick,
	choosed,
	disabled,
}) => {
	return (
		<div
			className={`activitieCard ${variant} ${choosed ? 'choosed' : ''} ${
				disabled ? 'disabled' : ''
			}`}
			tabIndex='0'
			role='button'
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === 'Enter') onClick()
			}}
		>
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
	onClick: PropTypes.func,
	choosed: PropTypes.bool,
	disabled: PropTypes.bool,
}

CardActivitie.defaultProps = {
	onClick: () => {},
	choosed: false,
	disabled: false,
}

export default CardActivitie
