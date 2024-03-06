export function fetchDataAndSaveToFile () {
  fetch('https://fakestoreapi.com/products?limit=20')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(products => {
      const formattedProducts = products.map((product, index) => ({
        _id: index + 1,
        name: product.title,
        tipo: product.category,
        stock: true,
        precio: product.price,
        imagen: product.image,
        description: product.description
      }))
      const data = { Products: formattedProducts }
      console.log(data)
    })
}
