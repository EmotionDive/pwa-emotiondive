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
	onKeyDown,
	type,
	min,
	max,
	maxLength,
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
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				onChange={onChange}
				onKeyDown={onKeyDown}
				min={min}
				max={max}
				maxLength={maxLength}
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
	onKeyDown: PropTypes.func,
	type: PropTypes.oneOf(['text', 'number']),
	min: PropTypes.number,
	max: PropTypes.number,
	maxLength: PropTypes.number,
}

Textfield.defaultProps = {
	label: 'Label',
	placeholder: 'Input Text',
	disabled: false,
	error: '',
	value: undefined,
	defaultValue: undefined,
	onChange: () => {},
	onKeyDown: () => {},
	type: 'text',
	min: undefined,
	max: undefined,
	maxLength: undefined,
}

export default Textfield
