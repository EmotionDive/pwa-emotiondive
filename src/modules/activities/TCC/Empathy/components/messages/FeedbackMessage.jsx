const FeedbackMessage = (props) => {
	return (
		<div className='messageContainer sendDisplay'>
			<div className='feedbackContainer'>
				<p className='feedbackContainer__label'>
					Retroalimentación de la opci&oacute;n escogida:
				</p>
				<div className='feedbackMessage'>
					<p>{props.content}</p>
				</div>
			</div>
		</div>
	)
}

export default FeedbackMessage
