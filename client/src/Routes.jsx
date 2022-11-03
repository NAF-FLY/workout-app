// import Home from './components/pages/Home/Home'
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom'
import Error404 from './components/pages/404'
// import NewWorkout from './components/pages/NewWorkout/NewWorkout'
// import Auth from './components/pages/Auth/Auth'
import { routes } from './dataRoutes'
import { useAuth } from './hooks/useAuth'

const Routes = () => {
	const { isAuth } = useAuth()

	return (
		<Router>
			<Switch>
				{routes.map((route, id) => {
					if (route.auth && !isAuth) {
						return false
					}
					return (
						<Route
							path={route.path}
							exact={route.exact}
							element={<route.element />}
							key={id}
						/>
					)
				})}
				<Route element={<Error404 />} />
			</Switch>
		</Router>
	)
}

export default Routes
