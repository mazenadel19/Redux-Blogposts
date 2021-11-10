import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


// const store = createStore(reducers,applyMiddleware(thunk))
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
