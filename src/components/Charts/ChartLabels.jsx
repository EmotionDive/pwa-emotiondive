import PropTypes from 'prop-types'

const ChartLabels = ({ seriesLabels, seriesColors, className }) => {
	return (
		<div className={`chartLabels ${className}`}>
			{seriesLabels.map((value, key) => (
				<div key={key}>
					{value} <span style={{ backgroundColor: seriesColors[key] }} />
				</div>
			))}
		</div>
	)
}

ChartLabels.propTypes = {
	seriesLabels: PropTypes.arrayOf(PropTypes.string),
	seriesColors: PropTypes.arrayOf(PropTypes.string),
	className: PropTypes.string,
}

ChartLabels.defaultProps = {
	seriesLabels: [],
	seriesColors: [],
	className: '',
}
export default ChartLabels
