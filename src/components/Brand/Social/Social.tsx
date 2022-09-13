import React from 'react'

export interface SocialInterface {
  logo: string;
  name: string;
  user: string;
  href: string;
}

const Social: React.FC<SocialInterface> = ({ logo, name, user, href }) => {
  return (
    <a
      href={href}
      target="__blank"
      className="flex flex-row p-1 gap-2 md:gap-3 items-center grayscale hover:grayscale-0 animate-right"
    >
      <img src={logo} alt={name} className="w-5 h-5 md:w-7 md:h-7" />
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-black md:text-base">
          {name}
        </span>
        <span className="text-[10px] font-medium text-hover md:text-sm">
          {user}
        </span>
      </div>
    </a>
  )
}

export default Social
