import PropTypes from 'prop-types'

const SmallButton = ({ children, onClick, disabled }) => {
	const handleOnClick = () => {
		setTimeout(onClick, 400)
	}

	return (
		<button
			className={`button button--small`}
			onClick={handleOnClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

SmallButton.propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
}

SmallButton.defaultProps = {
	children: 'Button',
	disabled: false,
}

export default SmallButton
