import React from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import { ModalAction, ModalProvider } from '../../../../components/Modal'
import data from './data/DecisionsEmotionReason.json'
import RedactSuccess from './components/RedactSuccess'
import { Slide, SlideSwitch } from '../../../../utils/Slides'
import RedactEmotionsAndReasons from './components/RedactEmotionsAndReasons'
import useActivityUtils from '../../hooks/useActivityUtils'
import { Navigate } from 'react-router-dom'
const ReasonEmotionActivity = () => {
	const { accessFromMenu } = useActivityUtils()

	if (!accessFromMenu) return <Navigate to='/' replace />

	return (
		<div className='SelfEfficacyActivity'>
			<ModalProvider>
				<ActivitiesLocalizationBar title={data.title} variant='SelfEfficacy' />
				<main className='successesAndFailuresActivity'>
					<SlideSwitch>
						<Slide path='/' element={<RedactSuccess data={data} />} />
						<Slide
							path='/RedactEmotionsAndReasons'
							element={<RedactEmotionsAndReasons />}
						/>
					</SlideSwitch>
				</main>
				<ModalAction />
			</ModalProvider>
		</div>
	)
}

export default ReasonEmotionActivity
