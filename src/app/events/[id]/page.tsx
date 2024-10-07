// app/products/[id]/page.tsx

import { notFound } from 'next/navigation'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

// Dummy data for products (in a real app, you would fetch this data from an API or database)
const products: Product[] = [
  { id: 1, name: 'Product 1', price: 29.99, description: 'This is product 1.', image: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 49.99, description: 'This is product 2.', image: '/images/product2.jpg' },
  { id: 3, name: 'Product 3', price: 19.99, description: 'This is product 3.', image: '/images/product3.jpg' },
]

// Function to find the product by ID
const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id)
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number(params.id) // Extract product ID from URL
  const product = getProductById(productId)

  // If product is not found, display 404
  if (!product) {
    notFound() // This will return a 404 page
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-md"
        />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
