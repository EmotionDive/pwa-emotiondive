import FacebookIcon from '../../assets/icons/Facebook.svg?component'
import GoogleIcon from '../../assets/icons/Google.svg?component'
import EmailIcon from '../../assets/icons/Email.svg?component'
import PropTypes from 'prop-types'

const SocialMediaButton = ({ social, actionType, onClick }) => {
	const renderIcon = (social) => {
		switch (social) {
			case 'Email':
				return <EmailIcon />
			case 'Google':
				return <GoogleIcon />
			default:
				return <FacebookIcon />
		}
	}

	const handleOnClick = () => {
		setTimeout(onClick, 400)
	}

	return (
		<button className='button button--socialMedia' onClick={handleOnClick}>
			{renderIcon(social)}
			<span>
				{actionType === 'register' ? 'Registrar con' : 'Continuar con'} {social}
			</span>
		</button>
	)
}

SocialMediaButton.propTypes = {
	social: PropTypes.oneOf(['Facebook', 'Email', 'Google']),
	actionType: PropTypes.oneOf(['continue', 'register']),
	onClick: PropTypes.func,
}

SocialMediaButton.defaultProps = {
	social: 'Facebook',
	actionType: 'continue',
}

export default SocialMediaButton
