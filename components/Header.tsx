'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isTicketsOpen, setIsTicketsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.webp"
            alt="access to Paris"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-green-600 uppercase tracking-wide border-b-2 border-transparent hover:border-green-600 pb-1 transition-colors">
            Home
          </Link>
          
          <div className="relative group">
            <button 
              className="flex items-center text-sm font-semibold text-gray-700 hover:text-green-600 uppercase tracking-wide focus:outline-none pb-1"
              onMouseEnter={() => setIsTicketsOpen(true)}
              onMouseLeave={() => setIsTicketsOpen(false)}
            >
              Tickets
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown */}
            <div 
              className="absolute left-0 mt-0 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block"
            >
              <div className="py-1">
                <Link href="/tickets/eiffel-tower-tickets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600">
                  Eiffel Tower Tickets
                </Link>
                <Link href="/tickets/louvre-museum-tickets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600">
                  Louvre Museum Tickets
                </Link>
                <Link href="/tickets/seine-river-cruise-tickets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600">
                  Seine River Cruise Tickets
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#faq" className="text-sm font-semibold text-gray-700 hover:text-green-600 uppercase tracking-wide pb-1 transition-colors">
            FAQ
          </Link>

          <Link href="/contact" className="text-sm font-semibold text-gray-700 hover:text-green-600 uppercase tracking-wide pb-1 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right Side: CTA & Lang */}
        <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/#tickets" 
              className="bg-[#24298e] hover:bg-[#1a1e6e] text-white px-6 py-2 rounded-md font-bold uppercase text-sm flex items-center shadow-md transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              Tickets
            </Link>

            <div className="border border-gray-300 rounded px-2 py-1 flex items-center space-x-2">
                 <span className="text-xl">🇺🇸</span>
            </div>
        </div>
        
        {/* Mobile Menu Button (Simplified) */}
        <div className="md:hidden">
            <button className="text-gray-700 p-2">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
      </div>
    </header>
  );
}
