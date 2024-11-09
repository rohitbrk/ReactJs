// higher order components
// here we are implementing simple logging mechanism without changing the Button implementation
// using higher order components

const Button1 = ({ onClick }) => {
	return <button onClick={onClick}>button1</button>
}

const Button2 = ({ onClick }) => {
	return <button onClick={onClick}>button2</button>
}

const WrapForLogging = (Component) => {
	return () => {
		const onClick = () => {
			console.log('clicked')
		}
		return <Component onClick={onClick} />
	}
}

function App() {
	const WrappedButton1 = WrapForLogging(Button1)
	const WrappedButton2 = WrapForLogging(Button2)

	return (
		<div>
			<WrappedButton1 />
			<WrappedButton2 />
		</div>
	)
}

export default App
