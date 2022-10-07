import { useEffect } from 'react'
import { Gradient } from '../../utils/Gradient/Gradient.js'
import PropTypes from 'prop-types'

const AnimatedGradient = ({ children, theme }) => {
	useEffect(() => {
		// Create your instance
		const gradient = new Gradient()
		// Call `initGradient` with the selector to your canvas
		gradient.initGradient(`#gradient--${theme}`)
	}, [])

	return (
		<div className='gradient__container'>
			<div className='gradient__content'>{children}</div>
			<div className='gradient__overlay-opacity' />
			<div className='gradient__overlay-noise' />
			<canvas
				className='gradient__canvas'
				id={`gradient--${theme}`}
				data-js-darken-top
				data-transition-in
			/>
		</div>
	)
}

AnimatedGradient.propTypes = {
	children: PropTypes.any,
	theme: PropTypes.oneOf(['bibble', 'bibble-light', 'shades-of-purple']),
}

AnimatedGradient.defaultProps = {
	theme: 'bibble',
}

export default AnimatedGradient
