import PropTypes from 'prop-types'

const ButtonBarBotton = ({ label, iconSVG, selected, onClick }) => {
	return (
		<div
			className={`bottomBar__option ${
				selected ? 'bottomBar__option--selected' : ''
			}`}
			tabIndex='0'
			role='button'
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === 'Enter') onClick()
			}}
		>
			<div>{iconSVG}</div>
			<span>{label}</span>
		</div>
	)
}

ButtonBarBotton.propTypes = {
	label: PropTypes.string.isRequired,
	iconSVG: PropTypes.element.isRequired,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
}

ButtonBarBotton.defaultProps = {
	selected: false,
	onClick: () => {},
}

export default ButtonBarBotton
