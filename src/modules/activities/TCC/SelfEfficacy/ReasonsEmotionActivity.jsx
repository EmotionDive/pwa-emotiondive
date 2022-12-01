import React from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import { Select, TextArea } from '../../../../components/Forms'
import data from './data/DecisionsEmotionReason.json'
import { useState } from 'react'
import { useEffect } from 'react'
import RedactSuccess from './components/RedactSuccess'
import { Slide, SlideSwitch } from '../../../../utils/Slides'
import RedactEmotionsAndReasons from './components/RedactEmotionsAndReasons'
const ReasonEmotionActivity = () => {
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
