import React, { useState } from 'react'

export const ThemeContext = React.createContext()

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('dark')
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
