import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  features: string[];
  link: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden border-2 border-[#24298e] flex flex-col h-full transform transition-transform hover:-translate-y-1 shadow-sm">
      <div className="relative h-64 w-full m-0">
         <div className="absolute inset-4 rounded-[1.5rem] overflow-hidden shadow-md h-[calc(100%-2rem)] w-[calc(100%-2rem)]">
            <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            />
         </div>
      </div>
      <div className="px-6 pb-6 flex flex-col flex-grow -mt-2">
        {/* Rating Stars */}
        <div className="flex text-[#dea03c] text-lg mb-1">
            {'★'.repeat(5)}
        </div>

        <h3 className="text-xl font-bold text-[#24298e] mb-1">{product.title}</h3>
        <div className="flex items-baseline space-x-2 mb-4">
          <span className="text-xl font-bold text-[#d13737]">€{product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-400 line-through font-bold">€{product.originalPrice.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 mb-6 text-sm flex-grow leading-relaxed">
            {product.description}
        </p>

        {/* Feature Icons Grid (2x2) */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
            <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#24298e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-sm text-[#24298e]">Free cancellation</span>
            </div>
            <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#24298e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span className="text-sm text-[#24298e]">Instant confirm</span>
            </div>
            <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#24298e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                <span className="text-sm text-[#24298e]">Mobile ticket</span>
            </div>
            <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#24298e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-sm text-[#24298e]">Flexible hours</span>
            </div>
        </div>
        
        <div className="mt-auto">
            <Link 
            href={product.link}
            className="flex items-center justify-center w-full bg-[#4cae4c] hover:bg-[#3d8b3d] text-white font-bold py-3 px-4 rounded-md transition-colors uppercase text-sm tracking-wider shadow-md"
            >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v12h12V4H4z" /><path d="M6 7h8v2H6V7zm0 4h8v2H6v-2z" /></svg>
            BOOK YOUR TICKET NOW
            </Link>
        </div>
      </div>
    </div>
  );
}
