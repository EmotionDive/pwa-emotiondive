import allDone from '../../assets/images/pictures/WorkInProgress.png'

const WorkInProgress = () => {
	return (
		<div className='theEnd'>
			<h1 className='heading--big'>¡Oh oh! aún estamos construyendo.</h1>
			<img src={allDone} alt='EndEmotionDive' />
			<span className='systemText__instruction'>
				Lamentamos los inconvenientes pero este apartado sigue en construcción.
				(Puede que más tarde se encuentre disponible)
			</span>
			<span className='text--small'>
				Te agradecemos por ser participe de esta Beta de <b>EmotionDive</b>.
			</span>
		</div>
	)
}

export default WorkInProgress
