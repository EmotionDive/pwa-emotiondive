import PropTypes from 'prop-types'

const LargeButton = ({ children, onClick, disabled, type, color }) => {
	const handleOnClick = () => {
		setTimeout(onClick, 400)
	}

	return (
		<button
			className={`button 
			${type === 'normal' ? 'button--large' : 'button--large-outlined'}
			${
				type === 'outlined-lighter' ? 'button--large-outlined-lighter' : ''
			} ${color}`}
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
	color: PropTypes.oneOf(['primary', 'secondary']),
}

LargeButton.defaultProps = {
	children: 'Button',
	disabled: false,
	type: 'normal',
	color: 'primary',
}

export default LargeButton
