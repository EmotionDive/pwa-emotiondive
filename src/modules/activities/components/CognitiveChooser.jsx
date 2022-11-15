import { useState } from 'react'
import CognitiveButton from './CognitiveButton'
import PropTypes from 'prop-types'

const CognitiveChooser = ({ onChange }) => {
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
			<CognitiveButton
				variant='SelfKnowledge'
				active={competences.includes('SelfKnowledge')}
				onClick={() => addCompetence('SelfKnowledge')}
			/>
			<CognitiveButton
				variant='SelfRegulation'
				active={competences.includes('SelfRegulation')}
				onClick={() => addCompetence('SelfRegulation')}
			/>
			<CognitiveButton
				variant='SelfEfficacy'
				active={competences.includes('SelfEfficacy')}
				onClick={() => addCompetence('SelfEfficacy')}
			/>
			<CognitiveButton
				variant='Empathy'
				active={competences.includes('Empathy')}
				onClick={() => addCompetence('Empathy')}
			/>
		</div>
	)
}

CognitiveChooser.propTypes = {
	onChange: PropTypes.func,
}

CognitiveChooser.defaltProps = {
	onChange: () => {},
}

export default CognitiveChooser
