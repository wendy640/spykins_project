import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menuItems from './MenuItems'
import './Navbar.css'
import logo from "../assets/logo.png"
const Navbar = () => {
	const [active, setActive] = useState(false)

	const handleClick = () => {
		setActive(!active)
	}

	return (
		<nav className="navbar">
			<div className="navbar-logo">
			<img src={logo} alt="logo" />{' '}
			<p >
				<strong>BARBE & CIMON NOTAIRES</strong>
			</p>
			</div>
			<div className="menu-icon" onClick={handleClick}>
				<i className={active ? 'fas fa-times' : 'fas fa-bars'}></i>
			</div>
			<ul className={active ? 'nav-menu active' : 'nav-menu'}>
				{menuItems.map((item, index) => {
					return (
						<li key={index}>
							<Link to={item.url} className={item.cName}>
								{item.title}
							</Link>
							
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Navbar
