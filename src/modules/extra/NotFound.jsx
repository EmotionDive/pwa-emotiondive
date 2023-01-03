import { useNavigate } from 'react-router-dom'
import allDone from '../../assets/images/pictures/Lost.png'
import { LargeButton } from '../../components/Buttons'

const NotFound = () => {
	const navigate = useNavigate()
	return (
		<div className='theEnd' style={{ marginTop: '40px' }}>
			<h1 className='heading--big'>¡Oh, parece que te has perdido!</h1>
			<img src={allDone} alt='EndEmotionDive' />
			<span className='systemText__instruction'>
				La ruta a la que tratas de acceder no existe. Sin embargo, no te
				preocupes, por aquí puedes regresar a <b>EmotionDive</b>.
			</span>
			<LargeButton onClick={() => navigate('/', { replace: true })}>
				Regresar a EmotionDive
			</LargeButton>
		</div>
	)
}

export default NotFound
