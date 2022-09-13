import React from 'react'
import { m } from 'framer-motion' 

export interface CardInterface {
  icon: string;
  title: string;
  className: string;
}

const Card: React.FC<CardInterface> = ({ icon, title, className }) => {
  return (
    <m.div
      whileInView= {{ translateX: [-50, 0, -10, 0], opacity: [ 0, .8, .9, 1] }}
      transition= {{ duration: 0.8 }}
      className={`absolute hidden md:flex items-center gap-4 p-3 rounded-xl border-2 border-shadow bg-white ${className}`}
    >
      <div className="rounded-full bg-secondary p-2">
        <img src={icon} alt="" />
      </div>
      <p className="pr-2 text-sm lg:pr-8">{title}</p>
    </m.div>
  )
}

export default Card
