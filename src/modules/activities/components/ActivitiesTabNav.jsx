import { useEffect, useState } from 'react'
import ActivitiesTCC from '../../../assets/icons/ActivitiesTCC.svg?component'
import WeekPlan from '../../../assets/icons/WeekPlan.svg?component'
import PropTypes from 'prop-types'

const ActivitiesTabNav = ({ value, onChange, disableWeekPlan }) => {
	const [active, setActive] = useState(value)

	useEffect(() => setActive(value), [value])

	const toggleActive = (tab) => {
		if (active !== tab) {
			setActive(tab)
			onChange(tab)
		}
	}

	return (
		<div className='activitiesPage__tabNav'>
			<span
				className={active === 'activities' ? 'active' : ''}
				onClick={() => toggleActive('activities')}
				onKeyDown={() => toggleActive('activities')}
				tabIndex='0'
				role='button'
			>
				<ActivitiesTCC />
				Actividades
			</span>
			<span
				className={`${active === 'weekPlan' ? 'active' : ''}${
					disableWeekPlan ? 'disabled' : ''
				}`}
				onClick={() => toggleActive('weekPlan')}
				onKeyDown={() => toggleActive('weekPlan')}
				tabIndex='0'
				role='button'
			>
				<WeekPlan />
				Plan Semanal
			</span>
		</div>
	)
}

ActivitiesTabNav.propTypes = {
	value: PropTypes.oneOf(['activities', 'weekPlan']),
	onChange: PropTypes.func,
	disableWeekPlan: PropTypes.bool,
}

ActivitiesTabNav.defaultProps = {
	value: 'activities',
	onChange: () => {},
	disableWeekPlan: false,
}

export default ActivitiesTabNav
