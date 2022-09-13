import { Layout, Timeline } from '@/components'
import React from 'react'
import { data } from '../../data'


export interface AboutInterface { }

const About: React.FC<AboutInterface> = () => {
	return (
		<Layout id='about'>
			<h1 className='text-center text-2xl font-medium'>Sobre Mí</h1>
			<article className='grid lg:grid-cols-[400px_minmax(400px,_1fr)_0px] items-center mt-10'>
				<div className='pb-10 md:pb-0 md:pr-10'>
					<p className='text-justify'>{data.description}</p>
				</div>
				<div>
					<Timeline />
				</div>
			</article>
		</Layout>
	)
}

export default About

