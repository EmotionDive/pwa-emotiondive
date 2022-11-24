import { useModalAction } from '.'
import { LargeButton } from '../Buttons'
import PropTypes from 'prop-types'

const LargeButtonModal = ({
	children,
	title,
	info,
	variant,
	buttonLabels,
	onConfirmationCallback,
	exitOnClickOut,
}) => {
	const { operateModal } = useModalAction()

	return (
		<LargeButton
			onClick={() =>
				operateModal(
					title,
					info,
					variant,
					buttonLabels,
					onConfirmationCallback,
					exitOnClickOut
				)
			}
		>
			{children}
		</LargeButton>
	)
}

LargeButtonModal.propTypes = {
	children: PropTypes.string,
	title: PropTypes.string,
	info: PropTypes.string,
	variant: PropTypes.oneOf(['actions', 'confirmation']),
	buttonLabels: PropTypes.arrayOf(PropTypes.string),
	onConfirmationCallback: PropTypes.func,
	exitOnClickOut: PropTypes.bool,
}

LargeButtonModal.defaultProps = {
	children: 'Button',
	title: 'Title',
	info: 'Modal info',
	variant: 'confirmation',
	buttonLabels: ['Ok'],
	onConfirmationCallback: () => {},
	exitOnClickOut: true,
}

export default LargeButtonModal
