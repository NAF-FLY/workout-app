import Home from './components/pages/Home/Home'
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom'
import NewWorkout from './components/pages/NewWorkout/NewWorkout'
import Auth from './components/pages/Auth/Auth'

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
