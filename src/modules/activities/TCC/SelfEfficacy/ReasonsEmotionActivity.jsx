import React from "react";
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import { Select, TextArea } from '../../../../components/Forms'
import data from "./data/DecisionsEmotionReason.json"

const ReasonEmotionActivity =() => {
	console.log(data.scenarios[0].messages)
    return (
		<div className="SelfEfficacy">
			<ModalProvider>
				<ActivitiesLocalizationBar
				title={data.title}
				variant= 'SelfEfficacy'
				/>
				<main className="useStrategiesOnYouActivity">
					<p className="systemText_instruction justifyTexy">
						{data.instructions}
					</p>
					<div className="scenario">
						<span className="question_label"> Situación</span>
						<p className="question_situation">
		                {data.scenarios[0].situation}
						</p>
					</div>
				</main>
			</ModalProvider>
		</div>
	)
}

export default ReasonEmotionActivity