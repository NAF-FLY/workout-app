import React from 'react'
import Hamburger from './Hamburger/Hamburger'

import userImage from '../../../images/header/user.svg'
import arrowImage from '../../../images/header/arrow.svg'
import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button type='button' onClick={() => navigate(-1)}>
					<img src={arrowImage} alt='arrow' />
				</button>
			) : (
				<button type='button' onClick={() => navigate('/auth')}>
					<img src={userImage} alt='Auth' />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
