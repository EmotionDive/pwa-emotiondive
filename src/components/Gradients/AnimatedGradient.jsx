import { useEffect } from 'react'
import { Gradient } from '../../utils/Gradient/Gradient.js'
import PropTypes from 'prop-types'

const AnimatedGradient = ({ children }) => {
	useEffect(() => {
		// Create your instance
		const gradient = new Gradient()

		// Call `initGradient` with the selector to your canvas
		gradient.initGradient('#gradient-canvas')
	}, [])
	return (
		<canvas id='gradient-canvas' data-js-darken-top data-transition-in>
			{children}
		</canvas>
	)
}

AnimatedGradient.propTypes = {
	children: PropTypes.any,
}

export default AnimatedGradient
