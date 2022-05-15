import React, {useState} from 'react'
import cls from './Card.module.scss'
import {AiFillDelete} from 'react-icons/ai'
import {BiEditAlt} from 'react-icons/bi'
import {deleteTodo, editTodo, getSingleTodo} from '../../API/request'

const Card = ({title, id, date, desc, setMonitoring}) => {
	const USER_TOKEN = localStorage.getItem('userToken')
	const [edit, setEdit] = useState(false)
	const [newTitle, setNewTitle] = useState('')
	const [newContent, setNewContent] = useState('')

	const resetAllInputs = () => {
		setNewTitle('')
		setNewContent('')
	}

	const editTodoHandler = (e) => {
		e.preventDefault()
		getSingleTodo(id, USER_TOKEN).then(r => {
			console.log(r)
			const body = {
				title: newTitle || r.title,
				description: newContent || r.description
			}
			editTodo(id, body, USER_TOKEN).then(r => {
				console.log(r)
				setMonitoring(Date.now())
				setEdit(false)
				resetAllInputs()
			})
		})
	}

	return (
		<div className={cls.card}>
			<div className={cls.cardHeader}>
				<h3>{title}</h3>
				<span>{date}</span>
			</div>
			<div className={cls.cardBody}>
				{!edit ? (
						<p>{desc}</p>
					)
					:
					(
						<>
							<input
								type="text"
								className={cls.newTitleInput}
								placeholder='New Title'
								value={newTitle}
								onChange={e => setNewTitle(e.target.value)}
							/>
							<textarea
								className={cls.newContentInput}
								placeholder='New Content'
								value={newContent}
								onChange={e => setNewContent(e.target.value)}
							></textarea>
						</>
					)
				}
			</div>
			<div className={cls.cardFooter}>
				{
					!edit ? (
						<>
							<AiFillDelete
								className={cls.delete}
								onClick={() => {
									deleteTodo(id, USER_TOKEN).then(() => {
										setMonitoring(Date.now())
									})
								}}
							/>
							<BiEditAlt
								className={cls.edit}
								onClick={() => setEdit(true)}
							/>
						</>
					) : (
						<button className={cls.changeEditing}
								  onClick={e => editTodoHandler(e)}
						>Change</button>
					)
				}
			</div>
		</div>
	)
}

export default Card
