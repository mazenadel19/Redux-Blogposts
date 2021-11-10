import { combineReducers } from 'redux'

// your reducers here

// const someReducer = (somedata = null, action) => {
// 	if (action.type === 'SPECIFIC SOMETHING') return //DO SOMETHING

// 	return somedata
// }

// const someOtherReducer = (somedata = null, action) => {
// 	if (action.type === 'SPECIFIC SOMETHING') return //DO SOMETHING

// 	return somedata
// }
const getPosts = (state = [], action) => {
	if (action.type === 'FETCH_POSTS') {
		return action.payload
	}

	return state
}

export default combineReducers({
	posts: getPosts,
})
