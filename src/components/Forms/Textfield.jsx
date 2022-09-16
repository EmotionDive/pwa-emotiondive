import PropTypes from 'prop-types'

const Textfield = ({ label, placeholder, disabled, error }) => {
	return (
		<label
			className={`textfield ${error && 'textfield--error'}`}
			data-error={error}
		>
			<span>{label}</span>
			<input type='text' placeholder={placeholder} disabled={disabled} />
		</label>
	)
}

Textfield.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	error: PropTypes.string,
}

Textfield.defaultProps = {
	label: 'Label',
	placeholder: 'Input Text',
	disabled: false,
	error: '',
}

export default Textfield
