import React from 'react'
import { motion } from 'framer-motion'

export interface CardInterface {
	age: string
	title: string
	description: string
	direction?: 'flex-row-reverse' | 'flex-row'
}

const Card: React.FC<CardInterface> = ({ age, title, description, direction = 'flex-row' }) => {
	return (
		<article className={`mb-4 flex justify-between ${direction} items-center w-full right-timeline`}>
      <div className="order-1 w-5/12" />
      <div className=" flex items-center order-1 bg-primary w-7 h-7 rounded-full" />

      <motion.div
				whileInView= {{ translateX: [-50, 0, -10, 0], opacity: [ 0, .8, .9, 1] }}
				transition= {{ duration: 0.8 }}
				className="order-1 bg-white rounded-2xl w-5/12 p-3 border-2"
			>
				<span className='bg-primary/25 px-2 py-[2px] text-xs font-medium text-secondary rounded-2xl'>{age}</span>
        <h3 className="mb-3 font-medium text-gray-800 text-base">
					{title}
				</h3>
        <p className="text-xs font-normal leading-snug tracking-wide text-gray-900 text-opacity-100">
					{description}
				</p>
      </motion.div>
    </article>
	)
}

export default Card

