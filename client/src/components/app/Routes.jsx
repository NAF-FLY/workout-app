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
			</Switch>
			<Switch>
				<Route path='/new-workout' element={<NewWorkout />} />
			</Switch>
			<Switch>
				<Route path='/auth' element={<Auth />} />
			</Switch>
		</Router>
	)
}

export default Routes
