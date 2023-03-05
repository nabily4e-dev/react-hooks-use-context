import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme'

export default function DarkModeToggle() {
	const { theme, setTheme } = useContext(ThemeContext)
	function handleToggleTheme(e) {
		setTheme(e.target.checked ? 'dark' : 'light')
	}
	return (
		<label>
			Dark Mode
			<input
				type='checkbox'
				checked={theme === 'dark'}
				onChange={handleToggleTheme}
			/>
		</label>
	)
}
