import React from "react";
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import { Select, TextArea } from '../../../../components/Forms'
import { useState } from "react";

const SuccesAndFailsActivity =() => {
    <div className="SelfEfficacy">
			<ModalProvider>
				<ActivitiesLocalizationBar
				title={data.title}
				variant= 'SelfEfficacy'
				/>
				<main className="useStrategiesOnYouActivity">
					<p className="systemText_instruction justifyText">
						{data.instructions}
					</p>
					<div className="scenario">
						<span className="question_label"> <n>Situación: </n></span>
						<p className="question_situation">
		                {data.scenarios[currentScenario].situation}
						</p>
					</div>
				</main>
			</ModalProvider>
		</div>
}

export default SuccesAndFailsActivity