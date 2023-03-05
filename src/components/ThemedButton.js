import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme'

export default function ThemedButton({ ...props }) {
	const { theme } = useContext(ThemeContext)
	return (
		<button
			className={theme}
			{...props}
		/>
	)
}
