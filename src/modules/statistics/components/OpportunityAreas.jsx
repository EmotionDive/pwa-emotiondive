import React, { useMemo } from 'react'
import CardOpportunityArea from './CardOpportunityArea'
import PropTypes from 'prop-types'

// TODO: CHANGE TEXT ON SELFREGULATION AND EMPATHY

const opportunityCards = [
	<CardOpportunityArea key={0} type='SelfKnowledge'>
		En <b>autoconocimiento</b> tienes muchas oportunidades para poder crecer,
		donde el entender mejor cómo es que funcionan tus emociones básicas como la
		alegría, la tristeza o la ira sería de lo primero en lo que te tienes que
		enfocar.
	</CardOpportunityArea>,
	<CardOpportunityArea key={1} type='SelfRegulation'>
		En <b>autoregulación</b> tienes muchas oportunidades para poder crecer,
		donde el entender mejor cómo es que funcionan tus emociones básicas como la
		alegría, la tristeza o la ira sería de lo primero en lo que te tienes que
		enfocar.
	</CardOpportunityArea>,
	<CardOpportunityArea key={2} type='SelfEfficacy'>
		En <b>autoeficacia</b> puedes mejorar en varios aspectos! Uno de ellos es
		aprender a utilizar tus emociones a tu favor para afrontar mejor tu día a
		día (no en contra).
	</CardOpportunityArea>,
	<CardOpportunityArea key={3} type='Empathy'>
		En <b>empatía</b> tienes muchas oportunidades para poder crecer, donde el
		entender mejor cómo es que funcionan tus emociones básicas como la alegría,
		la tristeza o la ira sería de lo primero en lo que te tienes que enfocar.
	</CardOpportunityArea>,
]

const OpportunityAreas = ({ grades }) => {
	const smallestIndexes = (array) => {
		const copyArray = [...array]
		const smallers = []
		smallers.push(Math.min.apply(Math, copyArray))
		copyArray.splice(copyArray.indexOf(smallers[0]), 1)
		smallers.push(Math.min.apply(Math, copyArray))
		return [array.indexOf(smallers[0]), array.indexOf(smallers[1])]
	}

	const opportunities = useMemo(() => smallestIndexes(grades), [grades])

	return (
		<>
			{opportunityCards[opportunities[0]]}
			{opportunityCards[opportunities[1]]}
		</>
	)
}

OpportunityAreas.propTypes = {
	grades: PropTypes.arrayOf(PropTypes.number),
}

export default OpportunityAreas
