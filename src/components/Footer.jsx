import Link from 'next/link'
import React from 'react'
import {
  GitHubIcon,
  LinkedInIcon,
  Telefono,
  Email,
  Whatsapp,
  Direccion
} from './Icons'

const datos = [
  { name: '+569 9879 7468', href: '#', icon: Telefono },
  { name: 'Isabel la Catolica 7350', href: '#', icon: Direccion },
  { name: 'jaffa.friedman@gmail.com', href: '#', icon: Email }
]
const redes = [
  { name: '', href: 'https://api.whatsapp.com/send/?phone=56998707468text&type=phone_number&app_absent=0', icon: Whatsapp },
  { name: '', href: 'https://github.com/JaffaFriedman', icon: GitHubIcon },
  { name: '', href: 'https://www.linkedin.com/feed/', icon: LinkedInIcon }
]
export const Footer = () => {
  return (
    <footer className='bg-gray-300' aria-labelledby='footer-heading'>
      <div className='mx-auto max-w-7xl px-3 pb-2 sm:pt-2 lg:px-2 lg:pt-2'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='grid grid-cols-1 '>
            {datos.map(item => (
              <a
                key={item.name}
                href={item.href}
                className='flex items-left justify-left gap-x-2.5  font-semibold text-gray-900 hover:bg-gray-100'
              >
                <item.icon
                  className='h-7 w-7 flex-none text-gray-400'
                  aria-hidden='true'
                />
                {item.name}

              </a>
            ))}
          </div>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            {redes.map(item => (
              <nav
                className='flex items-center justify-center flex-wrap gap-2 '
                key={item.name}
              >
                <a
                  x
                  href={item.href}
                  target={'_blank'}
                  className='text-gray-900 hover:bg-gray-100'
                >
                  <item.icon
                    className='h-8 w-8 flex-none text-gray-400'
                    aria-hidden='true'
                  />
                  {item.name}
                </a>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
