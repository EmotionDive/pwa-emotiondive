import PropTypes from 'prop-types'
import React, { useState, useMemo, useEffect } from 'react'

const OptionButtonGroup = ({
	children,
	wrapWith,
	className,
	value,
	onChange,
}) => {
	const [currentValue, setCurrentValue] = useState(null)

	useEffect(() => {
		setCurrentValue(value)
	}, [value])

	const childs = useMemo(() => {
		const onClick = (value) => {
			setCurrentValue(value)
			onChange(value)
		}

		return React.Children.map(children, (child) => {
			if (React.isValidElement(child)) {
				if (child.props.value === currentValue) {
					const checked = true
					return React.cloneElement(child, {
						checked,
						onClick,
					})
				}
				return React.cloneElement(child, {
					onClick,
				})
			}
		})
	}, [children, currentValue, onChange])

	switch (wrapWith) {
		case 'div':
			return <div className={className}>{childs}</div>
		case 'span':
			return <span className={className}>{childs}</span>
		case 'section':
			return <section className={className}>{childs}</section>
		case 'main':
			return <main className={className}>{childs}</main>
		default:
			return <>{childs}</>
	}
}

OptionButtonGroup.propTypes = {
	children: (props, propName) => {
		let error
		const prop = props[propName]
		React.Children.forEach(prop, (child) => {
			if (child.type.name !== 'OptionButton')
				error = new Error(
					`<OptionButtonGroup> only accepts children of type <OptionButton>".`
				)
		})
		return error
	},
	wrapWith: PropTypes.oneOf(['none', 'div', 'span', 'section', 'main']),
	className: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
}

OptionButtonGroup.defaultProps = {
	wrapWith: 'none',
	className: '',
	value: null,
}
export default OptionButtonGroup
