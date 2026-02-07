import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050528] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Column 1: Logo & Intro (Left side, wider) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-white.webp"
                alt="access to Paris white logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white leading-relaxed max-w-sm">
              Customer-focused ticketing for Paris attractions: better prices, faster checkout, happier travelers.
            </p>
          </div>

          {/* Column 2: Tickets */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider pb-2 border-b border-[#d13737]/70 inline-block pr-12 text-white">Tickets</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tickets/eiffel-tower-tickets" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Eiffel Tower Tickets
                </Link>
              </li>
              <li>
                <Link href="/tickets/louvre-museum-tickets" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Louvre Museum Tickets
                </Link>
              </li>
              <li>
                <Link href="/tickets/seine-river-cruise-tickets" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Seine River Cruise Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider pb-2 border-b border-[#d13737]/70 inline-block pr-12 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-white">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@accesstoparis.com" className="hover:text-gray-300 transition-colors">
                  info@accesstoparis.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Links */}
        <div className="text-center md:text-left text-xs text-white/80 mb-8">
            <span className="mr-4">2025 &copy; - All rights reserved!</span>
            <Link href="/privacy-policy" className="hover:text-white mr-4">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-white mr-4">Cookie Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</Link>
        </div>

        {/* Important Notice Box */}
        <div className="bg-[#8ea6db] text-white p-6 rounded-2xl text-xs md:text-sm leading-relaxed text-justify shadow-inner font-medium bg-opacity-90">
             <p>
             <strong>Important notice:</strong> We are an independent ticket reseller and experience provider. This website is <strong>not affiliated with, sponsored by, authorized by, or operated by</strong> the <strong>Louvre Museum</strong>, the <strong>Eiffel Tower/SETE</strong>, or <strong>Bateaux Parisiens</strong>. Tickets are sourced via authorized channels. Prices shown may include a <strong>reseller service fee</strong> (e.g., for early availability, secure processing, customer support, and digital materials such as guides). Trademarks, logos, and brand names remain the property of their respective owners and are used <strong>for identification purposes only</strong>, without any intent to imply endorsement.
             </p>
        </div>
      </div>
    </footer>
  );
}
