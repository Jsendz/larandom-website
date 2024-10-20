// app/products/[id]/page.tsx

import { notFound } from 'next/navigation'

interface Product {
  id: number
  name: string
  description: string
  image: string
}

// Dummy data for products (in a real app, you would fetch this data from an API or database)
const products: Product[] = [
  { id: 1, name: 'American Dream',  description: 'This is product 1.', image: '/dream.webp' },
  { id: 2, name: 'Hip Hop Culture',  description: 'This is product 2.', image: '/hiphop.webp' },
  { id: 3, name: 'Miami Vice 80´s',  description: 'This is product 3.', image: '/miami.png' },
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
    <div className="p-4 h-screen">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-contain rounded-md"
        />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{product.description}</p>
          
        </div>
      </div>
    </div>
  )
}
