import PropTypes from 'prop-types'

const OptionButton = ({
	value,
	children,
	checked,
	onClick,
	variant,
	fontWeight,
	errorSucces,
}) => {
	return (
		<div
			tabIndex='0'
			role='button'
			onClick={() => onClick(value)}
			onKeyDown={(e) => {
				if (e.key === 'Enter') onClick(value)
			}}
			className={`optionButton ${
				checked ? 'optionButton--checked' : ''
			} ${variant} ${fontWeight} ${errorSucces}`}
		>
			<div className='optionButton__square'>{value}</div>
			<div className='optionButton__text'>{children}</div>
		</div>
	)
}

OptionButton.propTypes = {
	value: PropTypes.any.isRequired,
	children: PropTypes.string,
	checked: PropTypes.bool,
	onClick: PropTypes.func,
	variant: PropTypes.oneOf([
		'normal',
		'black',
		'SelfKnowledge',
		'SelfRegulation',
		'SelfEfficacy',
		'Empathy',
	]),
	fontWeight: PropTypes.oneOf(['semibold', 'medium']),
	errorSucces: PropTypes.oneOf(['error', 'success', 'none']),
}

OptionButton.defaultProps = {
	children: 'Option',
	checked: false,
	variant: 'normal',
	fontWeight: 'semibold',
	errorSucces: 'none',
}

export default OptionButton
