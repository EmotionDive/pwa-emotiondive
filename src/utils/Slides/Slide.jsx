import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
const Slide = ({ path, element }) => {
	return element
}

Slide.propTypes = {
	path: PropTypes.string.isRequired,
	element: PropTypes.node.isRequired,
}

export default Slide
