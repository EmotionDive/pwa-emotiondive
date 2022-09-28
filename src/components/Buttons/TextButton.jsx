import PropTypes from 'prop-types'
import BackIcon from '../../assets/icons/Back.svg?component'

const TextButton = ({ children, withBack, onClick }) => {
	const handleOnClick = () => {
		setTimeout(onClick, 400)
	}

	return (
		<div
			className='button__text'
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
	withBack: PropTypes.bool,
	onClick: PropTypes.func,
}

TextButton.defaultProps = {
	children: 'Button',
	withBack: false,
}

export default TextButton
