import PropTypes from 'prop-types'

const LargeButton = ({ children }) => {
	return <button className='button button--large'>{children}</button>
}

LargeButton.propTypes = {
	children: PropTypes.string,
}

LargeButton.defaultProps = {
	children: 'Button',
}

export default LargeButton
