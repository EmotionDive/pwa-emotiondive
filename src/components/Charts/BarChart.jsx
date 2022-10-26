import PropTypes from 'prop-types'

const BarChart = ({ max, step, series, seriesColors }) => {
	const yLabels = []

	for (let i = 0; i <= max; i += step) {
		yLabels.push(<span key={i}>{i}</span>)
	}

	return (
		<div className='barChart'>
			<span className='barChart__yAxis' />
			<span className='barChart__xAxis' />
			<div className='barChart__chart'>
				{series.map((value, key) => (
					<span
						key={key}
						style={{
							width: `calc(70% / ${series.length})`,
							height: `${value}%`,
							backgroundColor: `${seriesColors[key]}`,
						}}
					/>
				))}
			</div>
			<div className='barChart__yLabels'>{yLabels}</div>
			<div className='barChart__xLabels'>
				{seriesColors.map((value, key) => (
					<span
						key={key}
						style={{
							width: `calc(35% / ${series.length})`,
							backgroundColor: `${value}`,
						}}
					/>
				))}
			</div>
		</div>
	)
}

BarChart.propTypes = {
	max: PropTypes.number,
	step: PropTypes.number,
	series: PropTypes.arrayOf(PropTypes.number),
	seriesColors: PropTypes.arrayOf(PropTypes.string),
}

BarChart.defaultProps = {
	max: 100,
	step: 20,
	series: [],
	seriesColors: [],
}

export default BarChart
