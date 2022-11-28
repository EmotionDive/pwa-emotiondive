const ReceivedMessage = (props) => {
	return (
		<div className='messageContainer receivedDisplay'>
			<div className='receivedMessage'>
				<p>{props.content}</p>
			</div>
		</div>
	)
}

export default ReceivedMessage
