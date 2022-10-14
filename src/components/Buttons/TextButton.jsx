import PropTypes from 'prop-types'
import BackIcon from '../../assets/icons/Back.svg?component'

const TextButton = ({ children, withBack, onClick, className, color }) => {
	const handleOnClick = () => {
		setTimeout(onClick, 400)
	}

	return (
		<div
			className={`button__text ${
				color === 'secondary' ? 'button__text--secondary' : ''
			} ${className}`}
			tabIndex='0'
			role='button'
			onClick={handleOnClick}
			onKeyDown={handleOnClick}
		>
			{withBack && <BackIcon />}
			<span>{children}</span>
		</div>
	)
}

TextButton.propTypes = {
	children: PropTypes.string,
	className: PropTypes.string,
	withBack: PropTypes.bool,
	onClick: PropTypes.func,
	color: PropTypes.oneOf(['primary', 'secondary']),
}

TextButton.defaultProps = {
	children: 'Button',
	className: '',
	withBack: false,
	color: 'primary',
}

export default TextButton
