const SendMessage = (props) => {
	return (
		<div className='messageContainer sendDisplay'>
			<p className='feedbackContainer__label'>Me:</p>
			<div className='sendMessage'>
				<p>{props.content}</p>
			</div>
		</div>
	)
}

export default SendMessage
