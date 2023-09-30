export const metadata={
    title:"contacto",
    description:""
}
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export default function Example () {
  return (
    <div className='relative isolate bg-white '>
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-neutral-100 ring-1 ring-neutral-900/10 lg:w-1/2'>
              <svg
                className='absolute inset-0 h-full w-full stroke-neutral-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                    width={200}
                    height={200}
                    x='100%'
                    y={-1}
                    patternUnits='userSpaceOnUse'
                  >
                    <path d='M130 200V.5M.5 .5H200' fill='none' />
                  </pattern>
                </defs>
                <rect width='100%' height='100%' strokeWidth={0} fill='white' />
                <svg x='100%' y={-1} className='overflow-visible fill-neutral-50'>
                  <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
                </svg>
                <rect
                  width='100%'
                  height='100%'
                  strokeWidth={0}
                  fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
                />
              </svg>
            </div>
            <h2 className='text-3xl font-bold tracking-tight text-neutral-900'>
              Contáctame
            </h2>
            <p className='mt-6 text-lg leading-8 text-neutral-600'>
              Con más de 30 años transformando tecnología y negocios, estoy aquí
              para conectar, colaborar y crear soluciones juntos. ¿Empezamos?
            </p>
            <dl className='mt-10 space-y-4 text-base leading-7 text-neutral-600'>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Dirección</span>
                  <BuildingOffice2Icon
                    className='h-7 w-6 text-cyan-600'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  Isabel la Católica 7350
                  <br />
                  Santiago, Chile
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Teléfono</span>
                  <PhoneIcon
                    className='h-7 w-6 text-cyan-600'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  <a
                    className='hover:text-neutral-900'
                    href='tel:+1 (555) 234-5678'
                  >
                    +56 (9) 9870-7460
                  </a>
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>correo</span>
                  <EnvelopeIcon
                    className='h-7 w-6 text-cyan-600'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  <a
                    className='hover:text-neutral-900'
                    href='mailto:hello@example.com'
                  >
                    jaffa.friedman@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action='#'
          method='POST'
          className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
        >
          <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='nombre'
                  className='block text-sm font-semibold leading-6 text-neutral-900'
                >
                  Nombre
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='nombre'
                    id='nombre'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='apellido'
                  className='block text-sm font-semibold leading-6 text-neutral-900'
                >
                  Apellido
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='apellido'
                    id='apellido'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='correo'
                  className='block text-sm font-semibold leading-6 text-neutral-900'
                >
                  Correo
                </label>
                <div className='mt-2.5'>
                  <input
                    type='correo'
                    name='correo'
                    id='correo'
                    autoComplete='correo'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='telefono'
                  className='block text-sm font-semibold leading-6 text-neutral-900'
                >
                  Teléfono
                </label>
                <div className='mt-2.5'>
                  <input
                    type='tel'
                    name='telefono'
                    id='telefono'
                    autoComplete='tel'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='Mensaje'
                  className='block text-sm font-semibold leading-6 text-neutral-900'
                >
                  Mensaje
                </label>
                <div className='mt-2.5'>
                  <textarea
                    name='mensaje'
                    id='mensaje'
                    rows={4}
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className='mt-8 flex justify-end'>
              <button
                type='submit'
                className='rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-neutral-50 shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600'
              >
                Enviame un mensaje
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
