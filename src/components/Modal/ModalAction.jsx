import React, { useState } from 'react'
import { useOutsideClick } from '../../utils/hooks/useOutsideClick'
import { useModalAction } from './ModalContext'

const ModalAction = () => {
	const {
		open,
		setOpen,
		title,
		info,
		variant,
		buttonLabels,
		onConfirmationCallback,
		exitOnClickOut,
	} = useModalAction()

	const [exit, onExit] = useState(false)

	const close = () => {
		onExit(true)
		setTimeout(() => {
			setOpen(false)
			onExit(false)
		}, 400)
	}

	const handleConfirmation = () => {
		close()
		onConfirmationCallback()
	}

	const ref = useOutsideClick(() => {
		if (exitOnClickOut) close()
	})

	if (open)
		return (
			<div className={`modal__background ${exit ? 'modal--exit' : ''}`}>
				<div className='modal__frame' ref={ref}>
					<span className='systemText__instruction'>{title}</span>
					<p className='justifyText'>{info}</p>
					{variant === 'actions' ? (
						<div className='modal__buttons'>
							<button className='button' onClick={handleConfirmation}>
								{buttonLabels[0]}
							</button>
							<button
								className='button'
								onClick={() => {
									close()
								}}
							>
								{buttonLabels[1]}
							</button>
						</div>
					) : (
						<button className='button modal__cta' onClick={handleConfirmation}>
							{buttonLabels[0]}
						</button>
					)}
				</div>
			</div>
		)
	else null
}

export default ModalAction
