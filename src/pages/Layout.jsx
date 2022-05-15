import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Admin from './Admin/Admin'
import Auth from './Auth/Auth'
import Main from './Main/Main'
import Register from './Register/Register'

const Layout = () => {
	const USER_TOKEN = localStorage.getItem('userToken')

	return (
		<div>
			<Routes>
				{USER_TOKEN && (
					<>
						<Route path='/' element={<Main />} />
						<Route path='/admin' element={<Admin />} />
					</>
				)}
				{!USER_TOKEN && (
					<>
						<Route path='/auth' element={<Auth />} />
						<Route path='/register' element={<Register />} />
					</>
				)}
				<Route
					path='*'
					element={<Navigate to={USER_TOKEN ? '/' : '/auth'} />}
				/>
			</Routes>
		</div>
	)
}

export default Layout
