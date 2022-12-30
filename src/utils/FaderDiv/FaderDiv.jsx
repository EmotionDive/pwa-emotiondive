import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const FaderDiv = ({ className = '', visible = true, children }) => {
	const [isVisible, setIsVisible] = useState(visible)
	const [fadeOut, setFadeOut] = useState(false)

	useEffect(() => {
		let timeoutId = 0
		if (!visible) {
			setFadeOut(true)
			timeoutId = setTimeout(() => {
				setFadeOut(false)
				setIsVisible(false)
			}, 600)
		} else {
			timeoutId = setTimeout(() => {
				setIsVisible(true)
			}, 600)
		}
		return () => {
			clearTimeout(timeoutId)
		}
	}, [visible])

	return (
		<div
			className={`${className} faderDiv ${isVisible ? '' : 'invisible'} ${
				fadeOut ? 'fade-out' : ''
			}`}
		>
			{children}
		</div>
	)
}

FaderDiv.propTypes = {
	className: PropTypes.string,
	visible: PropTypes.bool,
	children: PropTypes.any,
}

export default FaderDiv
