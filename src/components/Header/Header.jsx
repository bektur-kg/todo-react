import React, { useState } from 'react'
import cls from './Header.module.scss'
import { GoThreeBars } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Header = () => {
	const [toggleBurger, setToggleBurger] = useState(false)
	const logoutHandler =  (e) => {
		e.preventDefault()
		localStorage.clear()
		window.location.reload()
	}

	return (
		<>
			<div className={cls.navbarContainer}>
				<nav className={cls.navbar}>
					<div className={cls.navbarHeader}>
						<h1>Todo</h1>
					</div>
					<div className={cls.navbarBurger}>
						<GoThreeBars
							className={cls.burger}
							onClick={() => setToggleBurger(!toggleBurger)}
						/>
						<div
							className={cls.modal}
							style={toggleBurger ? { opacity: 1 } : { opacity: 0 }}
						>
							<Link to='/admin'>Admin</Link>
							<Link to='/auth'
									onClick={logoutHandler}
							>Logout</Link>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}

export default Header
