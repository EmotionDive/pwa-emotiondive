import PropTypes from 'prop-types'

const Textfield = ({
	label,
	placeholder,
	disabled,
	error,
	innerRef,
	value,
	defaultValue,
	onChange,
}) => {
	return (
		<label
			className={`textfield ${error && 'textfield--error'}`}
			data-error={error}
		>
			<span>{label}</span>
			<input
				ref={innerRef}
				value={value}
				defaultValue={defaultValue}
				type='text'
				placeholder={placeholder}
				disabled={disabled}
				onChange={onChange}
			/>
		</label>
	)
}

Textfield.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	error: PropTypes.string,
	innerRef: PropTypes.any,
	value: PropTypes.string,
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
}

Textfield.defaultProps = {
	label: 'Label',
	placeholder: 'Input Text',
	disabled: false,
	error: '',
	value: undefined,
	defaultValue: undefined,
	onChange: () => {},
}

export default Textfield
