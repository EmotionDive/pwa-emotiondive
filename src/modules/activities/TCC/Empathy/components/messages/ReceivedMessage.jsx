const ReceivedMessage = (props) => {
	return (
		<div className='messageContainer receivedDisplay'>
			<p className='feedbackContainer__label'>{props.person}</p>
			<div className='receivedMessage'>
				<p>{props.content}</p>
			</div>
		</div>
	)
}

export default ReceivedMessage
