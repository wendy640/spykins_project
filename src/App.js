import React from 'react'
import Aprospos from './Project/A_Prospos'
import Navbar from '../src/Project/components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Aprospos />} />
					<Route exact path="/services" element={<Aprospos />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
