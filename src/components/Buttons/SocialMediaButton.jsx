import FacebookIcon from '../../assets/icons/Facebook.svg?component'
import GoogleIcon from '../../assets/icons/Google.svg?component'
import EmailIcon from '../../assets/icons/Email.svg?component'
import PropTypes from 'prop-types'

const SocialMediaButton = ({ social, actionType }) => {
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

	return (
		<button className='button button--socialMedia'>
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
}

SocialMediaButton.defaultProps = {
	social: 'Facebook',
	actionType: 'continue',
}

export default SocialMediaButton
