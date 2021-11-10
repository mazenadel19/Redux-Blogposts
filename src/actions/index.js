import jsonPlaceholder from "../apis/jsonPlaceholder";

// your actions here

// Action Creator
export const fetchPosts = () => {
	return async dispatch => {
		const response = await jsonPlaceholder.get('/posts')
		// Action
		dispatch({ type: 'FETCH_POSTS', payload: response.data })
	}
}
