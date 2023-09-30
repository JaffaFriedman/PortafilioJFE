'use client'
import Link from 'next/link'
import Image from 'next/image'
export const metadata = {
  title: 'portafolio',
  description: ''
}
 

export default function Home () {
 
  return (
    <div className='bg-white'>
      <div className='relative isolate overflow-hidden bg-gradient-to-b from-cyan-100/20 pt-14'>
        <div
          className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50 sm:-mr-80 lg:-mr-96'
          aria-hidden='true'
        />
        <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
            <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
              Transformando el Mundo Digital
            </h1>
            <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
              <p className='text-lg leading-8 text-gray-600'>
                Con más de 30 años en la industria tecnológica, desde el corazón
                de la administración financiera hasta las líneas de código que
                impulsan el web de hoy. Mi pasión es simplificar lo complejo,
                innovar y conectar mundos.
              </p>
            </div>
            <Image
              className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
              width={500}
              height={500}
              src='https://res.cloudinary.com/djlyfyxyv/image/upload//a_hflip/v1695480464/iu7ovypk48fapnl2pr2w.webp'
              alt=''
            />
            <svg
              viewBox='0 0 926 676'
              aria-hidden='true'
              className='absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]'
            >
              <path
                fill='url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)'
                fillOpacity='.4'
                d='m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z'
              />
              <defs>
                <linearGradient
                  id='60c3c621-93e0-4a09-a0e6-4c228a0116d8'
                  x1='926.392'
                  x2='-109.635'
                  y1='.176'
                  y2='321.024'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#776FFF' />
                  <stop offset={1} stopColor='#FF4694' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>
    </div>
  )
}
