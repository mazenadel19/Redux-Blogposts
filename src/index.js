import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../../redux-songs/src/reducers'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={createStore(reducers)}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
