import { Nav } from './nav.jsx'
import callCenter from './../assets/callcenter.png'
import ubicacion from './../assets/ubicacion.png'
import camion from './../assets/camionEnvio.webp'

export function Header () {
  return (
    <header>
      <div id='encabezado'>
        <div className='informacion-nav'>
          <img src={callCenter} alt='Icono de llamada' />
          <h6>Necesitas ayuda? Comunicate con: (+54 9) 2615333220 </h6>
        </div>
        <div className='informacion-secundaria'>
          <div className='informacion-nav'>
            <img src={ubicacion} alt='Icono de ubicacion' />
            <h6>Dorrego Guaymallen, Mendoza Argentina</h6>
          </div>
          <a className='informacion-nav'>
            <img src={camion} alt='Icono de camion de envio' />
            <h6>Historial de Pedidos</h6>
          </a>
        </div>
      </div>
      <Nav />
    </header>
  )
}
