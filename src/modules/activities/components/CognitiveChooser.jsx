import { useState } from 'react'
import CognitiveButton from './CognitiveButton'
import PropTypes from 'prop-types'

const translate = {
	Autoconocimiento: 'SelfKnowledge',
	Autoeficacia: 'SelfEfficacy',
	Autorregulación: 'SelfRegulation',
	Empatia: 'Empathy',
}

const CognitiveChooser = ({ onChange, undone }) => {
	const [competences, setCompetences] = useState([])

	const addCompetence = (competence) => {
		const competencesCopy = [...competences]

		const alreadyChoosed = competencesCopy.indexOf(competence)

		if (alreadyChoosed !== -1) {
			competencesCopy.splice(alreadyChoosed, 1)
		} else {
			if (competencesCopy.length === 2) competencesCopy.shift()
			competencesCopy.push(competence)
		}
		setCompetences(competencesCopy)
		onChange(competencesCopy)
	}

	return (
		<div className='cognitiveCards'>
			{undone.map((competence, key) => {
				const translation = translate[competence]
				return (
					<CognitiveButton
						variant={translation}
						key={key}
						active={competences.includes(translation)}
						onClick={() => addCompetence(translation)}
					/>
				)
			})}
		</div>
	)
}

CognitiveChooser.propTypes = {
	onChange: PropTypes.func,
	undone: PropTypes.array.isRequired,
}

CognitiveChooser.defaltProps = {
	onChange: () => {},
}

export default CognitiveChooser
