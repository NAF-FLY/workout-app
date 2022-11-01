import React, { useState } from 'react'
import Layout from '../../common/Layout'

import bgImage from '../../../images/bg-auth.jpg'
import Field from '../../ui/Field/Field'
import Button from '../../ui/Button/Button'

import styles from './Auth.module.scss'
import Alert from '../../ui/Alert/Alert'

const Auth = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [type, setType] = useState('auth') // auth or register

	const handleSubmit = e => {
		e.preventDefault()
		if (type === 'auth') {
			console.log('Auth')
		} else {
			console.log('Register')
		}
	}

	return (
		<>
			<Layout bgImage={bgImage} heading='Auth || Register' />
			<div className='wrapper-inner-page'>
				{true && <Alert type='warning' text='You have been successfully' />}
				<form onSubmit={handleSubmit}>
					<Field
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={({ target }) => setEmail(target)}
						required
					/>
					<Field
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={({ target }) => setPassword(target)}
						required
					/>
					<div className={styles.wrapperButtons}>
						<Button text='Sign in' callback={() => setType('auth')} />
						<Button text='Sign up' callback={() => setType('reg')} />
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
