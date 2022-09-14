import PropTypes from 'prop-types'
import logo from '@assets/images/logos/LogoInApp.png'

const TransparentLocalizationBar = ({ localization }) => {
	return (
		<div className='localizationBar localizationBar--transparent'>
			<img src={logo} alt='EmotionDive Logo' />
			<span>EmotionDive | {localization}</span>
		</div>
	)
}

TransparentLocalizationBar.propTypes = {
	localization: PropTypes.string,
}

TransparentLocalizationBar.defaultProps = {
	localization: 'Localization',
}

export default TransparentLocalizationBar
