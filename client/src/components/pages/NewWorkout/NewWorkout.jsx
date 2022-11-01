import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import Layout from '../../common/Layout'

import bgImage from '../../../images/new-workout-bg.jpg'
import Field from '../../ui/Field/Field'
import Button from '../../ui/Button/Button'

const NewWorkout = () => {
	const [name, setName] = useState('')
	const [exercises, setExercises] = useState([])

	const handleSubmit = () => {
		console.log('submit')
	}

	return (
		<>
			<Layout bgImage={bgImage} heading='Create New Workout' />
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit}>
					<Field
						placeholder='Enter name'
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Exercises...'
						title='Exercises'
						options={[
							{ value: 'sadfasdf', label: 'Push-ups' },
							{ value: 'dsfasdaa', label: 'Pull-ups' },
						]}
						value={exercises}
						onChange={setExercises}
						isMulti={true}
					></ReactSelect>
					<Button text='Create' callback={() => {}} />
				</form>
			</div>
		</>
	)
}

export default NewWorkout
