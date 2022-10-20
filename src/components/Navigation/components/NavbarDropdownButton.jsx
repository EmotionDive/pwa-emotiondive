import PropTypes from 'prop-types'

const NavbarDropdownButton = ({
	label,
	iconSVG,
	selected,
	onClick,
	className,
}) => {
	return (
		<div
			className={`desktopFragmentNavBar__dropdown__button ${className} 
				${selected ? 'desktopFragmentNavBar__dropdown__button--selected' : ''}`}
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

NavbarDropdownButton.propTypes = {
	label: PropTypes.string,
	iconSVG: PropTypes.element.isRequired,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
	className: PropTypes.string,
}

NavbarDropdownButton.defaultProps = {
	label: '',
	selected: false,
	onClick: () => {},
	className: '',
}

export default NavbarDropdownButton
