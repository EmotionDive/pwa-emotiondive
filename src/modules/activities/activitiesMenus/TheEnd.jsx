import allDone from '../../../assets/images/pictures/All-done.png'
import useUser from '../../../data/hooks/useUser'

const TheEnd = () => {
	const { userData } = useUser()
	return (
		<div className='theEnd'>
			<h1 className='heading--big'>
				¡Felicidades {userData.nombre}, terminaste todo EmotionDive!
			</h1>
			<img src={allDone} alt='EndEmotionDive' />
			<span className='systemText__instruction'>
				Te agradecemos por la confianza que brindaste en nosotros y te animamos
				a continuar mejorando tu <b>Inteligencia Emocional</b> poniendo en
				práctica todo lo aprendido.
			</span>
			<span className='text--small'>
				¡Sigue dando lo mejor de tí y en <b>EmotionDive</b> te deseamos una
				increíble vida llena de Inteligencia Emocional!
			</span>
		</div>
	)
}

export default TheEnd
