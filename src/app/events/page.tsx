// app/products/page.tsx

import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string // New field for product image
}

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    description: 'This is product 1.',
    image: '/dream.webp', // Example image path
  },
  {
    id: 2,
    name: 'Product 2',
    price: 49.99,
    description: 'This is product 2.',
    image: '/hiphop.webp',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 19.99,
    description: 'This is product 3.',
    image: '/images/product3.jpg',
  },
]

export default function ProductsPage() {
  return (
    <div className="p-4 h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 p-4 rounded-lg shadow-sm">
            {/* Display the product image */}
            <Link href={`/products/${product.id}`}></Link>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
