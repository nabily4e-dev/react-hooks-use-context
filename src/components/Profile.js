import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { ThemeContext } from '../context/theme'
import Interests from './Interests'

export default function Profile() {
	const { user } = useContext(UserContext)
	const { theme } = useContext(ThemeContext)
	console.log(user)
	if (!user) return <h2>Please Login To View Profile</h2>
	return (
		<div>
			<h2>{user.name}'s Profile</h2>
			<Interests
				interests={user.interests}
				theme={theme}
			/>
		</div>
	)
}
