'use client'
import Link from 'next/link'
import React from 'react'
import { Popover } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  PortafolioIcon,
  CrudIcon,
  WeatherIcon,
  EcommerceIcon,
  LandingIcon,
  RestorantIcon,
  ContactIcon,
  UserIcon,
  ToolsIcon
} from './Icons'

const proyectos = [
  {
    name: 'Landing Page',
    description: 'Para una tienda que vende papel mural.',
    tecnologia: 'html, ccs y bootstrap.',
    href: 'https://jaffafriedman.github.io/Dekko/',
    icon: LandingIcon,
    imageUrl:
      'https://res.cloudinary.com/djlyfyxyv/image/upload/v1695327398/Udd/Landing1_povu0s.jpg'
  },
  {
    name: 'Crud',
    description:
      'Formulario simple con las 4 operaciones para una lista de clientes.',
    tecnologia:
      'html, ccs, bootstrap, javascript, persistencia de datos en localStorage y uso  DOM ',
    href: 'https://jaffafriedman.github.io/M1_CRUD/',
    icon: CrudIcon,
    imageUrl:
      'https://res.cloudinary.com/djlyfyxyv/image/upload/v1695327398/Udd/Crud_m1wkkn.jpg'
  },
  {
    name: 'Dashboard',
    description:
      'Del clima, con mapa interactivo, gráficos y pronósticos para 5 dias.',
    tecnologia:
      'html, ccs, bootstrap, javascript, node.js, chart.j, apis integradas mapbox y openweathermap.',
    href: 'https://jaffafriedman.github.io/M2_DASHBOARD/',
    icon: WeatherIcon,
    imageUrl:
      'https://res.cloudinary.com/djlyfyxyv/image/upload/v1695327398/Udd/Dashboard_jb7enp.jpg'
  },
  {
    name: 'Aplicación de Restoran',
    description: 'Tiene el menu, un blog, permite reservar y contactarse.',
    tecnologia:
      'html, ccs, bootstrap, javascript, node.js, react, mui, firebase',
    href: 'https://master--wondrous-marigold-ae5264.netlify.app/',
    icon: RestorantIcon,
    mageUrl:
      'https://res.cloudinary.com/djlyfyxyv/image/upload/v1695327398/Udd/Restoran_x1xkv5.jpg'
  },
  {
    name: 'Ecommerce',
    description:
      'Ecommerce para Dekko una tienda que vende papel mural personalizado',
    tecnologia:
      'html, ccs, bootstrap, javascript, node.js, react, mui, mongodb',
    href: 'https://dekkoww.cl/',
    icon: EcommerceIcon,
    imageUrl:
      'https://res.cloudinary.com/djlyfyxyv/image/upload/v1695327398/Udd/Ecommerce_nv6zhx.jpg'
  },
  {
    name: 'Portafolio',
    description: 'Portafolio personal, este mismo proyecto.',
    tecnologia: 'html, tailwind, javascript, next.js',
    href: '/',
    icon: PortafolioIcon,
    imageUrl:
      'https://res.cloudinary.com/djlyfyxyv/image/upload/v1695001000/Calendario/mifoto_rxrtcu.png'
  }
]
const secciones = [
  {
    name: 'Mi experiencia',
    description: 'Breve resumen de mi experiencia profesionales',
    href: '/about',
    icon: UserIcon
  },
  {
    name: 'Habilidades',
    description: 'Habilidades técnicas',
    href: '/habilidades',
    icon: ToolsIcon
  },
  {
    name: 'Contáctame',
    description: 'Información de contacto',
    href: '/contacto',
    icon: ContactIcon
  }
]
export const Navbar = () => {
  return (
    <>
      <header className='bg-neutral-300  text-cyan-600  w-full px-32 py-8 font-medium flex items-center justify-between'>
        <div className='w-12 h-12 bg-cyan-600 text-neutral-50 flex items-center justify-center font-bold text-2xl rounded-full'>
          <a href="/" className='font-bold text-cyan-50'>
            JFE
            <span className='absolute inset-0' />
          </a>
        </div>

        <Popover className='relative ms-3 mt-3'>
          <Popover.Button className='inline-flex items-center gap-x-1  font-semibold leading-6  text-cyan-600  '>
            <span>Acerca de Mi</span>
            <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4'>
              <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-neutral-900/5'>
                <div className='p-4'>
                  {secciones.map(item => (
                    <div
                      key={item.name}
                      className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-neutral-200'
                    >
                      <div className='mt-4 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white'>
                        <item.icon className="h-5 w-5 flex-none text-cyan-600" aria-hidden="true" />
                      </div>
                      <div>
                        <a href={item.href} className='font-bold text-neutral-900'>
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='font-small text-neutral-500'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Popover className='relative mt-3 me-8 '>
          <Popover.Button className='inline-flex items-center gap-x-1  font-semibold leading-6 text-cyan-600 '>
            <span>Proyectos del Bootcamp</span>
            <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4'>
              <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-neutral-900/5'>
                <div className='p-4'>
                  {proyectos.map(item => (
                    <div
                      key={item.name}
                      className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-neutral-200'
                    >
                      <div className='mt-4 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white'>
                        <item.icon className="h-5 w-5 flex-none text-cyan-600" aria-hidden="true" />
                      </div>
                      <div>
                        <a
                          href={item.href}
                          target={'_blank'}
                          className='font-bold text-neutral-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='font-small text-neutral-500'>
                          {item.description}
                        </p>
                        {/*
                          <p className='font-small text-neutral-500'>
                          Tecnologías: {item.tecnologia}
                        </p>
                          */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

      </header>
    </>
  )
}
