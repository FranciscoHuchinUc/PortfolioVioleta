import React from 'react'
import { Card } from './Card'


export interface TimelineInterface {}

const Timeline: React.FC<TimelineInterface> = () => {
	return (
		<div className="container mx-auto w-full h-full">
			<div className="relative wrap overflow-hidden md:p-10 h-full">
				<div className="absolute border-primary h-full border bg-primary" style={{left: '50%'}}  />
				<Card
					direction='flex-row-reverse'
					age='2017'
					title='Técnico en Informática'
					description='Instituto Técnico Especializado en Computación e Idiomas'
				/>

				<Card
					age='2018'
					title='Curso Básico de Inglés'
					description='Instituto Técnico Especializado en Computación e Idiomas'
				/>
				
				<Card
					direction='flex-row-reverse'
					age='2019'
					title='Ingeniería Bioquímica'
					description='Instituto Tecnológico Superior de Calkiní en el Estado de Campeche'
				/>
			</div>
		</div>
	)
}

export default Timeline

