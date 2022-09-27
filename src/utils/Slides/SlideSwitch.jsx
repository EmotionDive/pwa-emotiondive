import React, { useState, createContext, useEffect } from 'react'

export const SlidesContext = createContext(null)

const SlideSwitch = ({ children }) => {
	const [currentSlide, setCurrentSlide] = useState('')
	const [state, setState] = useState(null)

	useEffect(() => {
		if (children) {
			changeSlide('/')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const changeSlide = (path) => {
		const slide = children.find((slide) => slide.props.path === path)
		if (slide === undefined) {
			setCurrentSlide('')
			console.warn(`No slides matched location "${path}"`)
		} else setCurrentSlide(slide.props.element)
	}

	if (!children) return ''

	return (
		<SlidesContext.Provider value={{ changeSlide, state, setState }}>
			{currentSlide}
		</SlidesContext.Provider>
	)
}

SlideSwitch.propTypes = {
	children: (props, propName) => {
		let error
		const prop = props[propName]
		React.Children.forEach(prop, (child) => {
			if (child.type.name !== 'Slide')
				error = new Error(
					`<SlideSwitch> only accepts children of type <Slide>".`
				)
		})
		return error
	},
}

export default SlideSwitch
