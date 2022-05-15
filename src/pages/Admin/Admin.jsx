import React, {useState} from 'react'
import cls from './Admin.module.scss'
import {IoIosArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {createTodo} from "../../API/request";


const Admin = () => {
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [date, setDate] = useState('')
	const [validate, setValidate] = useState(true)

	const USER_TOKEN = localStorage.getItem('userToken')
	const USER_ID = localStorage.getItem('userId')
	let navigate = useNavigate()
	const resetInputValues = () => {
		setTitle('')
		setDate('')
		setDesc('')
	}
	const createTodoHandler = (e) => {
		e.preventDefault()
		if (title && desc && date) {
			setValidate(true)
			const body = {
				title,
				description: desc,
				date,
				user: USER_ID
			}
			createTodo(body, USER_TOKEN).then(resetInputValues)
		} else {
			setValidate(false)
		}
	}

	return (
		<div className={cls.formContainer}>
			<IoIosArrowBack className={cls.backButton}
								 onClick={() => navigate('/')}
			/>
			<span className={cls.errorRes}>
				{!validate ? 'Fill All Inputs *': ''}
			</span>
			<form>
				<div className={cls.formHeader}>
					<h3>Admin Panel</h3>
				</div>
				<div className={cls.formBody}>
					<input
						type='text'
						value={title}
						name='title'
						onChange={(e) => setTitle(e.target.value)}
						placeholder=' Title...'
					/>
					<input
						type='text'
						value={desc}
						name='descprtion'
						onChange={(e) => setDesc(e.target.value)}
						placeholder=' Description...'
					/>
					<input
						type='date'
						value={date}
						name='date'
						onChange={(e) => setDate(e.target.value)}
						placeholder=' Date...'
					/>
				</div>
				<div className={cls.formFooter}>
					<button onClick={(e) => createTodoHandler(e)}>Add</button>
				</div>
			</form>
		</div>
	)
}

export default Admin
