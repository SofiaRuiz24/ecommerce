// import { useState } from 'react'
import { Filters } from './Filters'
import { TiendaProductos } from './TiendaProductos'

export function EshopPage ({ products, orderProducts, filter, eshop, orderProductsSeter }) {
  console.log(products)
  const listOfProducts = products

  return (
    <div style={{ marginTop: '5.5rem', display: 'flex', gap: '1rem', width: '100%' }}>
      <aside style={{ width: '25%', display: 'flex', flexDirection: 'column', gap: '1rem', marginLeft: '0.5rem' }}>
        <Filters changeFilters={filter} eshop={eshop} />
      </aside>
      <section style={{ width: '75%' }}>
        <TiendaProductos eshop products={listOfProducts} orderProducts={orderProducts} orderProductsSeter={orderProductsSeter} />
      </section>
    </div>
  )
}
