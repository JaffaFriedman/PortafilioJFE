'use client'
import Link from 'next/link'
import React from 'react'
import { Popover } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
const proyectos = [
  {
    name: 'Landing Page',
    description: 'Para una tienda que vende papel mural.',
    tecnologia: 'html, ccs y bootstrap.',
    href: 'https://jaffafriedman.github.io/Dekko/',
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
    imageUrl:
      'https://res.cloudinary.com/djlyfyxyv/image/upload/v1695327398/Udd/Dashboard_jb7enp.jpg'
  },
  {
    name: 'Aplicación de Restoran',
    description: 'Tiene el menu, un blog, permite reservar y contactarse.',
    tecnologia:
      'html, ccs, bootstrap, javascript, node.js, react, mui, firebase',
    href: 'https://master--wondrous-marigold-ae5264.netlify.app/',
    imageUrl:
      'https://res.cloudinary.com/djlyfyxyv/image/upload/v1695327398/Udd/Restoran_x1xkv5.jpg'
  },
  {
    name: 'Ecommerce',
    description:
      'Ecommerce para Dekko una tienda que vende papel mural personalizado',
    tecnologia:
      'html, ccs, bootstrap, javascript, node.js, react, mui, mongodb',
    href: 'https://dekkoww.cl/',
    imageUrl:
      'https://res.cloudinary.com/djlyfyxyv/image/upload/v1695327398/Udd/Ecommerce_nv6zhx.jpg'
  },
  {
    name: 'Portafolio',
    description: 'Portafolio personal, este mismo proyecto.',
    tecnologia: 'html, tailwind, javascript, next.js',
    href: '/',
    imageUrl:
      'https://res.cloudinary.com/djlyfyxyv/image/upload/v1695001000/Calendario/mifoto_rxrtcu.png'
  }
]
const secciones = [
  {
    name: 'Sobre mi',
    description: 'Breve resumen de mi experiencia',
    href: '/about'
  },
  {
    name: 'Habilidades',
    description: 'Habilidades y experiencia',
    href: '/habilidades'
  },
  {
    name: 'Contactame',
    description: 'Información de contacto',
    href: '/contacto'
  }
]
export const Navbar = () => {
  return (
    <>
      <header className='bg-gray-300 w-full px-32 py-8 font-medium flex items-center justify-between'>
      <div className='w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-2xl rounded-full'>
          JF
        </div>
        <Popover className='relative ms-3 mt-5'>
          <Popover.Button className='inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
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
              <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {secciones.map(item => (
                    <div
                      key={item.name}
                      className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-200'
                    >
                      <div>
                        <a href={item.href} className='font-bold text-gray-900'>
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='font-small text-gray-500'>
                          {item.description}
                        </p>
                        {/*
                          <p className='font-small text-gray-500'>
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
        <Popover className='relative ms-5 mt-5'>
          <Popover.Button className='inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
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
              <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {proyectos.map(item => (
                    <div
                      key={item.name}
                      className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-200'
                    >
                      <div className='mt-4 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <img className='h-12 w-16' src={item.imageUrl} alt='' />
                      </div>
                      <div>
                        <a
                          href={item.href}
                          target={'_blank'}
                          className='font-bold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='font-small text-gray-500'>
                          {item.description}
                        </p>
                        {/*
                          <p className='font-small text-gray-500'>
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
