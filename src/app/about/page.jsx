import React from 'react'
export const metadata = {
  title: 'about',
  description: ''
}

import {
  MoneyIcon,
  LightBulbIcon,
  CodeIcon,
  BookOpenIcon
} from './../../components/Icons'

const features = [
  {
    name: 'Experto en Tecnología Financiera',
    description:
      '13 años en la administración y tecnología detrás de tarjetas de crédito, con una profunda comprensión de sus intricados sistemas.',
    icon: MoneyIcon
  },
  {
    name: 'Emprendedor Apasionado',
    description:
      '20 años de experiencia en mi propia empresa de asesorías, proporcionando soluciones innovadoras a retos empresariales.',
    icon: LightBulbIcon
  },
  {
    name: 'Desarrollador Web Full Stack',
    description:
      'Recién graduado de un bootcamp intensivo, listo para transformar ideas en aplicaciones y sitios web funcionales.',
    icon: CodeIcon
  },
  {
    name: 'Aprendizaje Continuo',
    description:
      'Mi carrera es un testimonio de adaptación y aprendizaje constante, siempre buscando estar al día con las últimas tendencias y tecnologías.',
    icon: BookOpenIcon
  }
]
export default function Page () {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            En cambio constante
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Un Viaje a Través del Mundo Tecnológico
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Desde mis primeros días trabajando en empresas administradoras de
            tarjetas de crédito hasta el lanzamiento de mi propia empresa de
            asesorías, he estado en el centro de la evolución tecnológica y
            financiera. Cada experiencia ha sido un paso más en mi continuo
            aprendizaje y adaptación. Ahora, al sumergirme en el desarrollo web
            full stack, siento que mi trayectoria me ha llevado a un punto de
            confluencia entre lo tradicional y lo contemporáneo, y estoy
            emocionado por las posibilidades que el futuro nos reserva.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map(feature => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg '>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
