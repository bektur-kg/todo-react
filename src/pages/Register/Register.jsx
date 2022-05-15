import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cls from './Register.module.scss'
import { createUser } from '../../API/request'

const Register = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	let navigate = useNavigate('')

	const registerHandler = (e) => {
		e.preventDefault()
		if (username && email && password) {
			console.log('works')
			const body = {
				username,
				email,
				password,
			}
			createUser(body).then((res) => {
				console.log(res)
				if (res.id) {
					localStorage.setItem('userId', res.id)
					localStorage.setItem('userEmail', res.email)
					localStorage.setItem('userPassword', res.password)
					localStorage.setItem('userUsername', res.username)
					navigate('/auth')
				}
			})
		}
	}

	return (
		<div className={cls.authContainer}>
			<form>
				<div className={cls.formHeader}>
					<h1>Creating an account</h1>
				</div>
				<div className={cls.formBody}>
					<input
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder='Username'
					/>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className={cls.formFooter}>
					<button onClick={(e) => registerHandler(e)}>Create</button>
					<Link to='/auth'>Already have an account?</Link>
				</div>
			</form>
		</div>
	)
}

export default Register
