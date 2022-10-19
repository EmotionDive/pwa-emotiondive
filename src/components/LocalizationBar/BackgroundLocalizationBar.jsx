import PropTypes from 'prop-types'
import logo from '@assets/images/logos/LogoInApp.png'

const BackgroundLocalizationBar = ({ localization }) => {
	return (
		<header className='localizationBar localizationBar--background'>
			<img src={logo} alt='EmotionDive Logo' />
			<span>EmotionDive |&nbsp;</span>
			<span>{localization}</span>
		</header>
	)
}

BackgroundLocalizationBar.propTypes = {
	localization: PropTypes.string,
}

BackgroundLocalizationBar.defaultProps = {
	localization: 'Localization',
}

export default BackgroundLocalizationBar
