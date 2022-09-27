import { useContext } from 'react'
import { SlidesContext } from '../SlideSwitch'

export default function useSlides() {
	const { changeSlide, state, setState } = useContext(SlidesContext)

	const slideTo = (path) => {
		changeSlide(path)
	}

	return {
		slideTo,
		setState,
		state,
	}
}
