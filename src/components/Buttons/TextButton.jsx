import PropTypes from 'prop-types'
import BackIcon from '../../assets/icons/Back.svg?component'

const TextButton = ({ children, withBack, onClick, className }) => {
	const handleOnClick = () => {
		setTimeout(onClick, 400)
	}

	return (
		<div
			className={`button__text ${className}`}
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
}

TextButton.defaultProps = {
	children: 'Button',
	className: '',
	withBack: false,
}

export default TextButton
