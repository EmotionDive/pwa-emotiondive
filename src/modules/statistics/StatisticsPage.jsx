import { BarChart, ChartContainer, ChartLabels } from '../../components/Charts'
import { TabContainer } from '../../components/Controls'
import TabButton from '../../components/Controls/TabButton'
import CardOpportunityArea from './components/CardOpportunityArea'

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
	return (
		<div className='statisticsPage'>
			<section className='statisticsPage__sectionGeneral'>
				<div>
					<TabContainer value={0} onChange={(value) => console.log(value)}>
						<TabButton>Actual</TabButton>
						<TabButton>Antes</TabButton>
					</TabContainer>
					<p className='text--small justifyText'>
						En la siguiente gráfica puedes observar cómo se encuentra el estado
						de tus competencias cognitivas de la Inteligencia Emocional para que
						así puedas ver poco a poco tu progreso.
					</p>
					<ChartContainer className='statisticsPage__graph'>
						<ChartLabels
							seriesLabels={seriesLabels}
							seriesColors={seriesColors}
						/>
						<BarChart series={[30, 70, 50, 100]} seriesColors={seriesColors} />
					</ChartContainer>
				</div>
				<div>
					<h1>Descripción General</h1>
					<p>
						Tienes una Inteligencia Emocional que te permite ser <b>empático</b>{' '}
						con las personas que te rodean, ya sea porque comprendes sus
						emociones y sabes como estar cerca de ellas.
					</p>
					<p>
						Tal vez te cueste un poco creer en tus propias capacidades y puede
						que no uses adecuadamente tus emociones para manejar ciertas
						situaciones para alcanzar la <b>autoeficacia</b>.
					</p>
					<p>
						Por otro lado, cuando se te presenta alguna situación importante
						eres capaz de <b>autoregularte</b> para mantener serenidad y buena
						conducta tanto contigo mismo como con los demás.
					</p>
					<p>
						Un lugar a mejorar de tu Inteligencia Emocional sería el comprender
						como es que las emociones influyen en tu vida en ciertos escenarios
						para así alcanzar el <b>autoconocimiento</b>.
					</p>
				</div>
			</section>
			<section className='statisticsPage__sectionOportunities'>
				<h1>Áreas de Oportunidad</h1>
				<div className='cardOpportunityArea__container'>
					<CardOpportunityArea type='SelfKnowledge'>
						En <b>autoconocimiento</b> tienes muchas oportunidades para poder
						crecer, donde el entender mejor cómo es que funcionan tus emociones
						básicas como la alegría, la tristeza o la ira sería de lo primero en
						lo que te tienes que enfocar.
					</CardOpportunityArea>
					<CardOpportunityArea type='SelfEfficacy'>
						En <b>autoeficacia</b> puedes mejorar en varios aspectos! Uno de
						ellos es aprender a utilizar tus emociones a tu favor para afrontar
						mejor tu día a día (no en contra).
					</CardOpportunityArea>
				</div>
			</section>
		</div>
	)
}

export default StatisticsPage
