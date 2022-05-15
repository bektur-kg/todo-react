import React from 'react'
import Header from '../../components/Header/Header'
import Todos from '../../components/Todos/Todos'
import cls from './Main.module.scss'

const Main = () => {
	return (
		<div>
			<Header />
			<Todos />
		</div>
	)
}

export default Main
