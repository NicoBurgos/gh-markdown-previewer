import { useEffect } from 'react'
import { useState } from 'react'

export const useLightMode = () => {
	const [lightMode, setLightMode] = useState(false)

	const toggleMode = ({ lightMode }) => {
		setLightMode(!lightMode)
	}

	useEffect(() => {
		const container = document.querySelector('.container')
		if (lightMode) {
			container.classList.add('light-mode')
		} else {
			container.classList.remove('light-mode')
		}
	}, [lightMode])

	return {
		lightMode,
		toggleMode,
	}
}
