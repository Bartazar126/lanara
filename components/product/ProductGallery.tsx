'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:h-[500px] no-scrollbar py-2 lg:py-0 px-1 lg:px-0">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index 
                ? 'border-[#24298e] shadow-md scale-105' 
                : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'
            }`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-grow h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src={images[selectedImage]}
          alt="Selected product image"
          fill
          className="object-cover"
          priority
        />
        
        {/* Gallery Navigation Arrows (Mobile/Tablet) */}
        <div className="absolute inset-0 flex items-center justify-between p-4 lg:hidden pointer-events-none">
            <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1); }}
                className="pointer-events-auto bg-white/80 p-2 rounded-full shadow-md text-gray-800 hover:bg-white"
            >
                ←
            </button>
            <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1); }}
                className="pointer-events-auto bg-white/80 p-2 rounded-full shadow-md text-gray-800 hover:bg-white"
            >
                →
            </button>
        </div>
      </div>
    </div>
  );
}
