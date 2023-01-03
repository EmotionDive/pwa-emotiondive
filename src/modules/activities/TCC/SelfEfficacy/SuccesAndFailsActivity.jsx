import React from 'react'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import { ModalProvider } from '../../../../components/Modal'

const SuccesAndFailsActivity = () => {
	;<div className='SelfEfficacy'>
		<ModalProvider>
			<ActivitiesLocalizationBar title={data.title} variant='SelfEfficacy' />
			<main className='useStrategiesOnYouActivity'>
				<p className='systemText_instruction justifyText'>
					{data.instructions}
				</p>
				<div className='scenario'>
					<span className='question_label'>
						{' '}
						<n>Situación: </n>
					</span>
					<p className='question_situation'>
						{data.scenarios[currentScenario].situation}
					</p>
				</div>
			</main>
		</ModalProvider>
	</div>
}

export default SuccesAndFailsActivity
