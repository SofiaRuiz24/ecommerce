import { useRef } from 'react'
import logoGaelec from './../assets/LogoGaelec.png'
import tienda from './../assets/tienda.png'
import { Cart } from './Cart'

// import menuHamb from './../assets/bars-solid.svg'

export function Nav ({ search, eshop, changeFilters, products, orderProductsSeter }) {
  // const [hamburgerMenu, setHamburgerMenu] = useState(false)
  const inputRefBuscar = useRef()
  const handleBuscar = (event) => {
    event.preventDefault()
    const value = inputRefBuscar.current.value
    console.log(value)
    if (value === '') {
      window.alert('No se ingreso ningun producto en la busqueda')
      return
    }
    if (value.match(/^\d+$/)) {
      window.alert('No se puede buscar un producto con solo números')
      // eslint-disable-next-line no-useless-return
      return
    }
    if (value.length < 3) {
      window.alert('La busqueda debe al menos tener 3 caracteres')
      // eslint-disable-next-line no-useless-return
      return
    }
    search(value)
    eshop(true)
    window.scrollTo(0, 0)
  }
  const handleClickProducts = () => {
    eshop(true)
    window.scrollTo(0, 0)
  }
  const handleClickInicio = () => {
    eshop(false)
    window.scrollTo(0, 0)
    changeFilters(prevState => ({
      ...prevState,
      categoria: 'all',
      minPrice: 0
    }))
  }

  return (
    <nav>
      <div id='navbar'>
        <a onClick={handleClickInicio}><img className='logo' src={logoGaelec} alt='Logo Gaelec Materiales Eléctricos' /></a>
        <form id='buscador' onSubmit={handleBuscar}>
          <input required ref={inputRefBuscar} placeholder='Búsqueda de productos...' />
          <button type='submit'>Buscar</button>
        </form>
        <div className='informacion2'>
          <a className='link-nav-productos' onClick={handleClickProducts}><b>Productos</b><img src={tienda} alt='Icono de fachada de tienda' /></a>

        </div>
        <div className='informacion2' id='shopCart'>
          <Cart cart={products} orderProductsSeter={orderProductsSeter} />
        </div>
      </div>
    </nav>
  )
}
