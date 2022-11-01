import Home from '../pages/Home/Home'
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom'
import NewWorkout from '../pages/NewWorkout/NewWorkout'
import Auth from '../pages/Auth/Auth'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' element={<Home />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/new-workout' element={<NewWorkout />} />
			</Switch>
		</Router>
	)
}

export default Routes
