const SendMessage = (props) => {
	return (
		<div className='messageContainer sendDisplay'>
			<div className='sendMessage'>
				<p>{props.content}</p>
			</div>
		</div>
	)
}

export default SendMessage
