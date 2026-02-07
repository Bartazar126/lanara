import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image 
            src="/images/hero-bg.webp"
            alt="Paris Louvre Museum Background"
            fill
            className="object-cover"
            priority
         />
         {/* Overlay to ensure text readability if needed, though glassmorphism handles it mostly */}
         <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
            {/* Glassmorphism Card */}
            <div className="bg-[#8b9dc3]/80 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-2xl border border-white/20 animate-slide-in-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
                DISCOVER & BOOK TOP <br />
                PARIS ATTRACTIONS
                </h1>
                <p className="text-base md:text-lg text-white mb-8 leading-relaxed drop-shadow-sm font-medium">
                Explore world-famous landmarks like the Louvre, Eiffel Tower, and scenic boat cruises – all with just a few clicks.
                </p>
                <div>
                <Link 
                    href="#product-list" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#24298e] hover:bg-[#4cae4c] text-white text-lg font-bold rounded-md transition-all shadow-lg hover:shadow-xl uppercase tracking-wider group"
                >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                    Book Tickets
                </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
