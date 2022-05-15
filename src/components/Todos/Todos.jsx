import React, { useEffect, useState } from 'react'
import cls from './Todos.module.scss'
import { getAllTodos } from '../../API/request'
import Card from '../Cards/Card'

const Todos = () => {
	const USER_TOKEN = localStorage.getItem('userToken')
	const [todoBase, setTodoBase] = useState(null)
	const [monitoring, setMonitoring] = useState('')


	useEffect(() => {
		getAllTodos(USER_TOKEN).then((r) => {
			console.log(r)
			setTodoBase(r)
		})
	}, [monitoring, USER_TOKEN])

	if (todoBase === null)
		return (
			<div className={cls.loadingContainer}>
				<div className={cls['lds-ellipsis']}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		)
	if (todoBase?.length === 0) return (
		<div className={cls.empty}>
			<h1>No Todos Yet</h1>
		</div>
	)
	return (
		<div className={cls.todosContainer}>
			{todoBase.map((todo) => (
				<Card
					key={todo.id}
					title={todo.title}
					id={todo.id}
					date={todo.date}
					desc={todo.description}
					setMonitoring={setMonitoring}
				/>
			))}
		</div>
	)
}

export default Todos
