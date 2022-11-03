import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './components/pages/404'
import { useAuth } from './hooks/useAuth'

import { routes } from './dataRoutes'

const App = () => {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.auth && !isAuth) {
						return false
					}

					return (
						<Route
							path={route.path}
							exact={route.exact}
							key={`route ${route.path}`}
							element={<route.element />}
						/>
					)
				})}
				<Route path='*' element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
