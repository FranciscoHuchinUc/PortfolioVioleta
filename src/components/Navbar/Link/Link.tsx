import React from 'react'


export interface LinkInterface {
	href: string
	children: string
}

const Link: React.FC<LinkInterface> = ({ href, children }) => {
	return (
		<a href={href}>
			<li className='flex justify-center px-5 py-2 text-hover font-medium rounded-2xl hover:bg-shadow hover:text-black'>
				{children}
			</li>
		</a>
	)
}

export default Link

