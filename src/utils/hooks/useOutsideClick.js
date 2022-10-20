import { useRef, useEffect } from 'react'

export const useOutsideClick = (callback) => {
	const ref = useRef()

	useEffect(() => {
		const handleClick = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				callback(event)
			}
		}

		document.addEventListener('click', handleClick, true)

		return () => {
			document.removeEventListener('click', handleClick, true)
		}
	}, [ref, callback])

	return ref
}
