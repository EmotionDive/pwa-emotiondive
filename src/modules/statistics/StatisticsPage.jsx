import { BackgroundLocalizationBar } from '../../components/LocalizationBar'
import { BottomBar } from '../../components/Navigation'

const StatisticsPage = () => {
	return (
		<div className='appWrapper'>
			<BackgroundLocalizationBar localization='Estadísticas IE' />
			<main>Main Content</main>
			<BottomBar />
		</div>
	)
}

export default StatisticsPage
