import PropTypes from 'prop-types'
import { useRef } from 'react'

const TextArea = ({
	label,
	value,
	defaultValue,
	placeholder,
	disabled,
	onChange,
	maxLength,
	innerRef,
	error,
	rows,
	cols,
}) => {
	const ref = useRef(innerRef)

	return (
		<label
			className={`textarea ${error && 'textfield--error'}`}
			data-error={error}
		>
			<span>{label}</span>
			<textarea
				ref={ref}
				value={value}
				defaultValue={defaultValue}
				placeholder={placeholder}
				disabled={disabled}
				onChange={onChange}
				maxLength={maxLength}
				rows={rows}
				cols={cols}
				onInput={() => {
					ref.current.style.height = ''
					ref.current.style.height = ref.current.scrollHeight + 'px'
				}}
			/>
		</label>
	)
}

TextArea.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	error: PropTypes.string,
	innerRef: PropTypes.any,
	value: PropTypes.string,
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	maxLength: PropTypes.number,
	rows: PropTypes.number,
	cols: PropTypes.number,
}

TextArea.defaultProps = {
	label: 'Label',
	placeholder: 'Input Text Area',
	disabled: false,
	error: '',
	value: undefined,
	defaultValue: undefined,
	onChange: () => {},
	maxLength: undefined,
	innerRef: null,
	rows: undefined,
	cols: undefined,
}

export default TextArea
