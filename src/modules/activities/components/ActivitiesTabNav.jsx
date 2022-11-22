import { useState } from 'react'
import ActivitiesTCC from '../../../assets/icons/ActivitiesTCC.svg?component'
import WeekPlan from '../../../assets/icons/WeekPlan.svg?component'
import PropTypes from 'prop-types'

const ActivitiesTabNav = ({ value, onChange }) => {
	const [active, setActive] = useState(value)

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
				className={active === 'weekPlan' ? 'active' : ''}
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
}

ActivitiesTabNav.defaultProps = {
	value: 'activities',
	onChange: () => {},
}

export default ActivitiesTabNav
