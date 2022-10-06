import React from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {
	const userData = useSelector(state => state.user)
	console.log("data : ", userData)

	return (
		<div>
			<h1>{userData.full_name}</h1>
			<h1>{userData.email_addr}</h1>

			<h1>Dashboard</h1>

		</div>
	)
}

export default Dashboard