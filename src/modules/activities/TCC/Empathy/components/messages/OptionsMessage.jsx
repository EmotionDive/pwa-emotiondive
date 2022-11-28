const OptionsMessage = (props) => {
	return (
		<div className='optionsContainer'>
			<p className='optionsContainer__label'>Seleccióna una opci&oacute;n</p>
			<div className='messageContainer optionDisplay'>
				{props.content.map((obj, index) => (
					<div key={index} className='optionMessage'>
						<p>{obj.answer}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default OptionsMessage
