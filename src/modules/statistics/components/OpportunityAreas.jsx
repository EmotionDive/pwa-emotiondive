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
		En <b>autorregulación</b> tienes la oportunidad de aprender cómo es que
		podrás afrontar diversas situaciones tomando en cuenta tus emociones pero a
		la vez no dejando que ellas tomen el control por tí. Usar las emociones de
		forma controlada es la meta para un mejor sentir y actuar.
	</CardOpportunityArea>,
	<CardOpportunityArea key={2} type='SelfEfficacy'>
		En <b>autoeficacia</b> puedes mejorar en varios aspectos. Uno de ellos es
		aprender a utilizar tus emociones a tu favor para afrontar mejor tu día a
		día (no en contra) y sobre todo, mejorar nuestras decisiones.
	</CardOpportunityArea>,
	<CardOpportunityArea key={3} type='Empathy'>
		En <b>empatía</b> tienes un gran área de mejora para poder entender y
		comprender las emociones y sentimientos de los demás. Por otro lado, puedes
		mejorar tu autoestima, tus habilidades sociales y tu actitud en el día a
		día.
	</CardOpportunityArea>,
]

const OpportunityAreas = ({ grades }) => {
	const smallestIndexes = (array) => {
		const copyArray = [...array]
		const smallers = []
		smallers.push(Math.min.apply(Math, copyArray))
		copyArray.splice(copyArray.indexOf(smallers[0]), 1)
		smallers.push(Math.min.apply(Math, copyArray))

		return [
			array.indexOf(smallers[0]),
			smallers[0] !== smallers[1]
				? array.indexOf(smallers[1])
				: copyArray.indexOf(smallers[1]) + 1,
		]
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
