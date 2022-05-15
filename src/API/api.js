const BASE_URL = 'https://nuranov29.pythonanywhere.com'

export const API = {
	// POST
	createUser: (route, body) => {
		return fetch(`${BASE_URL}/${route}`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(body),
		}).then((r) => r.json())
	},
	createTodo: (route, body, userToken) => {
		return fetch(`${BASE_URL}/${route}`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Token ${userToken}`,
			},
			body: JSON.stringify(body),
		}).then((r) => r.json())
	},
	loginUser: (route, body) => {
		return fetch(`${BASE_URL}/${route}`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(body),
		}).then((r) => r.json())
	},
	logoutUser: (route, userToken) => {
		return fetch(`${BASE_URL}/${route}`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Token ${userToken}`,
			},
		}).then((r) => r.json())
	},

	// GET

	getAllTodos: (route, userToken) => {
		return fetch(`${BASE_URL}/${route}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Token ${userToken}`,
			},
		}).then((r) => r.json())
	},

	getSingleTodo: (route, userToken) => {
		return fetch(`${BASE_URL}/${route}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Token ${userToken}`,
			},
		}).then((r) => r.json())
	},

	// PATCH

	editTodo: (route, body, userToken) => {
		return fetch(`${BASE_URL}/${route}`, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Token ${userToken}`,
			},
			body: JSON.stringify(body),
		}).then((r) => r.json())
	},

	// DELETE

	deleteTodo: (route, userToken) => {
		return fetch(`${BASE_URL}/${route}`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Token ${userToken}`,
			},
		})
	},
}

// post: (route, body, userToken) => {
// 	return fetch(`${BASE_URL}/${route}`, {
// 		method: 'POST',
// 		body: JSON.stringify(body),
// 		headers: requestsHeaders(userToken),
// 	}).then((r) => r.json())
// },
// get: (route, userToken) => {
// 	return fetch(`${BASE_URL}/${route}`, {
// 		method: 'GET',
// 		headers: requestsHeaders(userToken),
// 	}).then((r) => r.json())
// },
// patch: (route, body, userToken) => {
// 	return fetch(`${BASE_URL}/${route}`, {
// 		method: 'PATCH',
// 		headers: requestsHeaders(userToken),
// 		body: JSON.stringify(body),
// 	}).then((r) => r.json())
// },
// delete: (route, userToken) => {
// 	return fetch(`${BASE_URL}/${route}`, {
// 		method: 'DELETE',
// 		headers: requestsHeaders(userToken),
// 	}).then((r) => r.json())
// },
