import PropTypes from 'prop-types'

const LargeButton = ({ children, onClick, disabled, type }) => {
	const handleOnClick = () => {
		setTimeout(onClick, 400)
	}

	return (
		<button
			className={`button 
			${type === 'normal' ? 'button--large' : 'button--large-outlined'}
			${type === 'outlined-lighter' ? 'button--large-outlined-lighter' : ''}`}
			onClick={handleOnClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

LargeButton.propTypes = {
	children: PropTypes.string,
	type: PropTypes.oneOf(['normal', 'outlined', 'outlined-lighter']),
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
}

LargeButton.defaultProps = {
	children: 'Button',
	disabled: false,
	type: 'normal',
}

export default LargeButton
