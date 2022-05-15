import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cls from './Auth.module.scss'
import { loginUser } from '../../API/request'

const Auth = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const authHandle = (e) => {
		e.preventDefault()
		if (username && password) {
			const body = {
				username,
				password,
			}
			loginUser(body).then((r) => {
				if (r.auth_token) {
					localStorage.setItem('userToken', r.auth_token)
					window.location.reload()
				}
			})
		}
	}

	return (
		<div className={cls.authContainer}>
			<form>
				<div className={cls.formHeader}>
					<h1>Authorization</h1>
				</div>
				<div className={cls.formBody}>
					<input
						value={username}
						type='text'
						placeholder='Username'
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						value={password}
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className={cls.formFooter}>
					<button onClick={(e) => authHandle(e)}>Login</button>
					<Link to='/register'>Create an account</Link>
				</div>
			</form>
		</div>
	)
}

export default Auth
