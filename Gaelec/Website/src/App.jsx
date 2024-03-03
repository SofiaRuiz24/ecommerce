import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { Portada } from './Components/Portada.jsx'
import { TiendaProductos } from './Components/TiendaProductos.jsx'
import { Banner } from './Components/Banner.jsx'
import './App.css'

export function App () {
  return (
    <>
      <Header />
      <main className='main-body'>
        <Portada />
        <Banner />
        <TiendaProductos />
      </main>
      <Footer className='footer' />
    </>
  )
}
