import React from 'react'
import PropTypes from 'prop-types'

const RadioOptionGroup = ({ label, children, name, value, onChange }) => {
	return (
		<div
			className='radioOptionGroup'
			onChange={(e) => onChange(e.target.value)}
		>
			<span>{label}</span>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					if (child.props.value === value) {
						const defaultChecked = true
						return React.cloneElement(child, { name, defaultChecked })
					}
					return React.cloneElement(child, { name })
				}
			})}
		</div>
	)
}

RadioOptionGroup.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	children: (props, propName) => {
		let error
		const prop = props[propName]
		React.Children.forEach(prop, (child) => {
			if (child.type.name !== 'RadioOption')
				error = new Error(
					`<RadioOptionGroup> only accepts children of type <RadioOption>".`
				)
		})
		return error
	},
}

RadioOptionGroup.defaultProps = {
	label: 'Label',
}

export default RadioOptionGroup
