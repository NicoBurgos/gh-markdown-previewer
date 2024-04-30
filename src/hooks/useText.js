import { useState } from 'react'
import { initialData } from '../data/data'

export const useText = () => {
	const [text, setText] = useState(initialData)
	const handleChangeText = (e) => {
		setText(e.target.value)
	}
	return { text, handleChangeText }
}
