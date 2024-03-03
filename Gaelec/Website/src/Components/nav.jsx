// import { useState } from 'react'
import logoGaelec from './../assets/LogoGaelec.png'
import user from './../assets/circle-user-solid.svg'
import carrito from './../assets/carrito.png'
// import menuHamb from './../assets/bars-solid.svg'

export function Nav () {
  // const [hamburgerMenu, setHamburgerMenu] = useState(false)

  return (
    <nav>
      <div id='navbar'>
        <img className='logo' src={logoGaelec} alt='Logo Gaelec Materiales Eléctricos' />
        <div id='buscador'>
          <p>Búsqueda de productos...</p>
          <button>Buscar</button>
        </div>
        <div className='informacion2'>
          <img src={user} alt='Icono perfil' />
          <a href='./Assets/pages/login.html'><p><b>Ingresar</b></p></a>
        </div>
        <div className='informacion2' id='shopCart'>
          <img src={carrito} alt='Carrito de compras' />
          <p><b>Carro de Compras</b></p>
        </div>
      </div>
      {/* <button onClick={setHamburgerMenu(!hamburgerMenu)}><img src={menuHamb} alt='Icono Menu' id='iconMenu' /></button>
       hamburgerMenu &&
        <ul id='menu'>
          <li><a href='index.html' className='btnesMenu'>Inicio</a></li>
          <li><a href='#callToAction'>Nosotros</a></li>
          <li><a href='#contacto'>Contacto</a></li>
          <p>Envíos a todo el país</p>
          <li><a href='#categorias'>Productos</a></li>
  </ul> */}
    </nav>
  )
}
