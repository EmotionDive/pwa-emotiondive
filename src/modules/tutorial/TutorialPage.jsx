import AnimatedGradient from '../../components/Gradients/AnimatedGradient'
import logo from '../../assets/images/logos/LogoHorizontal.png'
import { LargeButton } from '../../components/Buttons'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import useUser from '../../data/hooks/useUser'
import FaderDiv from '../../utils/FaderDiv/FaderDiv'
import { useEffect, useRef, useState } from 'react'
import EmotionDiveLogo from '../../assets/images/logos/BigLogoInApp.png'
import selfKnowledge from '../../assets/images/pictures/Self-knowledge.png'
import selfEfficacy from '../../assets/images/pictures/Self-efficacy.png'
import selfRegulation from '../../assets/images/pictures/Self-regulation.png'
import empathy from '../../assets/images/pictures/Empathy.png'
import { useAuth0 } from '@auth0/auth0-react'
import UserService from '../../fetchers/UserService'

const TutorialPage = () => {
	const { updateFlags, updateUserData, userData } = useUser()
	const { user } = useAuth0()

	const navigate = useNavigate()
	const location = useLocation()

	const [slideIndex, setSlideIndex] = useState(0)
	const [disableButton, setDisableButton] = useState(true)

	const scrollTop = useRef()

	const handleNext = () => {
		setSlideIndex((prev) => prev + 1)
		setDisableButton(true)
		setTimeout(() => setDisableButton(false), 1000)
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => setDisableButton(false), 800)

		// If account
		if (location.state?.from === 'redirect') {
			UserService.getAccountStatus(user.email).then((res) => {
				updateFlags(res)
				if (!res.is_first_time) navigate('/', { replace: true })
			})
			UserService.getUserData(user.email).then((res) => updateUserData(res))
		}

		return () => clearTimeout(timeoutId)
	}, [])

	useEffect(() => {
		scrollTop.current?.scrollIntoView({ behavior: 'smooth' })
	}, [slideIndex])

	if (location.state === null) return <Navigate to='/' replace />

	return (
		<AnimatedGradient>
			<div className='tutorialPage'>
				<main ref={scrollTop}>
					<div className='info'>
						<FaderDiv className='slide zero' visible={slideIndex === 0}>
							<span className='bigText'>
								??Hola <b>{userData.nombre}</b>!
							</span>
							<span className='bigText'>
								Te damos la bienvenida a <b>EmotionDive</b>
							</span>
							<img src={EmotionDiveLogo} alt='EmotionDive' />
						</FaderDiv>
						<FaderDiv className='slide' visible={slideIndex === 1}>
							<span className='bigText'>
								??Estamos muy emocionados de comenzar este viaje contigo!
							</span>
							<span>
								El desarrollo de la Inteligencia Emocional no es f??cil, sin
								embargo, estaremos contigo en todo momento.
							</span>
							<span>
								Recuerda que la salud mental es esencial para desenvolverte en
								tu entorno en la toma de decisiones asertivas.
							</span>
						</FaderDiv>
						<FaderDiv className='slide' visible={slideIndex === 2}>
							<span className='bigText'>
								Quiz??s te preguntes, <b>??C??mo vamos a trabajar?</b>
							</span>
							<span>
								Primero deber??s realizar un examen,{' '}
								<b>pero no te preocupes, no tendr??s que estudiar</b>. A este
								examen se le conoce como{' '}
								<b>???Cuestionario de Inteligencia Emocional???</b> o <b>???CIE???</b>{' '}
								por sus siglas.
							</span>
							<span>
								Te pediremos paciencia cuando realices este examen ya que es
								largo, sin embargo, nos dar?? la oportunidad de{' '}
								<b>
									conocerte mejor, saber tus ??reas de oportunidad y ofertarte
									una mejor estrategia
								</b>{' '}
								para tu desarrollo de la Inteligencia Emocional.
							</span>
							<span>
								Una vez realizado el examen podr??s ver tus estad??sticas y
								posteriormente{' '}
								<b>
									elegir 2 de las 4 competencias de la Inteligencia Emocional
								</b>{' '}
								para poder trabajarlas con actividades{' '}
								<i>
									(no te preocupes en un momento te explicaremos qu?? es esto)
								</i>
								.
							</span>
							<span>
								La idea es que, mediante <b>planes semanales</b>, vayas
								realizando dichas actividades que te permitir??n crecer en las
								competencias.
							</span>
							<span>
								Al completar ambas competencias podr??s nuevamente hacer el
								examen, medir tu Inteligencia Emocional, y comparar con tu
								anterior estado para as?? repetir el proceso con las otras
								competencias que te faltan.
							</span>
							<span className='bigText'>
								<i>
									??As?? es como juntos trabajaremos tu Inteligencia Emocional!
								</i>
							</span>
						</FaderDiv>
						<FaderDiv className='slide' visible={slideIndex === 3}>
							<span className='bigText'>
								??Sabemos que quieres ya saltar directo a las actividades y
								arrancar motores!
							</span>
							<span>
								No obstante, antes necesitamos repasar conceptos muy importantes
								para que estemos en la misma p??gina.
							</span>
							<span className='bigText'>
								<i>???La paciencia es virtud de sabios???</i>
							</span>
						</FaderDiv>
						<FaderDiv
							className='slide eachCompetence'
							visible={slideIndex === 4}
						>
							<span className='bigText'>
								Primero revisemos, <b>??Qu?? es la Inteligencia Emocional?</b>
							</span>
							<div className='info'>
								<img src={EmotionDiveLogo} alt='EmotionDive' />
								<div>
									<span>
										Este es un concepto fundamental en la realizaci??n de las
										siguientes actividades, pues la{' '}
										<b>Inteligencia Emocional</b> es la capacidad de{' '}
										<b>reconocer</b>, <b>aceptar</b>, <b>gestionar</b> y{' '}
										<b>canalizar</b> nuestras emociones.
									</span>
									<span>
										Te preguntar??s, <b>??Para qu?? yo la necesito?</b> Pues esto
										nos sirve para poder dirigir nuestras decisiones y conductas
										a metas deseadas de una manera <b>asertiva</b>.
									</span>
									<span>
										En otras palabras, nos permite{' '}
										<b>mejorar nuestras conductas</b> hacia nosotros mismos como
										hacia los dem??s, de modo que nos permite tener{' '}
										<b>vidas m??s serenas</b>, con{' '}
										<b>decisiones m??s meditadas</b>, con{' '}
										<b>mejores relaciones</b> y buen{' '}
										<b>desenvolvimiento en sociedad</b>.
									</span>
								</div>
							</div>
						</FaderDiv>
						<FaderDiv className='slide' visible={slideIndex === 5}>
							<span className='bigText'>
								Todo gran viaje tiene un punto inicial, as?? que hablemos de{' '}
								<b>??C??mo est??n organizadas tus actividades?</b>
							</span>
							<span>
								??Recuerdas que mencionamos ??reas de oportunidad? Perfecto,
								retomaremos ese concepto.
							</span>
							<span>
								El examen CIE, nos dar?? una medida acerca de otros conceptos
								importantes las cuales son, <b>tus competencias cognitivas</b>{' '}
								de la Inteligencia Emocional.
							</span>
							<br />
							<span>
								<b>
									Muchos conceptos ??cierto?, no te preocupes, vamos paso a
									paso...
								</b>
							</span>
						</FaderDiv>
						<FaderDiv className='slide' visible={slideIndex === 6}>
							<span className='bigText'>
								Las <b>competencias cognitivas</b> son aptitudes que todos
								tenemos que est??n relacionadas al procesamiento de la
								informaci??n de nuestro entorno.
							</span>
							<span>
								Algunos autores definen que la suma de las competencias
								cognitivas forma la Inteligencia Emocional.
							</span>
						</FaderDiv>
						<FaderDiv className='slide seven' visible={slideIndex === 7}>
							<span className='bigText'>
								En EmotionDive trabajamos 4 competencias que nos proporciona el
								???CIE??? las cuales son:
							</span>
							<div className='competences'>
								<div>
									<img src={selfKnowledge} alt='Autoconocimiento' />
									<span>Autoconocimiento</span>
								</div>
								<div>
									<img src={selfRegulation} alt='Autorregulaci??n' />
									<span>Autorregulaci??n</span>
								</div>
								<div>
									<img src={selfEfficacy} alt='Autoeficacia' />
									<span>Autoeficacia</span>
								</div>
								<div>
									<img src={empathy} alt='Empat??a' />
									<span>Empat??a</span>
								</div>
							</div>
							<span>
								Vamos una a una y exploremos qu?? trabajaremos en cada una de
								ellas.
							</span>
						</FaderDiv>
						<FaderDiv
							className='slide eachCompetence'
							visible={slideIndex === 8}
						>
							<span className='bigText'>
								Comencemos por el <b>Autoconocimiento</b>, ??Qu?? es?
							</span>
							<div className='info'>
								<img src={selfKnowledge} alt='Autoconocimiento' />
								<div>
									<span>
										Es en primer lugar la{' '}
										<b>observaci??n que hace uno de s?? mismo</b>. En segundo
										lugar, es el <b>an??lisis de lo observado</b> y, por ??ltimo,
										es la <b>acci??n sobre uno mismo</b>.
									</span>
									<span>
										La idea es que estemos en constante an??lisis para conocer
										nuestras ??reas de oportunidad.
									</span>
								</div>
							</div>
						</FaderDiv>
						<FaderDiv
							className='slide eachCompetence'
							visible={slideIndex === 9}
						>
							<span className='bigText'>
								Por otro lado, ??Qu?? es la <b>Autorregulaci??n</b>?
							</span>
							<div className='info'>
								<img src={selfRegulation} alt='Autorregulaci??n' />
								<div>
									<span>
										Es el <b>control</b> que una persona realiza sobre{' '}
										<b>sus pensamientos, acciones y emociones</b>, es decir,
										saber <b>gestionar la intensidad</b> de la reacci??n ante una
										situaci??n y <b>saber c??mo externar tu sentir</b> sin perder
										las riendas.
									</span>
									<span>
										Recuerda que el saber expresar tu sentir con tu entorno es
										vital para no realizar acciones o tener pensamientos y/o
										emociones que no te permitan tomar una decisi??n asertiva en
										un momento de estr??s.
									</span>
								</div>
							</div>
						</FaderDiv>
						<FaderDiv
							className='slide eachCompetence'
							visible={slideIndex === 10}
						>
							<span className='bigText'>
								??Y la <b>Autoeficacia</b>?
							</span>
							<div className='info'>
								<img src={selfEfficacy} alt='Autoeficacia' />
								<div>
									<span>
										Las expectativas de <b>eficacia</b> pueden influir en la
										salud a trav??s de sus efectos motivacionales y a trav??s de
										sus efectos emocionales, pero exactamente <b>??Qu?? es?</b>.
									</span>
									<span>
										La autoeficacia es la <b>capacidad de modulaci??n</b> de la
										reactividad biol??gica <b>ante est??mulos estresantes</b>, es
										decir, es la capacidad de controlar la modulaci??n de tus
										acciones ante eventos que te estresan.
									</span>
									<span>
										Por otro lado, la autoeficacia influye en las expectativas
										que una persona desarrolla para conseguir objetivos
										personales y grupales.
									</span>
								</div>
							</div>
						</FaderDiv>
						<FaderDiv
							className='slide eachCompetence'
							visible={slideIndex === 11}
						>
							<span className='bigText'>
								Finalmente, ??Qu?? se puede decir de la <b>Empat??a</b>?
							</span>
							<div className='info'>
								<img src={empathy} alt='Empat??a' />
								<div>
									<span>
										La empat??a por s?? sola es un proceso psicol??gico de
										deducci??n, en el que la observaci??n de los dem??s, la
										memoria, el conocimiento y razonamiento se combinan para
										permitir{' '}
										<b>
											comprender las emociones y pensamientos de otras personas
										</b>
										.
									</span>
								</div>
							</div>
						</FaderDiv>
						<FaderDiv className='slide final' visible={slideIndex === 12}>
							<span className='bigText'>
								??Est??s a un paso de comenzar con este gran proceso!
							</span>
							<img src={EmotionDiveLogo} alt='EmotionDive' />
							<span>
								Sabemos que deseas ir por las actividades as?? que recuerda:
							</span>
							<span>
								Esto es un proceso largo, en el cual deber??s de tener mucha{' '}
								<b>paciencia y compromiso</b> con este proceso. Te acompa??aremos
								en todo momento, y recuerda que tu Inteligencia Emocional se
								desarrollara a partir de tu apertura con las actividades.
							</span>
							<span>Dicho lo anterior, solo queda decirte:</span>
							<span className='bigText'>
								<i>??Mucho ??xito {userData.nombre}!</i>
							</span>
						</FaderDiv>
					</div>
					{slideIndex !== 12 ? (
						<LargeButton
							color='secondary'
							onClick={handleNext}
							disabled={disableButton}
						>
							Siguiente
						</LargeButton>
					) : location.state.from === 'redirect' ? (
						<LargeButton
							onClick={() =>
								navigate('/testIE', { state: { fromTestIE: true } })
							}
							disabled={disableButton}
						>
							Realizar Test IE
						</LargeButton>
					) : (
						<LargeButton onClick={() => navigate('/')} disabled={disableButton}>
							Finalizar Tutorial
						</LargeButton>
					)}
				</main>
				<footer>
					<img src={logo} alt='EmotionDive'></img>
				</footer>
			</div>
		</AnimatedGradient>
	)
}

export default TutorialPage
