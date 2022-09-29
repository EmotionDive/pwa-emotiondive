import PropTypes from 'prop-types'

const RadioOption = ({ value, name, defaultChecked, color }) => {
	return (
		<label>
			<input
				type='radio'
				value={value}
				name={name}
				defaultChecked={defaultChecked}
			/>
			<span
				className={`customRadio ${
					color === 'primary'
						? 'customRadio--primary'
						: color === 'secondary' && 'customRadio--secondary'
				}`}
			></span>
			<span>{value}</span>
		</label>
	)
}

RadioOption.propTypes = {
	value: PropTypes.string,
	name: PropTypes.string,
	defaultChecked: PropTypes.bool,
	color: PropTypes.oneOf(['neutral', 'primary', 'secondary']),
}

RadioOption.defaultProps = {
	value: 'Radio',
	color: 'neutral',
}
export default RadioOption
