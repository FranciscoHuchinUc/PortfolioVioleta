import React from 'react'
import { Social } from './Social'
import linkedin from '@/assets/socials/linkedin.svg'
import instagram from '@/assets/socials/instagram.svg'
import facebook from '@/assets/socials/facebook.svg'

export interface BrandInterface {}

const Brand: React.FC<BrandInterface> = () => {
  const Socials = [
    {
      logo: `${linkedin}`,
      name: 'Linkedin',
      user: 'Violeta Uc',
      href: 'http://www.linkedin.com',
    },
    {
      logo: `${instagram}`,
      name: 'Instagram',
      user: 'Violeta Uc',
      href: 'http://www.instagram.com',
    },
    {
      logo: `${facebook}`,
      name: 'Facebook',
      user: 'Violeta Uc',
      href: 'http://www.facebook.com',
    },
  ]

  return (
    <section className="p-3 bg-tertiary w-full">
      <div className="flex flex-row justify-between md:justify-evenly">
        {Socials.map(({ logo, name, user, href }) => (
          <Social key={name} logo={logo} name={name} user={user} href={href} />
        ))}
      </div>
    </section>
  )
}

export default Brand
