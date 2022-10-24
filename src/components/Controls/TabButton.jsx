import PropTypes from 'prop-types'

const TabButton = ({ children, selected, onClick }) => {
	return (
		<button
			className={`tab__button ${selected ? 'tab__button--selected' : ''}`}
			onClick={(e) => {
				e.preventDefault()
				onClick(e)
			}}
		>
			{children}
		</button>
	)
}

TabButton.propTypes = {
	children: PropTypes.string,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
}

TabButton.defaultProps = {
	children: 'Tab',
	selected: false,
	onClick: () => {},
}

export default TabButton
