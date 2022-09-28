import PropTypes from 'prop-types'

const TextButton = ({ children, iconSVG, onClick }) => {
	const handleOnClick = () => {
		setTimeout(onClick, 400)
	}

	return (
		<div
			className='button__text'
			tabIndex='0'
			role='button'
			onClick={handleOnClick}
			onKeyDown={handleOnClick}
		>
			{iconSVG}
			<span>{children}</span>
		</div>
	)
}

TextButton.propTypes = {
	children: PropTypes.string,
	iconSVG: PropTypes.node,
	onClick: PropTypes.func,
}

TextButton.defaultProps = {
	children: 'Button',
}

export default TextButton
