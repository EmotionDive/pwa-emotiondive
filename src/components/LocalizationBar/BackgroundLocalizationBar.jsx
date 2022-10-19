import PropTypes from 'prop-types'
import logo from '@assets/images/logos/LogoInApp.png'
import { DesktopFragmentNavBar } from '../Navigation'

const BackgroundLocalizationBar = ({ localization }) => {
	return (
		<header className='localizationBar localizationBar--background'>
			<div className='localizationBar--background__info'>
				<img src={logo} alt='EmotionDive Logo' />
				<span>EmotionDive |&nbsp;</span>
				<span>{localization}</span>
			</div>
			<DesktopFragmentNavBar />
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
