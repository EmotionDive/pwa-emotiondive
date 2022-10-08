import AnimatedGradient from '../../components/Gradients/AnimatedGradient'
import { Slide, SlideSwitch } from '../../utils/Slides'
import {
	EndTestIESlide,
	QuestionsTestIESlide,
	StartTestIESlide,
} from './slides'

const TestIEPage = () => {
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
