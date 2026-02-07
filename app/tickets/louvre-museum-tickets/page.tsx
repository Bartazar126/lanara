import BookingWidget from '@/components/BookingWidget';
import FAQSection from '@/components/FAQSection';
import ProductGallery from '@/components/product/ProductGallery';
import ReviewsSection from '@/components/product/ReviewsSection';
import Image from 'next/image';

export default function LouvrePage() {
  const images = [
    '/images/louvre.webp',
    'https://accesstoparis.com/wp-content/uploads/2025/08/officialparistickets-louvre-museum-tickets-1.webp',
    'https://accesstoparis.com/wp-content/uploads/2025/08/officialparistickets-louvre-museum-tickets-2.webp',
    'https://accesstoparis.com/wp-content/uploads/2025/08/officialparistickets-louvre-museum-tickets-3.webp',
    'https://accesstoparis.com/wp-content/uploads/2025/08/officialparistickets-louvre-museum-tickets-4.webp',
    'https://accesstoparis.com/wp-content/uploads/2025/08/officialparistickets-louvre-museum-tickets-5.webp',
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
            
            {/* Header Area */}
            <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#24298e] mb-2">Louvre Museum Tickets</h1>
                <p className="text-lg text-gray-600 font-medium">Discover the World’s Most Famous Museum – The Louvre</p>
                
                <div className="flex items-center mt-4 space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                        <span className="text-yellow-400 text-lg mr-1">★★★★½</span>
                        <span className="underline decoration-gray-300">56 reviews</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Paris, France
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <ProductGallery images={images} />

            {/* Overview / Description */}
            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
              <p>
                Step inside the world’s most famous museum and experience a journey through art and history. Secure your Louvre tickets with us and enjoy easy access to over 35,000 masterpieces under one roof. Marvel at the mysterious Mona Lisa, admire the timeless beauty of the Venus de Milo, and explore ancient treasures from Egypt, Greece, and Rome. Stroll through magnificent galleries filled with Renaissance icons and French classics that have inspired generations. Whether you’re visiting Paris for the first time or you’re a true art lover, the Louvre promises an unforgettable cultural adventure in the heart of the city.
              </p>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-xl font-bold text-[#24298e] mb-4">What’s included with our Louvre Museum tickets?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Access to the Permanent Collections",
                  "Entry to Temporary Exhibitions",
                  "Access to the Louvre’s Interior Courtyards and Glass Pyramid",
                  "Free Access for Under-18s",
                  "Tickets Delivered Instantly",
                  "Guaranteed Entry",
                  "24/7 Live Chat Support"
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
                style={{ backgroundImage: "url('/images/louvre.webp')" }}
              >
                  <div className="absolute inset-0 bg-white/80"></div>
                  
                  <div className="relative z-10 p-8">
                      <h3 className="text-xl font-bold text-[#24298e] mb-6">Louvre Museum Tickets - Important Information</h3>
                      
                      <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2 underline decoration-[#24298e] decoration-2 underline-offset-4">Opening Hours:</h4>
                            <p className="text-sm text-gray-800 font-medium mb-1">
                                <strong>Open every day except Tuesdays</strong>
                            </p>
                            <p className="text-sm text-gray-700">
                                Monday, Thursday, Saturday, Sunday: 9 AM – 6 PM<br/>
                                Friday: 9 AM – 9:45 PM
                            </p>
                        </div>
                        
                        <div className="text-sm text-gray-700 space-y-3">
                            <p>
                                The Louvre is fully accessible for visitors with reduced mobility. Wheelchairs are available on loan, and all floors can be accessed via elevators or lifts.
                            </p>
                            <p>
                                Eating and drinking are only allowed in designated areas. There are several cafés inside the museum including Café Richelieu and Café Mollien.
                            </p>
                            <p>
                                Weekday mornings or Friday evenings tend to be less crowded. Avoid weekends and holidays for a more peaceful visit.
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
                    <p className="text-gray-600 mb-8">Address: Rue de Rivoli, 75001 Paris, France</p>
                    
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">M</div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">Metro</h4>
                                <p className="text-gray-600">Palais Royal – Musée du Louvre (Lines 1 and 7)</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">BUS</div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">BUS</h4>
                                <p className="text-gray-600">Lines 21, 24, 27, 39, 68, 69, 72, 81, 95</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">CAR</h4>
                                <p className="text-gray-600">Underground parking at Carrousel du Louvre (access via Avenue du Général Lemonnier)</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                         <a href="https://maps.app.goo.gl/fZMQoaxudQuynZFN6" target="_blank" className="inline-block bg-[#8ea6db] text-white font-bold py-3 px-8 rounded hover:bg-[#7b95cc] transition-colors uppercase text-sm shadow-md">
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.333857076845336!3d48.86061110070857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sLouvre%20Museum!5e0!3m2!1sen!2sfr!4v1700000000000!5m2!1sen!2sfr" 
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
            <div className="py-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#24298e] text-center mb-8">Get your Louvre Museum Tickets</h2>
                <div className="max-w-3xl mx-auto">
                    <BookingWidget basePrice={35.00} />
                </div>
            </div>

            <hr className="border-gray-100" />

            {/* Detailed Content Sections */}
            <div className="space-y-10 text-gray-600 leading-relaxed">
                
                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">The Louvre Museum: A Monument of Art, History, and Culture</h2>
                    <p className="mb-4">
                        The Louvre Museum, or Musée du Louvre, is not just the most visited museum in the world; it is one of the most iconic cultural institutions in human history. Located in the heart of Paris, on the right bank of the River Seine, the Louvre is a beacon of art, history, architecture, and civilization that draws over ten million visitors each year. Its majestic halls and corridors house more than 35,000 works of art, from prehistoric artifacts to contemporary masterpieces, making it an essential destination for anyone who appreciates the breadth and depth of human creativity.
                    </p>
                </section>

                <section 
                    className="relative rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-fixed bg-cover bg-center p-8"
                    style={{ backgroundImage: "url('https://accesstoparis.com/wp-content/uploads/2025/08/officialparistickets-louvre-museum-tickets-5.webp')" }}
                >
                    <div className="absolute inset-0 bg-white/90"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-[#24298e] mb-4">Origins and Historical Evolution</h2>
                        <div className="float-right ml-6 mb-4 w-full md:w-1/2">
                            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                                <Image 
                                    src="https://accesstoparis.com/wp-content/uploads/2025/08/officialparistickets-louvre-museum-tickets-5.webp" 
                                    alt="Louvre Pyramid at Night" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <p className="mb-4">
                            The origins of the Louvre stretch back to the late 12th century, when it was first constructed as a fortress by King Philip II to protect Paris against potential invasions. Remnants of this original medieval structure can still be seen in the museum’s basement today. In the 16th century, under the reign of Francis I, the fortress was transformed into a royal residence. Francis I was also the monarch responsible for acquiring what would become the museum’s most famous piece: Leonardo da Vinci’s Mona Lisa.
                        </p>
                        <p className="mb-4">
                            The Louvre continued to serve as a royal palace until the late 17th century, when Louis XIV relocated the royal court to the Palace of Versailles. Following the French Revolution, the Louvre was repurposed as a public museum, opening its doors to the public in 1793. From then on, it steadily expanded through the acquisition of artworks via royal collections, war booty, archaeological expeditions, and generous donations.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 italic mb-2">Architecture and Layout</h3>
                        <p className="mb-4">
                            One of the most striking features of the Louvre is its architectural evolution. The complex consists of three main wings: Denon, Sully, and Richelieu, each containing various departments and masterpieces. The museum covers an area of more than 72,000 square meters and boasts one of the most diverse collections in the world.
                        </p>
                        <p>
                            The modern glass pyramid entrance, designed by Chinese-American architect I. M. Pei and inaugurated in 1989, sits in the Cour Napoléon courtyard and has become a globally recognized symbol of the museum. While it initially sparked controversy, the pyramid now seamlessly bridges the museum’s historic grandeur with contemporary aesthetics.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">Collections and Departments</h2>
                    <p className="mb-6 italic font-medium">The Louvre’s collection is divided into eight curatorial departments:</p>
                    
                    <div className="space-y-4">
                        <div>
                            <strong className="text-gray-900 underline decoration-gray-300">Egyptian Antiquities:</strong> This department showcases artifacts from the Nile civilizations, including statues, mummies, jewelry, and everyday items. The Seated Scribe and the Great Sphinx of Tanis are among its most notable exhibits.
                        </div>
                        <div>
                            <strong className="text-gray-900 underline decoration-gray-300">Near Eastern Antiquities:</strong> Spanning Mesopotamia, Persia, and the Levant, this collection includes cuneiform tablets, ceremonial artifacts, and monumental sculptures like the Code of Hammurabi.
                        </div>
                        <div>
                            <strong className="text-gray-900 underline decoration-gray-300">Greek, Etruscan, and Roman Antiquities:</strong> Visitors can explore classical sculptures, pottery, and frescoes, including the Venus de Milo and Winged Victory of Samothrace.
                        </div>
                        <div>
                            <strong className="text-gray-900 underline decoration-gray-300">Islamic Art:</strong> Covering a vast geographical area from Spain to India, the Islamic art collection includes ceramics, textiles, metalwork, and architectural fragments.
                        </div>
                        <div>
                            <strong className="text-gray-900 underline decoration-gray-300">Sculpture:</strong> Non-antique sculpture highlights include works from the medieval period to the 19th century. The department features masterpieces by Michelangelo, Jean-Baptiste Carpeaux, and others.
                        </div>
                        <div>
                            <strong className="text-gray-900 underline decoration-gray-300">Decorative Arts:</strong> This section includes items such as tapestries, furniture, jewelry, and clocks. It offers a vivid glimpse into the opulence of royal courts and noble households.
                        </div>
                        <div>
                            <strong className="text-gray-900 underline decoration-gray-300">Paintings:</strong> The Louvre’s painting collection is among the most important in the world, spanning from the 13th century to 1848. It includes Italian Renaissance, Flemish, Dutch, and French masterpieces. Besides the Mona Lisa, highlights include Eugène Delacroix’s Liberty Leading the People, Géricault’s Raft of the Medusa, and Vermeer’s The Lacemaker.
                        </div>
                        <div>
                            <strong className="text-gray-900 underline decoration-gray-300">Prints and Drawings:</strong> Stored in the Richelieu wing, this department comprises graphic works, sketchbooks, and manuscripts from the Middle Ages to the 19th century. It is accessible by appointment for research purposes.
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">The Mona Lisa and Iconic Works</h2>
                    <p>
                        No visit to the Louvre is complete without seeing the Mona Lisa. Painted by Leonardo da Vinci in the early 16th century, this enigmatic portrait is perhaps the most famous artwork in the world. Housed in a climate-controlled, bulletproof glass case, the painting attracts millions of visitors annually who are drawn to her mysterious smile and captivating gaze.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">Visitor Experience</h2>
                    <p className="mb-4">
                        Navigating the Louvre can be overwhelming due to its vastness. However, the museum provides various amenities to enhance the visitor experience. Maps, audio guides, and themed tours are available in multiple languages. There are also dedicated trails for families, children, and visitors with limited mobility.
                    </p>
                    <p>
                        The Louvre’s underground shopping mall, Carrousel du Louvre, includes boutiques, bookshops, and restaurants. The museum also offers quiet spots and resting areas for visitors who wish to pause and reflect.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">Cultural and Global Significance</h2>
                    <p className="mb-4">
                        The Louvre plays a pivotal role in global art preservation and scholarship. It collaborates with institutions worldwide, lending artworks and expertise. The museum has also taken a leading role in the fight against art trafficking and the restoration of looted artifacts.
                    </p>
                    <p>
                        In recent years, the Louvre has expanded its presence internationally. The Louvre Abu Dhabi, opened in 2017, represents a partnership between France and the United Arab Emirates and is the first universal museum in the Arab world.
                    </p>
                </section>

                <section 
                    className="relative rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-fixed bg-cover bg-center p-8"
                    style={{ backgroundImage: "url('https://accesstoparis.com/wp-content/uploads/2025/08/officialparistickets-louvre-museum-tickets-6-1024x1024.webp')" }}
                >
                    <div className="absolute inset-0 bg-white/90"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-[#24298e] mb-4">Modernization and Digital Access</h2>
                        <div className="float-left mr-6 mb-4 w-full md:w-1/2">
                            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                                <Image 
                                    src="https://accesstoparis.com/wp-content/uploads/2025/08/officialparistickets-louvre-museum-tickets-6-1024x1024.webp" 
                                    alt="Mona Lisa Viewing" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <p className="mb-4">
                            The Louvre embraces technology to reach global audiences. Its website and mobile app offer virtual tours, high-resolution images, and educational resources. During the COVID-19 pandemic, these tools became essential in maintaining public access to its collections.
                        </p>
                        <p className="mb-4">
                            In 2021, the museum launched a comprehensive online catalog, making nearly 500,000 artworks from its collection accessible to the public. This move reinforced the Louvre’s commitment to open access and digital innovation.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 italic mb-2">A Living Monument</h3>
                        <p className="mb-4">
                            The Louvre is not just a museum; it is a living monument to human civilization. With each step through its galleries, visitors journey across continents and centuries. From the silent grandeur of ancient tombs to the bold strokes of Romantic painters, the museum tells the story of who we are, where we have been, and what we value as a species.
                        </p>
                        <p className="mb-4">
                            Whether you are a seasoned art connoisseur or a curious traveler, the Louvre offers an experience that is intellectually enriching, emotionally moving, and visually breathtaking. It is a place where the past and present coexist, where every visitor becomes a part of an ongoing dialogue with history.
                        </p>
                        <p className="italic border-l-4 border-[#24298e] pl-4 py-2 bg-gray-50 rounded-r-lg">
                            In the words of French historian Henri Loyrette, former president-director of the Louvre: “To walk through the Louvre is to walk through time, through the grandeur and turmoil of human imagination.”
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
