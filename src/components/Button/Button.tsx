import React from 'react'
import { motion } from 'framer-motion'

export interface ButtonInterface {
	children: JSX.Element | JSX.Element[] | string
}

const Button: React.FC<ButtonInterface> = ({ children }) => {
	return (
		<motion.button
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.8 }}
			transition= {{ duration: 0.1 }}
			className='px-3 py-2 bg-primary text-white rounded-lg transition hover:bg-primary/80'
		>
			{children}
		</motion.button>
	)
}

export default Button

