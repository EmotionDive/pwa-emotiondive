import PropTypes from 'prop-types'

const NavBarButton = ({ label, iconSVG, selected, onClick, className }) => {
	return (
		<div
			className={`desktopFragmentNavBar__option ${
				selected ? 'desktopFragmentNavBar__option--selected' : ''
			} ${className}`}
			tabIndex='0'
			role='button'
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === 'Enter') onClick()
			}}
		>
			{iconSVG}
			<span>{label}</span>
		</div>
	)
}

NavBarButton.propTypes = {
	label: PropTypes.string,
	iconSVG: PropTypes.element.isRequired,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
	className: PropTypes.string,
}

NavBarButton.defaultProps = {
	label: '',
	selected: false,
	onClick: () => {},
	className: '',
}

export default NavBarButton
