import React from 'react'
import { Button } from '../Button'


export interface CardProjectInterface {
	image: string
	title: string
	description: string
}

const CardProject: React.FC<CardProjectInterface> = ({ image, title, description }) => {
	return (
		<article className='p-2 bg-white border-2 rounded-2xl md:p-6 md:w-[400px]'>
			<div className='flex flex-row justify-center items-center gap-2 md:flex-col'>
				<div className='w-1/2 md:w-auto rounded-md overflow-hidden'>
					<img className='w-full h-full' src={image} alt={title} />
				</div>
				<div className='flex flex-col justify-between items-start md:flex-row md:w-full mt-4'>
					<div>
						<h3 className='text-sm font-medium'>{title}</h3>
						<span className='text-xs  font-normal tracking-tight' >{description}</span>
					</div>
					<Button>
						<span className='text-xs font-medium'>Saber Más</span>
					</Button>
				</div>
			</div>
		</article>
	)
}

export default CardProject

