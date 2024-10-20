// app/products/page.tsx

import Link from 'next/link'

interface Product {
  id: number
  name: string
  description: string
  image: string // New field for product image
}

const products: Product[] = [
  {
    id: 1,
    name: 'American Dream',
    description: 'LaRandom',
    image: '/dream.webp', // Example image path
  },
  {
    id: 2,
    name: 'Hip Hop Culture',
    description: 'LaRandom',
    image: '/hiphop.webp',
  },
  {
    id: 3,
    name: 'Miami Vice 80´s',
    description: 'LaRandom',
    image: '/miami.png',
  },
]

export default function ProductsPage() {
  return (
    <div className="p-4 h-screen bg-slate-100">
      <h1 className="text-3xl font-bold mt-10 mb-10 text-center text-black">Descubre Nuestros Eventos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 p-4 rounded-lg shadow-sm  bg-gradient-to-r from-orange-300 to-rose-300">
            {/* Display the product image */}
            <Link href={`/events/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            </Link>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-slate-800 mb-4 text-xl">{product.description}</p>
          
          </div>
        ))}
      </div>
    </div>
  )
}
