// avoid re-renders using this pattern - part 1
// maintain state to the child-most componnent as possible,
// so that only that component re-renders
// other wise if a parent re-renders, all the children will re-render

import { useState } from 'react'

const Button1 = () => {
	console.log('button 1')
	return <button>click 1</button>
}

const Button2 = () => {
	console.log('button 2')

	return <button>click 2</button>
}

const Button3 = () => {
	console.log('button 3')

	return <button>click 3</button>
}

const Button = () => {
	const [count, setCount] = useState(0)

	console.log('button')

	return (
		<button onClick={() => setCount((prev) => prev + 1)}>
			inc {count}
		</button>
	)
}

function App() {
	return (
		<div>
			Main
			<Button1 />
			<Button2 />
			<Button3 />
			<Button />
		</div>
	)
}

export default App
