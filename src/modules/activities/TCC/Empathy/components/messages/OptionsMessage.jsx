const OptionsMessage = (props) => {
	const handleOption = (index) => {
		console.log(index)
	}

	return (
		<div className='optionsContainer'>
			<p className='optionsContainer__label'>
				Seleccióna una opci&oacute;n para contestar:
			</p>
			<div className='messageContainer optionDisplay'>
				{props.content.map((obj, index) => (
					<div
						key={index}
						className='optionMessage'
						onClick={() => props.handleNewMessage(obj.feedback, obj.answer)}
					>
						<p>{obj.answer}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default OptionsMessage
