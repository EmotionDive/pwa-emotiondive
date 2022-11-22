import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import data from './data/SelfRegulationStrategiesData.json'

const SelfRegulationStrategiesActivity = () => {
	return (
		<div className='SelfRegulationActivity'>
			<ActivitiesLocalizationBar variant='SelfRegulation' title={data.title} />
			<main>a</main>
		</div>
	)
}

export default SelfRegulationStrategiesActivity
