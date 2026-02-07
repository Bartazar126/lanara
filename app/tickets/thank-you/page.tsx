import Image from 'next/image';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cruise.webp"
          alt="Paris Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#24298e]/80 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center space-y-8 max-w-3xl">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo-white.webp"
              alt="Access To Paris"
              width={200}
              height={67}
              className="h-auto w-48 md:w-64 mx-auto"
            />
          </Link>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">
          Thank you for your booking!
        </h1>

        {/* Subtext */}
        <div className="space-y-2 text-lg md:text-xl font-medium opacity-90">
          <p>Your <span className="font-bold">reservation</span> has been successfully received.</p>
          <p>A confirmation email has just been sent to your inbox.</p>
        </div>

        {/* Sections Container */}
        <div className="space-y-8 mt-12">
            {/* What's Next */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                    <span className="text-3xl">📩</span> What’s next?
                </h2>
                <ul className="space-y-2 text-base md:text-lg opacity-90 list-none">
                    <li>• Check your email for your details and confirmation.</li>
                    <li>• Please arrive on time for your selected slot.</li>
                    <li>• Show your ticket (printed or digital) at the entrance.</li>
                </ul>
            </div>

            {/* Plan Next Adventure */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                    <span className="text-3xl">🔁</span> Plan your next adventure
                </h2>
                <div className="space-y-2 text-base md:text-lg opacity-90">
                    <p>Find all our tickets on the main page.</p>
                    <p>Thank you for booking with us!</p>
                </div>
            </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
            <Link 
                href="/"
                className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-[#24298e] transition-colors uppercase tracking-wider"
            >
                ← Back to the main page
            </Link>
        </div>
      </div>
    </div>
  );
}
