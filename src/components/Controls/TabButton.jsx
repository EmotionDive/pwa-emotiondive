import PropTypes from 'prop-types'

const TabButton = ({ children, selected, onClick, disabled }) => {
	return (
		<button
			className={`tab__button ${selected ? 'tab__button--selected' : ''}`}
			onClick={(e) => {
				e.preventDefault()
				onClick(e)
			}}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

TabButton.propTypes = {
	children: PropTypes.string,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
}

TabButton.defaultProps = {
	children: 'Tab',
	selected: false,
	disabled: false,
	onClick: () => {},
}

export default TabButton
