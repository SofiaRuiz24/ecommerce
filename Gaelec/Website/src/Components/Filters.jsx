import { useState, useId } from 'react'

export function Filters ({ changeFilters, eshop }) {
  const [categoria, setCategoria] = useState('all')
  const listaCategoria = ['Iluminacion interior', 'Iluminacion exterior', 'Cables', 'Llaves', 'Guirnaldas', 'Varios']
  const [minPrecio, setMinPrecio] = useState(0)
  const minPriceFilterId = useId()

  const handleFiltro = (e) => {
    const categoriaActualizada = listaCategoria[e.target.value]
    setCategoria(categoriaActualizada)
    changeFilters(prevState => ({
      ...prevState,
      categoria: categoriaActualizada
    }))
  }

  const handleChangePrice = (event) => {
    setMinPrecio(event.target.value)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: minPrecio
    }))
  }

  const handleVueltaInicio = () => {
    eshop(false)
    changeFilters(prevState => ({
      ...prevState,
      categoria: 'all',
      minPrice: 0
    }))
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        <h5 onClick={handleVueltaInicio} className='link-inicio'>Inicio {'>'} </h5>
        <h5>categoria: {categoria} </h5>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label style={{ fontWeight: '700' }}>Filtros</label>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', wrap: 'no-wrap', color: 'rgba(0, 0, 0, 0.7)' }}>
          {listaCategoria.map((cat, indice) => (
            <li className='link-categoria' key={indice} onClick={handleFiltro} value={indice}>{cat}</li>
          )
          )}
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label style={{ fontWeight: '700' }} htmlFor={minPriceFilterId}>Precio desde</label>
        <input type='range' id={minPriceFilterId} min={0} max={20000} onChange={handleChangePrice} />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', color: 'rgba(0, 0, 0, 0.7)', fontSize: '12px' }}>
          <span> $0 </span>
          <span style={{ textAlign: 'center' }}>${minPrecio}</span>
        </div>
      </div>
    </>
  )
}
