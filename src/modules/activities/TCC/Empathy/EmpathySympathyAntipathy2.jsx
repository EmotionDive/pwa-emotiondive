import { useEffect, useState, useRef } from 'react'
import {
	LargeButton,
	OptionButton,
	OptionButtonGroup,
} from '../../../../components/Buttons'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import data from './data/EmpathySympathyAntipathy2Data.json'

const opts = ['A', 'B', 'C']

const EmpathySympathyAntipathy2 = () => {
    const [currentSet] = useState(Math.floor(Math.random() * (data.sets.length - 0)));
    const [currentScenario, setCurrentScenario] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const scrollBottom = useRef(null)
	const scrollTop = useRef(null)

    useEffect(() => {
		if (correctAnswer === null)
			scrollTop.current.scrollIntoView({ behavior: 'smooth' })
		else scrollBottom.current.scrollIntoView({ behavior: 'smooth' })
	}, [correctAnswer])

    const handleGrade = () => {
        setCorrectAnswer(data.sets[currentSet].scenarios[currentScenario].answer_index)
    }

    const handleNext = () => {
        setCurrentAnswer(null)
        setCorrectAnswer(null)
        setCurrentScenario(currentScenario+1)
    }
    
    return(
        <div className='EmpathyActivity'>
            <ModalProvider>
                <ActivitiesLocalizationBar
					variant='Empathy'
					title={data.title}
				/>
                <main className='EmpathySympathyAntipathy2Activity'>
                    <div className='scenario'>
                        <span className='scenario__instruction' ref={scrollTop}>
                            {data.instruction}
                        </span>
                        <span className='scenario__title'>{data.sets[currentSet].scenarios[currentScenario].title}</span>
                        <p className='scenario__situation'>
                            {data.sets[currentSet].scenarios[currentScenario].description}
                        </p>
                        <strong>
                            <p className='scenario__label'>
                                {data.sets[currentSet].scenarios[currentScenario].question}
                            </p>
                        </strong>
                        <OptionButtonGroup
							wrapWith='div'
							className={`scenario__answers ${
								correctAnswer !== null ? 'disabled' : ''
							}`}
							onChange={(value) => setCurrentAnswer(value)}
							value={currentAnswer}
						>
                            {data.sets[currentSet].scenarios[currentScenario].options.map((text, index) => (
                                <OptionButton
                                    value={opts[index]}
                                    key={index}
                                    variant='Empathy'
                                    fontWeight='medium'
                                    errorSucces={
										correctAnswer === index
											? 'success'
											: correctAnswer !== null &&
											  opts.indexOf(currentAnswer) === index
											? 'error'
											: 'none'
									}
                                >
                                    {text}
                                </OptionButton>
                            ))}
                        </OptionButtonGroup>
                        <div className='scenario__bottom'>

                            {correctAnswer === null || correctAnswer === null ? null : (
                                <div className='scenario__bottom__explication'>
                                    <span className='scenario__label'>
                                        <strong>Retroalimentaci&oacute;n:</strong>
                                    </span>
                                    {opts.indexOf(currentAnswer) === correctAnswer ? (
                                        <p className='justifyText'>
                                            Muy bien, lograste identificar el tipo de comportamiento en dicho escenario, parece que tienes claros los conceptos de <strong>empatía, simpatía y antipatía</strong> para este caso.
                                        </p>
                                    ) : (
                                        <p className='justifyText'>
                                            Parece que fallastes, te recomendamos darle un repaso adicional a las definiciones de <strong>empatía, simpatía y antipatía.</strong>
                                        </p>
                                    )}
                                </div>
                            )}

                            {correctAnswer === null ? (
                                <LargeButton
                                    color='secondary'
                                    disabled={currentAnswer === null}
                                    onClick={handleGrade}
                                >
                                    Calificar
                                </LargeButton>
                            ) : currentScenario !== data.sets[currentSet].scenarios.length - 1 ? (
                                <LargeButton color='secondary' onClick={handleNext}>
                                    Siguiente
                                </LargeButton>
                                 
                            ) : (
                                <LargeButtonModal
									title={'¡Terminaste de Aprender!'}
									info={
										'Terminaste de identificar los comportamientos empáticos, simpáticos y antipáticos de diversos escenarios, esperamos que esto haya ayudado a fortalecer las definiciones aprendidas!'
									}
									variant='confirmation'
									buttonLabels={['Okey']}
									exitOnClickOut={false}
									onConfirmationCallback={() => {
										console.log('Finish')
									}}
								>
									Terminar
								</LargeButtonModal>
                            )}
                            <span ref={scrollBottom} />
                        </div>
                    </div>
                </main>
                <ModalAction />
            </ModalProvider>
        </div>
    )
}

export default EmpathySympathyAntipathy2