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
	disabled,
	type,
	color,
}) => {
	const { operateModal } = useModalAction()

	return (
		<LargeButton
			onClick={(e) => {
				operateModal(
					title,
					info,
					variant,
					buttonLabels,
					onConfirmationCallback,
					exitOnClickOut
				)
			}}
			disabled={disabled}
			type={type}
			color={color}
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
	disabled: PropTypes.bool,
	color: PropTypes.oneOf(['primary', 'secondary']),
	type: PropTypes.oneOf(['normal', 'outlined', 'outlined-lighter']),
}

LargeButtonModal.defaultProps = {
	children: 'Button',
	title: 'Title',
	info: 'Modal info',
	variant: 'confirmation',
	buttonLabels: ['Ok'],
	onConfirmationCallback: () => {},
	exitOnClickOut: true,
	disabled: false,
	type: 'normal',
	color: 'primary',
}

export default LargeButtonModal
