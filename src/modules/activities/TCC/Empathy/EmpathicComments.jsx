import { useState } from 'react'
import {
    LargeButton
} from '../../../../components/Buttons'
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	ModalAction,
	ModalProvider,
	LargeButtonModal,
} from '../../../../components/Modal'
import { TextArea } from '../../../../components/Forms'
import data from './data/EmpathicCommentsData.json'
import SocialMediaPost from './components/SocialMediaPost'

const EmpathicComments = () => {
    const [currentPost, setCurrentPost] = useState(0)
    const [answer, setAnswer] = useState('')
    const [evaluation, setEvaluation] = useState(false)

    const handleGrade = () => {
        setEvaluation(true)
    }

    const handleNext = () => {
        setCurrentPost((prev) => (prev+1))
        setEvaluation(false)
        setAnswer('')
    }

    return(
        <div className='EmpathyActivity'>
            <ModalProvider>
                <ActivitiesLocalizationBar
                    variant='Empathy'
                    title={data.title}
                />
                <main className='EmpathicCommentsActivity'>
                    <div className='posts'> 
                        <span className='instruction'>
                            {data.instruction}
                        </span>
                        <span className='posts__title'>
                            {data.posts[currentPost].title}
                        </span>
                        <strong>
                            <p className='posts__label'>
                                Post publicado en una red social:
                            </p>
                        </strong>
                        <SocialMediaPost 
                            publicname={data.posts[currentPost].post_user_info.public_name}
                            username={data.posts[currentPost].post_user_info.username}
                            content={data.posts[currentPost].post_content}
                            comments={data.posts[currentPost].post_user_info.reactions_numbers[0]}
                            retweets={data.posts[currentPost].post_user_info.reactions_numbers[1]}
                            likes={data.posts[currentPost].post_user_info.reactions_numbers[2]}
                        />
                        <strong>
                            <p className='posts__label'>
                                Comentario recibido:
                            </p>
                        </strong>
                        <SocialMediaPost 
                            publicname={data.posts[currentPost].comment_user_info.public_name}
                            username={data.posts[currentPost].comment_user_info.username}
                            content={data.posts[currentPost].comment_content}
                            comments={data.posts[currentPost].comment_user_info.reactions_numbers[0]}
                            retweets={data.posts[currentPost].comment_user_info.reactions_numbers[1]}
                            likes={data.posts[currentPost].comment_user_info.reactions_numbers[2]}
                        />
                        <div className='posts__label'>
                            <TextArea
                                label={'¿Cómo reescribirias el comentario anterior de forma que fuera empatica?'}
                                placeholder='Redacta un comentario empatico...'
                                rows={4}
                                value={answer}
							    onChange={(e) => setAnswer(e.target.value)}
                            />
                        </div>
                        {!evaluation ? null : (
                            <div className='posts__bottom'>
                                <strong>
                                    <p className='posts__label'>
                                        Ahora te presentamos un comentario empatico para puedas compararlo con el tuyo:
                                    </p>
                                </strong>
                                <SocialMediaPost 
                                    publicname={data.posts[currentPost].feedback_user_info.public_name}
                                    username={data.posts[currentPost].feedback_user_info.username}
                                    content={data.posts[currentPost].comment_feedback}
                                    comments={data.posts[currentPost].feedback_user_info.reactions_numbers[0]}
                                    retweets={data.posts[currentPost].feedback_user_info.reactions_numbers[1]}
                                    likes={data.posts[currentPost].feedback_user_info.reactions_numbers[2]}
                                />
                            </div>
                        )}
                        {!evaluation ? (
                            <LargeButton
                                color='secondary'
                                disabled={answer === ''}
                                onClick={handleGrade}
                            >
                                Calificar
                            </LargeButton>
                        ) : currentPost !== data.posts.length - 1 ? (
                            <LargeButton color='secondary' onClick={handleNext}>
                                Siguiente
                            </LargeButton>
                                
                        ) : (
                            <LargeButtonModal
                                title={'¡Terminaste de Aprender!'}
                                info={
                                    'Terminaste de reescribir los comentarios de las redes sociales, esperamos que esto te haya ayudado a tener un comportamiento más empático en linea!'
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
                    </div>
                </main>
                <ModalAction />
            </ModalProvider>
        </div>
    )
}

export default EmpathicComments