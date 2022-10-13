import PropTypes from 'prop-types'
const ProgressBar = ({ completed, className }) => {
	return (
		<div className={`progressBar ${className}`}>
			<div className='progressBar__bar'>
				<div
					className='progressBar__progress'
					style={{ width: `${completed}%` }}
				/>
			</div>
			<span className='progressBar__text'>{completed}%</span>
		</div>
	)
}

ProgressBar.propTypes = {
	className: PropTypes.string,
	completed: PropTypes.number,
}

ProgressBar.defaultProps = {
	className: '',
	completed: 0,
}

export default ProgressBar
