import PropTypes from 'prop-types'
import React from 'react'

const ChartContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>
}

ChartContainer.propTypes = {
	className: PropTypes.string,
	children: (props, propName) => {
		let error
		const prop = props[propName]
		React.Children.forEach(prop, (child) => {
			if (child.type.name !== 'BarChart' && child.type.name !== 'ChartLabels')
				error = new Error(
					`<ChartContainer> only accepts children of type [<ChartLabels>, <BarChart>]".`
				)
		})
		return error
	},
}

ChartContainer.defaultProps = {
	className: '',
	children: null,
}

export default ChartContainer
