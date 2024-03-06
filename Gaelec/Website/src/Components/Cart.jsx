import { useId, useState, useEffect } from 'react'
import carrito from './../assets/carrito.png'
import './Cart.css'

export function Cart ({ cart = [], orderProductsSeter }) {
  const cartCheckboxId = useId()
  const [sumaTotal, setSumaTotal] = useState(0)
  const [cantidadProductos, setCantidadProductos] = useState(0)
  console.log(cart.length === 0)
  const handleSumar = (product) => {
    const index = cart.findIndex(item => item.name === product.name)
    if (index !== -1) {
      const newOrderProducts = [...cart]
      newOrderProducts[index].cantidad += 1 // Aumenta la cantidad en 1
      orderProductsSeter(newOrderProducts)
    }
  }

  const handleRestar = (product) => {
    const index = cart.findIndex(item => item.name === product.name)
    if (index !== -1 && cart[index].cantidad > 1) {
      const newOrderProducts = [...cart]
      newOrderProducts[index].cantidad -= 1 // Disminuye la cantidad en 1 si es mayor que 1
      orderProductsSeter(newOrderProducts)
    } else if (index !== -1 && cart[index].cantidad === 1) {
      handleRemoved(product) // Llama a la función handleRemoved si la cantidad es 1
    }
  }
  const handleRemoved = (product) => {
    // Encuentra el índice del producto en el carrito
    const index = cart.findIndex(item => item.name === product.name)
    if (index !== -1) {
      // Crea una copia del carrito sin el producto a eliminar
      const newOrderProducts = [...cart]
      newOrderProducts.splice(index, 1)
      // Actualiza el estado del carrito con la nueva lista de productos
      orderProductsSeter(newOrderProducts)
    }
    console.log(cart)
  }

  useEffect(() => {
    // Calcula la suma total
    const total = cart.reduce((acc, product) => acc + (product.precio * product.cantidad), 0)
    setSumaTotal(total)
  }, [cart])
  useEffect(() => {
    // Calcula la cantidad de productos en el carrito
    setCantidadProductos(cart.length)
  }, [cart])

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <a>
          <b>Carrito de compras</b>
          {cantidadProductos !== 0 && <span className='span-notificacion'>{cantidadProductos}</span>}
          <img src={carrito} alt='Carrito de compras' />
        </a>
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        {(cart !== undefined && cart.lenght !== 0) &&
          <ul>
            {cart.map(product => (
              <li key={product.name}>
                <img src={`/src/assets/${product.imagen}`} alt={` Imagen ilustrativa del producto: ${product.name}`} />
                <strong>{product.name}</strong>
                <span>${product.precio}</span>
                <span className='cart-footer'>{product.cantidad}
                  <button onClick={() => handleSumar(product)}>➕</button>
                  <button onClick={() => handleRestar(product)}>➖</button>
                </span>
                <button className='button-remover' onClick={() => handleRemoved(product)}>
                  ✖️
                </button>
              </li>
            ))}
          </ul>}
        {cart.length === 0 && (<h5 style={{ color: '#000' }}>No hay productos agregados al carrito</h5>)}
        {cart.length !== 0 &&
          <div style={{ display: 'flex', justifyContent: 'space-between', height: '3rem', alignItems: 'center' }}>
            <strong>Total: ${sumaTotal}</strong>
            <button className='button-Comprar'>Comprar</button>
          </div>}
      </aside>
    </>
  )
}
