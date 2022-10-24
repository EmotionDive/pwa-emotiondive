import { Children, useState, isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types'

const TabContainer = ({ children, onChange, value, className }) => {
	const [selected, setSelected] = useState(value)

	const handleOnClick = (key) => {
		setSelected(key)
		onChange(key)
	}

	const newChildren = Children.map(children, (child, key) => {
		if (isValidElement(child)) {
			if (key === selected) {
				return cloneElement(child, {
					selected: true,
					onClick: () => handleOnClick(key),
				})
			}
			return cloneElement(child, { onClick: () => handleOnClick(key) })
		}
	})

	return <div className={`tab__container ${className}`}>{newChildren}</div>
}

TabContainer.propTypes = {
	children: (props, propName) => {
		let error
		const prop = props[propName]
		Children.forEach(prop, (child) => {
			if (child.type.name !== 'TabButton')
				error = new Error(
					`<TabContainer> only accepts children of type <TabButton>".`
				)
		})
		return error
	},
	onChange: PropTypes.func,
	value: PropTypes.number,
	className: PropTypes.string,
}

TabContainer.defaultProps = {
	value: 0,
	onChange: () => {},
	className: '',
}

export default TabContainer
