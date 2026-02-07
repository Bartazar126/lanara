import Image from 'next/image';
import { notFound } from 'next/navigation';
import productsData from '@/data/products.json';
import Link from 'next/link';

export default function ProductDetail({ id }: { id: string }) {
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:flex">
          {/* Image Section */}
          <div className="lg:w-1/2 relative h-96 lg:h-auto">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="mb-6">
               <Link href="/" className="text-sm text-gray-500 hover:text-orange-500 mb-4 inline-block">
                 &larr; Back to all tickets
               </Link>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <div className="flex items-baseline space-x-3 mb-6">
                <span className="text-4xl font-bold text-green-600">€{product.price.toFixed(2)}</span>
                <span className="text-xl text-gray-500 line-through">€{product.originalPrice.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Highlights:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-4 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Book Ticket Now
            </button>
            
            <p className="mt-4 text-center text-sm text-gray-500">
              Instant confirmation • Mobile ticket • Free cancellation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
