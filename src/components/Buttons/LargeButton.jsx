import PropTypes from 'prop-types'

const LargeButton = ({ children, onClick, disabled }) => {
	const handleOnClick = () => {
		setTimeout(onClick, 400)
	}
	return (
		<button
			className={`button button--large`}
			onClick={handleOnClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

LargeButton.propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
}

LargeButton.defaultProps = {
	children: 'Button',
	disabled: false,
}

export default LargeButton
