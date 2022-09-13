import React from 'react'


export interface FooterInterface { }

const Footer: React.FC<FooterInterface> = () => {
	return (
		<footer className='w-full p-4 flex justify-center items-center bg-black text-white'>
			<span className='text-white text-xs md:text-base'>Francisco Huchin © Todos los derechos reservados</span>
		</footer>
	)
}

export default Footer

