import { CardProject, Layout } from '@/components'
import React from 'react'


export interface ProjectsInterface { }

const Proyectos = [
	{
		image: 'https://s3.amazonaws.com/static.om.anigamy.net/static.selecciones.com.ar/App/Article/protectores-solares-814-mainImage-2.jpg',
		title: 'ProtecArchis',
		description: 'Una breve descripcion del producto',
	},
	{
		image: 'https://s3.amazonaws.com/static.om.anigamy.net/static.selecciones.com.ar/App/Article/protectores-solares-814-mainImage-2.jpg',
		title: 'ProtecArchis',
		description: 'Una breve descripcion del producto',
	}
]

const Projects: React.FC<ProjectsInterface> = () => {
	return (
		<Layout id='projects'>
			<h1 className='text-center text-2xl font-medium'>Mis Proyectos</h1>
			<div className='flex flex-col mt-8 md:flex-row justify-center items-center md:items-start gap-10'>
				{
					Proyectos.map(({ image, title, description }) => (
						<CardProject image={image} title={title} description={description} />
				))}
			</div>
		</Layout>
	)
}

export default Projects

