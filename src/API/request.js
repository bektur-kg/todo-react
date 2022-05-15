import { API } from './api'

// POST============

export const createUser = (body) => {
	return API.createUser('api/user/', body)
}

export const createTodo = (body, userToken) => {
	return API.createTodo('api/todo/', body, userToken)
}

export const loginUser = (body) => {
	return API.loginUser('auth/token/login/', body)
}

export const logoutUser = (userToken) => {
	return API.logoutUser('auth/token/login/', userToken)
}

export const getAllTodos = (userToken) => {
	return API.getAllTodos('api/todo/', userToken)
}

export const getSingleTodo = (id, userToken) => {
	return API.getSingleTodo(`api/todo/${id}/`, userToken)
}

export const editTodo = (id, body, userToken) => {
	return API.editTodo(`api/todo/${id}/`, body, userToken)
}

export const deleteTodo = (id, userToken) => {
	return API.deleteTodo(`api/todo/${id}/`, userToken)
}
