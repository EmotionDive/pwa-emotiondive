import { useState } from 'react'
import { useQuery } from 'react-query'
import { BarChart, ChartContainer, ChartLabels } from '../../components/Charts'
import { TabContainer } from '../../components/Controls'
import TabButton from '../../components/Controls/TabButton'
import useUser from '../../data/hooks/useUser'
import TestService from '../../fetchers/TestService'
import OpportunityAreas from './components/OpportunityAreas'
import TextFormatter from '../../utils/TextFormatter/TextFormatter'
const seriesColors = [
	'var(--IE-self-knowledge-500)',
	'var(--IE-self-regulation-500)',
	'var(--IE-self-efficacy-500)',
	'var(--IE-empathy-500)',
]

const seriesLabels = [
	'Autoconocimiento',
	'Autoregulación',
	'Autoeficacia',
	'Empatía',
]

const StatisticsPage = () => {
	const { userData } = useUser()
	const [tab, setTab] = useState(0)

	const { isLoading, data } = useQuery('statistics', () =>
		TestService.getStatistics(userData.username)
	)

	if (isLoading) return <span>Loading...</span>
	else {
		const grades = [
			data[tab].autoconocimiento.grade,
			data[tab].autoregulacion.grade,
			data[tab].autoeficacia.grade,
			data[tab].empatia.grade,
		]

		return (
			<div className='statisticsPage'>
				<section className='statisticsPage__sectionGeneral'>
					<div>
						<TabContainer value={tab} onChange={(value) => setTab(value)}>
							<TabButton>Actual</TabButton>
							<TabButton disabled={data.length === 1}>Antes</TabButton>
						</TabContainer>
						<p className='text--small justifyText'>
							En la siguiente gráfica puedes observar cómo se encuentra el
							estado de tus competencias cognitivas de la Inteligencia Emocional
							para que así puedas ver poco a poco tu progreso.
						</p>
						<ChartContainer className='statisticsPage__graph'>
							<ChartLabels
								seriesLabels={seriesLabels}
								seriesColors={seriesColors}
							/>
							<BarChart series={grades} seriesColors={seriesColors} />
						</ChartContainer>
					</div>
					<div>
						<h1>Descripción General</h1>
						<TextFormatter wrapWith='p'>
							{data[tab].autoconocimiento.message}
						</TextFormatter>
						<TextFormatter wrapWith='p'>
							{data[tab].autoregulacion.message}
						</TextFormatter>
						<TextFormatter wrapWith='p'>
							{data[tab].autoeficacia.message}
						</TextFormatter>
						<TextFormatter wrapWith='p'>
							{data[tab].empatia.message}
						</TextFormatter>
					</div>
				</section>
				<section className='statisticsPage__sectionOportunities'>
					<h1>Áreas de Oportunidad</h1>
					<div className='cardOpportunityArea__container'>
						<OpportunityAreas grades={grades} />
					</div>
				</section>
			</div>
		)
	}
}

export default StatisticsPage
