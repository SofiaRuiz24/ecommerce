import { ProductCard } from './ProductCard'
// import productJson from './../assets/mocks/products.json'

export function TiendaProductos ({ eshop, products, orderProducts, orderProductsSeter }) {
  const productsList = products
  const hasProducts = productsList?.length > 0
  return (
    <section className='productosRiel'>
      {eshop ? null : <h3>Ultimas Entradas</h3>}
      <div id='rielProd'>
        {hasProducts
          ? (productsList.length <= 4 || eshop
              ? (
                <>
                  {productsList.map(product => (
                    <ProductCard className='cont-product-card' product={product} key={product._id} orderProducts={orderProducts} orderProductsSeter={orderProductsSeter} />
                  )
                  )}
                </>
                )
              : (
                <>
                  {productsList.slice(-4).map(product => (
                    <ProductCard className='cont-product-card' product={product} key={product._id} orderProducts={orderProducts} orderProductsSeter={orderProductsSeter} />
                  )

                  )}
                </>
                )
            )
          : (<p> No se han encontrado productos en la tienda </p>)}
      </div>
    </section>
  )
}
