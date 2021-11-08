import { useDispatch, useSelector } from 'react-redux'

const DummyComp = () => {
	const dispatch = useDispatch()

	// const someValue = useSelector(state => state.someValue) // now you have access to that value from inside the store !!!

	return (
		<div>
			<h1>DummyComp</h1>
			<button onClick={dispatch({ type: '', action: '' })}>clickme</button>
			<button onClick={dispatch(/* your action here */)}>clickme</button>
		</div>
	)
}

export default DummyComp
