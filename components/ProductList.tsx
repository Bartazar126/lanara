import ProductCard from './ProductCard';
import productsData from '@/data/products.json';

export default function ProductList() {
  return (
    <div className="relative" id="product-list">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-full z-20">
        <svg 
            className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 100" 
            preserveAspectRatio="none"
        >
            <path 
                className="fill-white" 
                d="M0,80 C320,130 420,0 720,50 C1080,100 1120,0 1440,30 V100 H0 Z"
            ></path>
        </svg>
      </div>

      <section className="pb-16 pt-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#24298e] mb-4">Choose your attraction ticket!</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
