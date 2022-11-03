import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Hamburger from './Hamburger/Hamburger'
import { useAuth } from '../../../hooks/useAuth'

import userImage from '../../../images/header/user.svg'
import authImage from '../../../images/header/dumbbell.svg'
import arrowImage from '../../../images/header/arrow.svg'
import styles from './Header.module.scss'

const Header = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button type='button' onClick={() => navigate(-1)}>
					<img src={arrowImage} alt='arrow' width='29' height='23' />
				</button>
			) : (
				<button
					type='button'
					onClick={() => navigate(isAuth ? '/profile' : '/auth')}
				>
					<img
						src={isAuth ? authImage : userImage}
						alt='Auth'
						height='40'
						width='40'
					/>
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
