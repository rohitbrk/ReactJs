import './App.css'

import { motion } from 'framer-motion'

function App() {
	return (
		<div>
			<motion.h2
				animate={{ scale: [1, 2, 1], rotate: 360 }}
				transition={{ duration: 2 }}
			>
				X
			</motion.h2>
		</div>
	)
}

export default App
