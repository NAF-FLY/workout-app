import { useState } from 'react'
import { Link } from 'react-router-dom'

import { menu } from './menuBase'
import hamburgerImage from '../../../../images/header/hamburger.svg'
import hamburgerCloseImage from '../../../../images/header/hamburger-close.svg'

import styles from './Hamburger.module.scss'

const Hamburger = () => {
	const [show, setShow] = useState(false)

	const handleLogout = () => {
		console.log('logout')
	}

	return (
		<div className={styles.wrapper}>
			<button type='button' onClick={() => setShow(!show)}>
				<img
					src={show ? hamburgerCloseImage : hamburgerImage}
					alt='Menu'
					height='24px'
				/>
			</button>
			<nav className={`${styles.menu} ${show ? styles.show : ''}`}>
				<ul>
					{menu.map((item, idx) => (
						<li key={`_menu_${item}`}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					))}
					<li>
						<button onClick={handleLogout}>Выйти</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Hamburger
