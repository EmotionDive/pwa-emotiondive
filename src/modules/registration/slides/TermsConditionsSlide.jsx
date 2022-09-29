import { useEffect, useState } from 'react'
import { LargeButton, TextButton } from '../../../components/Buttons'
import { useSlides } from '../../../utils/Slides'
import TextFormatter from '../../../utils/TextFormatter/TextFormatter'

const TermsConditionsSlide = () => {
	const { slideTo } = useSlides()
	const [terms, setTerms] = useState([])
	const [scrollAtBottom, setScrollAtBottom] = useState(false)

	useEffect(() => {
		fetch('/src/assets/markdown/TermsAndConditions.md')
			.then((response) => response.text())
			.then((text) => {
				setTerms(text.split('\n').filter((paragraph) => paragraph !== '\r'))
			})
	}, [])

	const handleScroll = (e) => {
		const bottom =
			e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight * 1.25
		if (bottom) setScrollAtBottom(true)
	}

	return (
		<>
			<section className='mainWrapper__centerContent registerPage__top'>
				<h1 className='text--big'>Antes de empezar, conoce nuestro T&Cs</h1>
				<section className='termsAndConditions' onScroll={handleScroll}>
					{terms.map((paragraph, index) => (
						<TextFormatter key={index} wrapWith='p'>
							{paragraph}
						</TextFormatter>
					))}
				</section>
			</section>
			<section className='mainWrapper__bottom termsAndConditions__bottom'>
				<LargeButton
					disabled={!scrollAtBottom}
					onClick={() => slideTo('/username')}
				>
					Continuar
				</LargeButton>
				<span>
					Dando click en “Continuar”, aceptas nuestros Términos & Condiciones.
				</span>
				<TextButton
					withBack={true}
					onClick={() => slideTo('/email')}
					color='secondary'
				>
					Atrás
				</TextButton>
			</section>
		</>
	)
}

export default TermsConditionsSlide
