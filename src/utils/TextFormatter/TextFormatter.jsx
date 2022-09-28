import PropTypes from 'prop-types'
import reactStringReplace from 'react-string-replace'

function TextFormatter({ wrapWith, children = '' }) {
	//For bold text
	const content = reactStringReplace(
		children,
		/\*\*(.*?)\*\*/gm,
		(match, i) => <b key={i}>{match}</b>
	)

	if (wrapWith === 'p') return <p>{content}</p>
	if (wrapWith === 'li') return <li>{content}</li>

	return <div>{content}</div>
}

TextFormatter.defaultProps = {
	wrapWith: 'div',
	children: '',
}

TextFormatter.propTypes = {
	wrapWith: PropTypes.oneOf(['p', 'li', 'div']),
	children: PropTypes.string,
}

export default TextFormatter
