// avoid re-render using this pattern - part 2
// by passing as props which are created ouside, we can avoid re-renders

import { useState } from 'react'

const Button1 = () => {
	console.log('button1')
	return <button>button1</button>
}

const Button2 = () => {
	console.log('button2')
	return <button>button2</button>
}

const Button3 = () => {
	console.log('button3')
	return <button>button3</button>
}

const Button = ({ children }) => {
	const [count, setCount] = useState(0)

	console.log('button')
	return (
		<div>
			<button onClick={() => setCount((prev) => prev + 1)}>
				button{count}
			</button>
			<br />
			{children}
		</div>
	)
}

function App() {
	return (
		<div>
			Main
			<Button
				children={
					<>
						<Button1 />
						<Button2 />
						<Button3 />
					</>
				}
			/>
		</div>
	)
}

export default App
