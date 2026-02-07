import BookingWidget from '@/components/BookingWidget';
import FAQSection from '@/components/FAQSection';
import ProductGallery from '@/components/product/ProductGallery';
import ReviewsSection from '@/components/product/ReviewsSection';
import Image from 'next/image';

export default function EiffelPage() {
  const images = [
    '/images/eiffel.webp',
    '/images/eiffel.webp', // Placeholder for more images
    '/images/eiffel.webp',
    '/images/eiffel.webp',
    '/images/eiffel.webp',
  ];

  return (
    <div className="bg-white min-h-screen pt-8 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
             <a href="/" className="text-gray-500 hover:text-[#24298e] text-sm flex items-center">
                ← Back to Home
             </a>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Top Section: Gallery + Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Gallery */}
                <div>
                    <ProductGallery images={images} />
                </div>

                {/* Right: Product Details */}
                <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-[#24298e] mb-1">Eiffel Tower Tickets</h1>
                    <h2 className="text-lg font-bold text-[#d13737] mb-3">Discover the Eiffel Tower – The Soul of Paris in Iron and Light</h2>
                    
                    <div className="flex items-center mb-6">
                        <div className="flex text-yellow-400 text-lg mr-2">★★★★★</div>
                        <span className="text-gray-500 text-sm">(42 reviews)</span>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2">Get Your Eiffel Tower Tickets with Ease</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        No trip to Paris is complete without visiting its most iconic landmark. Secure your tickets to the Eiffel Tower and step onto its legendary iron structure, explore immersive exhibits, and take in breathtaking views over the City of Light. By day, admire Paris in all its grandeur; by night, marvel at the sparkling lights of the tower itself. Whether you’re here for romance, history, or adventure, the Eiffel Tower promises a magical experience you’ll never forget.
                    </p>

                    <div className="flex items-baseline mb-6">
                        <span className="text-[#24298e] font-bold text-xl mr-2">Now only:</span>
                        <span className="text-[#24298e] font-bold text-3xl">€ 25,00</span>
                    </div>

                    <a href="#booking-widget" className="block w-full bg-[#4cae4c] hover:bg-[#3d8b3d] text-white font-bold py-4 px-6 rounded-md text-center uppercase tracking-wide shadow-md transition-colors mb-8">
                        Check Availability
                    </a>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-[#24298e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Free cancellation
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-[#24298e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            Instant confirm
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-[#24298e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            Mobile ticket
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-[#24298e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Flexible hours
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-gray-100" />

            {/* What's Included */}
            <div>
              <h3 className="text-xl font-bold text-[#24298e] mb-4">What’s included with our Eiffel Tower tickets?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Tickets for Second floor of the Eiffel Tower",
                  "Admire the city of Paris from the iconic Eiffel Tower and marvel at the significant landmarks",
                  "There is no time limit on how much time you can stay, you can stay as long as you'd like",
                  "Access the Eiffel Tower 2nd floor by stairs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Important Info & Getting There */}
            <div className="space-y-10">
              {/* Important Info Section with Parallax Background */}
              <div 
                className="relative rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/images/eiffel.webp')" }}
              >
                  <div className="absolute inset-0 bg-white/80"></div>
                  
                  <div className="relative z-10 p-8">
                      <h3 className="text-xl font-bold text-[#24298e] mb-6">Eiffel Tower Tickets - Important Information</h3>
                      
                      <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2 underline decoration-[#24298e] decoration-2 underline-offset-4">Opening Hours:</h4>
                            <p className="text-sm text-gray-800 font-medium mb-1">
                                <strong>Open every day of the year</strong>
                            </p>
                            <p className="text-sm text-gray-700">
                                Summer: 9:00 AM – 12:45 AM (last elevator ascent at 11:45 PM)<br/>
                                Winter: 9:30 AM – 11:45 PM (last elevator ascent at 10:30 PM)
                            </p>
                        </div>
                        
                        <div className="text-sm text-gray-700 space-y-3">
                            <p>
                                The tower is fully accessible for people with reduced mobility (to the second floor only via elevator). Elevators operate regularly and there are priority access lanes for those with special needs. <strong>Please note: We only sell stair tickets to the 2nd floor.</strong>
                            </p>
                            <p>
                                Photography is allowed throughout, and there are designated picnic zones near the Champ de Mars. Visitors are encouraged to travel light, as security checks are strict.
                            </p>
                        </div>
                      </div>
                  </div>
              </div>
              
              {/* Getting There Section with Map */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left: Info */}
                  <div>
                    <h3 className="text-3xl font-bold text-[#24298e] mb-2">Getting There</h3>
                    <p className="text-gray-600 mb-8">Address: Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France</p>
                    
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">M</div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">Metro</h4>
                                <p className="text-gray-600">Bir-Hakeim (Line 6), Trocadéro (Lines 6 and 9)</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">RER</div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">RER</h4>
                                <p className="text-gray-600">Line C, Station Champ de Mars – Tour Eiffel</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">BUS</div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">BUS</h4>
                                <p className="text-gray-600">Lines 42, 69, 82, 87</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">CAR</h4>
                                <p className="text-gray-600">Underground parking at Quai Branly or Tour Maubourg</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                         <a href="https://maps.app.goo.gl/P8Z8Q5Z8Q5Z8Q5Z8" target="_blank" className="inline-block bg-[#8ea6db] text-white font-bold py-3 px-8 rounded hover:bg-[#7b95cc] transition-colors uppercase text-sm shadow-md">
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                Open in Google Maps
                            </span>
                         </a>
                    </div>
                  </div>

                  {/* Right: Map Embed */}
                  <div className="h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.749045769536!2d2.29229261567447!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647526384726!5m2!1sen!2sfr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
              </div>
            </div>

            {/* Booking Section */}
            <div className="py-8" id="booking-widget">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#24298e] text-center mb-8">Get your Eiffel Tower Tickets</h2>
                <div className="max-w-3xl mx-auto">
                    <BookingWidget basePrice={25.00} />
                </div>
            </div>

            <hr className="border-gray-100" />

            {/* Detailed Content Sections */}
            <div className="space-y-10 text-gray-600 leading-relaxed">
                
                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">The Eiffel Tower: A Monument of Innovation, Elegance, and National Identity</h2>
                    <p className="mb-4">
                        The Eiffel Tower, or La Tour Eiffel, stands not only as the most recognizable symbol of Paris but as a universal emblem of architectural ingenuity and cultural pride. Located on the Champ de Mars beside the River Seine, this iron lattice tower has captivated visitors from around the world since its completion in 1889. Welcoming nearly seven million visitors annually, the Eiffel Tower is a beacon of modern engineering, an artistic marvel, and a beloved landmark that defines the Parisian skyline.
                    </p>
                </section>

                <section 
                    className="relative rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-fixed bg-cover bg-center p-8"
                    style={{ backgroundImage: "url('/images/eiffel.webp')" }}
                >
                    <div className="absolute inset-0 bg-white/90"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-[#24298e] mb-4">Origins and Historical Evolution</h2>
                        <div className="float-right ml-6 mb-4 w-full md:w-1/2">
                            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                                <Image 
                                    src="/images/eiffel.webp" 
                                    alt="Eiffel Tower History" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <p className="mb-4">
                            The Eiffel Tower was conceived as the centerpiece for the 1889 Exposition Universelle (World’s Fair), held to commemorate the centennial of the French Revolution. Gustave Eiffel, a renowned engineer, spearheaded the project despite early public criticism. Designed by Maurice Koechlin and Émile Nouguier, the tower was initially met with skepticism, with detractors calling it an eyesore. Yet by the time of its unveiling, it was celebrated as a technological triumph.
                        </p>
                        <p className="mb-4">
                            Constructed in just over two years using 18,038 individual iron parts and 2.5 million rivets, the tower stood as the tallest man-made structure in the world until New York’s Chrysler Building overtook it in 1930. Originally intended to be dismantled after 20 years, its utility as a radio transmission tower secured its permanence in the Parisian landscape.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 italic mb-2">Architecture and Layout</h3>
                        <p className="mb-4">
                            Standing at 330 meters (1,083 feet) tall, the Eiffel Tower comprises three visitor-accessible levels. The first floor features immersive exhibitions, a glass walkway, and dining facilities. The second floor offers panoramic views of Paris and elegant restaurants. The summit, accessible by elevator only, includes Gustave Eiffel’s reconstructed office and the highest observation point in the European Union.
                        </p>
                        <p>
                            Its intricate lattice design not only provides structural strength but also imparts an airy lightness that defies the mass of 7,300 tons of iron. Constant maintenance, including regular repainting every seven years, keeps the structure rust-free and resplendent.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">Cultural Significance and Legacy</h2>
                    <p className="mb-4">
                        Beyond its architectural allure, the Eiffel Tower has served a multitude of functions: a scientific observatory, a military radio tower, and a symbol of resistance during both World Wars. It has inspired countless artists, filmmakers, and writers, and remains a source of national pride for the French people.
                    </p>
                    <p>
                        The tower has also become a central site for cultural events, including light shows, New Year’s Eve celebrations, and international commemorations. It is often lit in colors that support global causes or express solidarity with other nations.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">Visitor Experience</h2>
                    <p className="mb-4">
                        Exploring the Eiffel Tower is a multi-sensory experience. Visitors can ascend via elevators or stairs to the second floor. Each level provides increasingly breathtaking views of the Paris skyline, with landmarks such as the Seine, Sacré-Cœur, Notre-Dame Cathedral, and the Arc de Triomphe visible in every direction.
                    </p>
                    <p>
                        The tower also features exhibitions, dining options, and boutiques, all designed to enhance the visitor experience. Evening visits offer the added magic of the tower’s illumination, culminating in a sparkling light show that occurs every hour after nightfall.
                    </p>
                </section>

                <section 
                    className="relative rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-fixed bg-cover bg-center p-8"
                    style={{ backgroundImage: "url('/images/eiffel.webp')" }}
                >
                    <div className="absolute inset-0 bg-white/90"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-[#24298e] mb-4">Modernization and Digital Integration</h2>
                        <div className="float-left mr-6 mb-4 w-full md:w-1/2">
                            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                                <Image 
                                    src="/images/eiffel.webp" 
                                    alt="Eiffel Tower Modern View" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <p className="mb-4">
                            While its foundation is rooted in 19th-century engineering, the Eiffel Tower continues to evolve with the times. A comprehensive digital platform allows guests to book tickets online, access historical content, and take virtual tours. During the pandemic, the tower’s online presence ensured its continued role as a cultural touchstone.
                        </p>
                        <p className="mb-4">
                            Ongoing sustainability initiatives, including LED lighting and waste reduction programs, highlight the tower’s commitment to responsible tourism.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 italic mb-2">A Tower of Timeless Appeal</h3>
                        <p className="mb-4">
                            The Eiffel Tower is more than a monument—it is a living symbol of progress, resilience, and artistry. Whether viewed from a nearby park bench or gazed upon from atop its summit, the tower offers every visitor a profound sense of wonder. It is a place where romance meets reason, where engineering meets emotion, and where Paris speaks to the world in iron and light.
                        </p>
                        <p className="italic border-l-4 border-[#24298e] pl-4 py-2 bg-gray-50 rounded-r-lg">
                            As Gustave Eiffel once said, “I ought to be jealous of the tower. She is more famous than I am.” Indeed, the Eiffel Tower continues to inspire awe across generations and borders, proving that great design can transcend time.
                        </p>
                    </div>
                </section>

            </div>

            <hr className="border-gray-100" />

            {/* Reviews */}
            <ReviewsSection />

            <hr className="border-gray-100" />

            {/* FAQ */}
            <FAQSection />

        </div>
      </div>
    </div>
  );
}
