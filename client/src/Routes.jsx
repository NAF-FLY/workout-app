// import Home from './components/pages/Home/Home'
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom'
// import NewWorkout from './components/pages/NewWorkout/NewWorkout'
// import Auth from './components/pages/Auth/Auth'
import { routes } from './dataRoutes'
import { useAuth } from './hooks/useAuth'

const Routes = () => {
	const { isAuth } = useAuth()

	return (
		<Router>
			<Switch>
				{routes.map(route => {
					if (route.auth && !isAuth) {
						return console.log('404')
					}
					return (
						<Route
							path={route.path}
							exact={route.exact}
							element={<route.element />}
						/>
					)
				})}
				{/* <Route path='/' element={<Home />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/new-workout' element={<NewWorkout />} /> */}
			</Switch>
		</Router>
	)
}

export default Routes
