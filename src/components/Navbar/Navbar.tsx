import React, { useState } from 'react'
import { Button } from '../Button'
import { Link } from './Link'
import logo from '/logo.svg'
import close from '@/assets/close.svg'
import menu from '@/assets/menu.svg'

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {

	const [open, setOpen] = useState(false)

	const Links = [
		{ name: 'Home', link: '#home' },
		{ name: 'About', link: '#about' },
		{ name: 'Projects', link: '#projects' }
	]

	return (
		<header className='w-full h-16 shadow-md sticky top-0 left-0 z-50'>
			<nav className='flex items-center justify-between bg-white py-4 md:px-16 px-5'>
				<div className='flex items-center gap-3'>
					<img src={logo} alt='Logo Portfolio Violeta Uc' className='w-10 h-10 ' />
					<a href='' className='text-lg font-semibold text-primary hidden md:inline'>Violeta Uc</a>
				</div>

				<div onClick={() => setOpen(!open)} className='flex items-center justify-center w-10 h-10 absolute right-8 cursor-pointer md:hidden'>
					<img src={open ? close : menu} alt='Options Menu' className='w-auto h-auto' />
				</div>

				<ul className={`absolute bg-white justify-center flex flex-col gap-6 w-full h-screen px-6 z-[-1] left-0 md:justify-between md:w-auto md:h-auto md:flex-row md:items-center md:pb-0 pb-12 md:static md:z-auto md:pl-0 transition-all duration-700 ease-in-out ${open ? 'top-16 ' : 'top-[-900px]'}`}>
					{
						Links.map((link) => (
							<Link key={link.name} href={link.link}>{link.name}</Link>
						))
					}
					<Button>
						Descargar CV
					</Button>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
