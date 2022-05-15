import React from 'react'
import cls from './App.module.scss'
import { BrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'

const App = () => {
	return (
		<BrowserRouter>
			<Layout className={cls.background} />
		</BrowserRouter>
	)
}

export default App
