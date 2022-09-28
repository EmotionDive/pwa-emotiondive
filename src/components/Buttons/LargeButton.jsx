import PropTypes from 'prop-types'

const LargeButton = ({ children, onClick }) => {
	const handleOnClick = () => {
		setTimeout(onClick, 400)
	}
	return (
		<button className='button button--large' onClick={handleOnClick}>
			{children}
		</button>
	)
}

LargeButton.propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func,
}

LargeButton.defaultProps = {
	children: 'Button',
}

export default LargeButton
