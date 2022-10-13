import PropTypes from 'prop-types'

const OptionButton = ({ value, children, checked, onClick }) => {
	return (
		<div
			tabIndex='0'
			role='button'
			onClick={() => onClick(value)}
			onKeyDown={() => onClick(value)}
			className={`optionButton ${checked ? 'optionButton--checked' : ''}`}
		>
			<div className='optionButton__square'>{value}</div>
			<div className='optionButton__text'>{children}</div>
		</div>
	)
}

OptionButton.propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.string,
	checked: PropTypes.bool,
	onClick: PropTypes.func,
}

OptionButton.defaultProps = {
	children: 'Option',
	checked: false,
}

export default OptionButton
