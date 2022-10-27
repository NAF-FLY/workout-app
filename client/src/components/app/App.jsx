import Home from '../pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewWorkout from '../pages/NewWorkout/NewWorkout'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Routes>
				<Route path='/new-workout' element={<NewWorkout />} />
			</Routes>
		</Router>
	)
}

export default App
