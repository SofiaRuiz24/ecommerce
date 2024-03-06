import React from 'react'
// import { useCart } from '../hooks/useCart.js'

export function ProductCard ({ product, orderProducts, orderProductsSeter }) {
  const imgUrl = `/src/assets/${product.imagen}`
  // const { addToCart, cart } = useCart()

  const handleAddCart = (product) => {
    // Busca el índice del producto en el carrito
    const index = orderProducts.findIndex(item => item.name === product.name)
    if (index !== -1) {
    // Si el producto ya está en el carrito, aumenta la cantidad
      const newOrderProducts = [...orderProducts]
      newOrderProducts[index].cantidad += 1
      orderProductsSeter(newOrderProducts)
    } else {
    // Si el producto no está en el carrito, agrégalo con cantidad 1
      orderProductsSeter([...orderProducts,
        { name: product.name, precio: product.precio, imagen: product.imagen, cantidad: 1 }])
    }
  }

  return (
    <div className='cardProduct'>
      <img src={imgUrl} alt={` Imagen ilustrativa del producto: ${product.name}`} />
      <p><b>{product.name}</b></p>
      <strong>${product.precio}</strong>
      <button onClick={() => handleAddCart(product)}>Agregar al Carro</button>
    </div>
  )
}
