import React from 'react'

import styles from './Field.module.scss'

const Field = ({ placeholder, onChange, type = 'text' }) => {
	return (
		<input
			placeholder={placeholder}
			type={type}
			onChange={onChange}
			className={styles.input}
		/>
	)
}

export default Field
