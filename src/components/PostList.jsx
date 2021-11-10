import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../actions/index'

const PostList = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	const posts = useSelector(state => state.posts)
	return (
		<div>
			<h1>PostList</h1>

			{posts.map(post => (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
					<br />
				</div>
			))}
		</div>
	)
}

export default PostList
