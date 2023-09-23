export const metadata = {
  title: 'habilidades',
  descripcion: ''
}
import {
  TarjetaIcon,
  CodeIcon,
  ComputerIcon
} from './../../components/Icons'

const habilidades = [
  {
    nombre: 'Herramientas & Frameworks Modernos',
    icon: CodeIcon,
    descripcion: [
      'Lenguajes & Frameworks: HTML, CSS, JavaScript, Node.js, React, Express',
      'Bases de Datos & Plataformas: MongoDB, Firebase',
      'Diseño & Estilos: Tailwind, Bootstrap, MUI',
      'Integraciones & Librerías: Chart.js, OpenWeather, Mapbox'
    ]
  },
  {
    nombre: 'Fundamentos Técnicos Clásicos',
    icon: ComputerIcon,
    descripcion: [
      'Lenguajes: Pl/sql, Cobol',
      'Herramientas: Oracle Developer, Unix & Shell Scripting',
      'Bases de Datos: Oracle'
    ]
  },
  {
    nombre: 'Gestión, Estrategia & Liderazgo',
    icon: TarjetaIcon,
    descripcion: [
      'Financieras: Payment Methods',
      'Gestión y Dirección: Business Intelligence, IT Management, Project Management, CMMI, PMI',
      'Oracle, Data Warehousing, ERP'
    ]
  }
]

export default function Example () {
  return (
    <div className='bg-neutral-50'>
      <div className='mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4'>
        <div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
          <div className='grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2'>
            <div>
              <h2 className='text-4xl font-bold tracking-tight text-neutral-900'>
                Habilidades Técnicas y Gerenciales
              </h2>
              <p className='mt-4 text-neutral-500'>
                A lo largo de mi trayectoria, he adquirido y dominado una
                diversidad de habilidades, tanto en el ámbito técnico como
                gerencial. Desde lenguajes de programación y frameworks
                modernos, pasando por sistemas más tradicionales, hasta
                competencias clave en gestión y dirección de proyectos
                tecnológicos. A continuación, te presento una descripción
                detallada de mis habilidades{' '}
              </p>
            </div>
          </div>
          <div className='mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3'>
            {habilidades.map(habilidad => (
              <div key={habilidad.nombre} className='sm:flex lg:block'>
                <div className='sm:flex-shrink-0'>
                  <habilidad.icon
                    className='h-16 w-16 text-neutral-50'
                    aria-hidden='true'
                  />
                </div>
                <div className='mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-sm font-medium text-neutral-900'>
                    {habilidad.nombre}
                  </h3>

                  <div>
                    {habilidad.descripcion.map(item => (
                      <p
                        key='descripcion'
                        className='mt-2 text-sm text-neutral-500'
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
