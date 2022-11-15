import { useRef } from 'react'
import { LargeButton } from '../../../components/Buttons'
import { CognitiveChooser } from '../components'

const ChooseCompetenceSlide = () => {
	const competences = useRef([])

	return (
		<div className='chooseCompetencesSlide'>
			<h1 className='text--big'>
				!Es hora de elegir que competencia trabajarás¡
			</h1>
			<span className='systemText__instruction'>
				Elige 2 competencias de la Inteligencia Emocional:
			</span>
			<CognitiveChooser onChange={(value) => (competences.current = value)} />
			<span className='text--small justifyText'>
				Te sugerimos elijas las competencias <b>autoconocimiento</b> y{' '}
				<b>autoeficacia</b> ya que son tus áreas de oportunidad con base en tus
				estadísticas.
			</span>
			<LargeButton
				onClick={() => {
					console.log(competences.current)
				}}
			>
				Listo
			</LargeButton>
		</div>
	)
}

export default ChooseCompetenceSlide
