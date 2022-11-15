import { createContext, useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const ModalContext = createContext(null)

export const ModalProvider = ({ children }) => {
	const [open, setOpen] = useState(false)
	const modalTitle = useRef('title')
	const modalInfo = useRef('info')
	const modalVariant = useRef('actions')
	const modalButtonLabels = useRef(['Button'])
	const modalOnConfirmationCallback = useRef(() => {})
	const modalExitOnClickOut = useRef(true)

	return (
		<ModalContext.Provider
			value={{
				modalTitle,
				modalInfo,
				modalVariant,
				modalButtonLabels,
				modalOnConfirmationCallback,
				modalExitOnClickOut,
				open,
				setOpen,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

ModalProvider.propTypes = {
	children: PropTypes.any,
}

export function useModalAction() {
	const {
		modalTitle,
		modalInfo,
		modalVariant,
		modalButtonLabels,
		modalOnConfirmationCallback,
		modalExitOnClickOut,
		open,
		setOpen,
	} = useContext(ModalContext)

	const operateModal = (
		title,
		info,
		variant,
		buttonLabels,
		onConfirmationCallback,
		exitOnClickOut = true
	) => {
		modalTitle.current = title
		modalInfo.current = info
		modalVariant.current = variant
		modalButtonLabels.current = buttonLabels
		modalOnConfirmationCallback.current = onConfirmationCallback
		modalExitOnClickOut.current = exitOnClickOut
		setOpen(true)
	}

	return {
		open,
		setOpen,
		operateModal,
		title: modalTitle.current,
		info: modalInfo.current,
		variant: modalVariant.current,
		buttonLabels: modalButtonLabels.current,
		onConfirmationCallback: modalOnConfirmationCallback.current,
		exitOnClickOut: modalExitOnClickOut.current,
	}
}
