import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Navigation from './components/Navigation'
import Home from './components/Home'
import User from './components/User'
import Contact from './components/Contact'

const GlobalStyle = createGlobalStyle`
	body{
		margin: 0
	}
`

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Navigation />
				<Route exact path='/' component={Home} />
				{/* <Route path='/user' component={User} /> */}
				<Route path='/user/:userId?' component={User} />
				{/* <Route path='/user' render={() => <h1>Users con etiquetas</h1>} /> */}
				<Route path='/contact' component={Contact} />
				{/* <Route path='/contact'>
					<Contact />
				</Route> */}
				{/* <Route path='/contact'>
					{({ match }) => {
						// console.log(props.match)
						if (match) {
							return <Contact />
						}else{
							return <h1>No estás en Conctactos</h1>
						}
					}}
				</Route> */}
			</Router>
		</>
	)
}

export default App;
