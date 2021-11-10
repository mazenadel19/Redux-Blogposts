/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
	if (action.type === 'FETCH_POSTS') {
		return action.payload
	}

	return state
}
