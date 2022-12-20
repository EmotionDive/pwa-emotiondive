import { Navigate, useLocation } from 'react-router-dom'
import AnimatedGradient from '../../components/Gradients/AnimatedGradient'
import { Slide, SlideSwitch } from '../../utils/Slides'
import {
	EndTestIESlide,
	QuestionsTestIESlide,
	StartTestIESlide,
} from './slides'

const TestIEPage = () => {
	const location = useLocation()

	if (!location.state?.fromTestIE) return <Navigate to='/' replace />

	return (
		<AnimatedGradient theme='shades-of-purple'>
			<SlideSwitch>
				<Slide path='/' element={<StartTestIESlide />} />
				<Slide path='/questions' element={<QuestionsTestIESlide />} />
				<Slide path='/end' element={<EndTestIESlide />} />
			</SlideSwitch>
		</AnimatedGradient>
	)
}

export default TestIEPage
