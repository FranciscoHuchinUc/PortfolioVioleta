import React from 'react'


export interface LayoutInterface {
	id: string,
	children: JSX.Element | JSX.Element[] | string
}

const Layout: React.FC<LayoutInterface> = ({ id, children }) => {
	return <section id={id} className='p-5 md:p-16'>{children}</section>
}

export default Layout

