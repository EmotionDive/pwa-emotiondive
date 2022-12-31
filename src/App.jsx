import RegisterPage from './modules/registration/RegisterPage'
import { Routes, Route } from 'react-router-dom'
import ActivatedAccountPage from './modules/registration/ActivatedAccountPage'
import NoActivatedAccountPage from './modules/registration/NoActivatedAccountPage'
import TutorialPage from './modules/tutorial/TutorialPage'
import TestIEPage from './modules/testIE/TestIEPage'
import StatisticsPage from './modules/statistics/StatisticsPage'
import MainAppLayout from './layouts/MainAppLayout'
import ConfigurationPage from './modules/configuration/ConfigurationPage'
import HelpPage from './modules/assistance/HelpPage'
import AuthorizeRedirect from './auth/AuthorizeRedirect'
import { useAuth0 } from '@auth0/auth0-react'
import AuthorizedRoutes from './auth/AuthorizedRoutes'
import RootAuthPage from './auth/RootAuthPage'
import ActivitiesMenuPage from './modules/activities/activitiesMenus/ActivitiesMenuPage'
import WeekPlanPage from './modules/activities/weekPlan/WeekPlanPage'
import ActivitiesLayout from './modules/activities/ActivitiesLayout'
import ChooseCompetencePage from './modules/activities/activitiesMenus/ChooseCompetencePage'
import ShowActivitiesPage from './modules/activities/activitiesMenus/ShowActivitiesPage'
import {
	HowSelfRegulateActivity,
	LearnStrategiesActivity,
	SelfRegulationStrategiesActivity,
	SelfRegulationTestActivity,
	UseStrategiesOnYouActivity,
} from './modules/activities/TCC/SelfRegulation'

import {
	EmpathicConversations,
	EnvironmentRecognition,
	EmpathicComments,
	EmpathySympathyAntipathy,
	EmpathySympathyAntipathy2,
} from './modules/activities/TCC/Empathy'

import {
	OwnDecisionsEmotionandReasonsActivity,
	ReasonsEmotionActivity,
	WhatwouldyoudoActivity,
	SuccessesAndFailuresActivity,
	SuccesAndFailsActivity2,
} from './modules/activities/TCC/SelfEfficacy'

import {
	DescribeSituationandEmotionAssigmentActivity,
	EmotionalAssigmentActivity,
	EmotionRecognitionActivity,
	IdentifyEmotionsActivity,
	WhatDoilLikeActivity,
} from './modules/activities/TCC/SelfKnowledge'
import TheEnd from './modules/activities/activitiesMenus/TheEnd'
import WorkInProgress from './modules/extra/WorkInProgress'
import NotFound from './modules/extra/NotFound'

function App() {
	const { isLoading } = useAuth0()

	if (isLoading) return <div>Loading...</div>

	return (
		<Routes>
			<Route path='/' element={<RootAuthPage />} />
			<Route path='/activeAccount' element={<ActivatedAccountPage />} />
			{/* Authorized Routes */}
			<Route element={<AuthorizedRoutes />}>
				<Route path='/registro' element={<RegisterPage />} />
				<Route path='/authorize' element={<AuthorizeRedirect />} />
				<Route path='/tutorial' element={<TutorialPage />} />
				<Route path='/testIE' element={<TestIEPage />} />
				<Route path='/cuentaNoActiva' element={<NoActivatedAccountPage />} />
				<Route element={<MainAppLayout />}>
					<Route path='/estadisticas' element={<StatisticsPage />} />
					<Route path='/configuracion' element={<WorkInProgress />} />
					<Route path='/ayuda' element={<WorkInProgress />} />
					<Route path='/actividades'>
						<Route element={<ActivitiesLayout />}>
							<Route index element={<ActivitiesMenuPage />} />
							<Route path='planSemanal' element={<WeekPlanPage />} />
							<Route
								path='elegirCompetencias'
								element={<ChooseCompetencePage />}
							/>
							<Route path='verActividades' element={<ShowActivitiesPage />} />
							<Route path='fin' element={<TheEnd />} />
						</Route>
					</Route>
				</Route>
				<Route path='actividades'>
					<Route path='autorregulacion'>
						{/* IMPORTANT: The path will be the acitivity ID on BD */}
						<Route path='1' element={<HowSelfRegulateActivity />} />
						<Route path='2' element={<SelfRegulationStrategiesActivity />} />
						<Route path='3' element={<LearnStrategiesActivity />} />
						<Route path='4' element={<UseStrategiesOnYouActivity />} />
						<Route path='5' element={<SelfRegulationTestActivity />} />
					</Route>
					<Route path='autoeficacia'>
						{/* IMPORTATNE: El path será el ID de la actividad en BD */}
						<Route
							path='1'
							element={<OwnDecisionsEmotionandReasonsActivity />}
						/>
						<Route path='2' element={<ReasonsEmotionActivity />} />
						<Route path='3' element={<WhatwouldyoudoActivity />} />
						<Route path='4' element={<SuccessesAndFailuresActivity />} />
						<Route path='5' element={<SuccesAndFailsActivity2 />} />
					</Route>
					<Route path='autoconocimiento'>
						{/* IMPORTATNE: El path será el ID de la actividad en BD */}
						<Route path='1' element={<IdentifyEmotionsActivity />} />
						<Route path='2' element={<EmotionalAssigmentActivity />} />
						<Route
							path='3'
							element={<DescribeSituationandEmotionAssigmentActivity />}
						/>
						<Route path='4' element={<EmotionRecognitionActivity />} />
						<Route path='5' element={<WhatDoilLikeActivity />} />
					</Route>
					<Route path='empatia'>
						{/* IMPORTATNE: El path será el ID de la actividad en BD */}
						<Route path='1' element={<EmpathySympathyAntipathy />} />
						<Route path='2' element={<EmpathySympathyAntipathy2 />} />
						<Route path='3' element={<EmpathicConversations />} />
						<Route path='4' element={<EnvironmentRecognition />} />
						<Route path='5' element={<EmpathicComments />} />
					</Route>
				</Route>
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
