import { useEffect, useState } from 'react'
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { Portada } from './Components/Portada.jsx'
import { TiendaProductos } from './Components/TiendaProductos.jsx'
import { Banner } from './Components/Banner.jsx'
import { EshopPage } from './Components/EshopPage.jsx'
import { Products as initialProducts } from './assets/mocks/products.json'
import { fetchDataAndSaveToFile } from './services/products.js'
import './App.css'

export function App () {
  const [landingPage, setLandingPage] = useState(false)
  const [listOfProducts] = useState(initialProducts)
  const [filters, setFilters] = useState({ categoria: 'all', minPrice: 0 })
  const [search, setSearch] = useState('')
  const [orderProducts, setOrderProducts] = useState([])

  useEffect(() => {
    fetchDataAndSaveToFile()
  }, [])

  const searchedProducts = (listOfProducts) => {
    if (search !== undefined && search !== '') {
      return listOfProducts.filter(product => {
        return (
          product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        product.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      })
    }
    return (listOfProducts)
  }
  const filterProducts = (listOfProducts) => {
    return listOfProducts.filter(product => {
      return (
        product.precio >= filters.minPrice &&
        (
          filters.categoria === 'all' ||
          product.tipo === filters.categoria
        )
      )
    })
  }
  const listSearchProducts = searchedProducts(listOfProducts)
  const filteredProducts = filterProducts(listSearchProducts)
  function handleLandingPage () {
    setLandingPage(true)
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Header search={setSearch} eshop={setLandingPage} changeFilters={setFilters} products={orderProducts} orderProductsSeter={setOrderProducts} />
      {!landingPage
        ? (
          <main className='main-body'>
            <Portada />
            <Banner />
            <TiendaProductos eshop={false} products={filteredProducts} orderProducts={orderProducts} orderProductsSeter={setOrderProducts} />
          </main>
          )
        : (
          <main className='main-body'>
            <EshopPage products={filteredProducts} filter={setFilters} eshop={setLandingPage} orderProducts={orderProducts} orderProductsSeter={setOrderProducts} />
          </main>
          )}
      <a onClick={handleLandingPage} hidden={landingPage} className='link-productos'>Ver todos</a>
      <Footer className='footer' />
    </>
  )
}
