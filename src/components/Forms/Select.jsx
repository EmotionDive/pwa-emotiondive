import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ label, children }) => {
	return (
		<label className='select'>
			<span>{label}</span>
			<select>{children}</select>
		</label>
	)
}

Select.propTypes = {
	label: PropTypes.string,
	children: (props, propName) => {
		let error
		const prop = props[propName]
		React.Children.forEach(prop, (child) => {
			if (child.type !== 'option') {
				error = new Error(`<Select> only accepts children of type <option>".`)
			}
		})
		return error
	},
}

Select.defaultProps = {
	label: 'Label',
}

export default Select
