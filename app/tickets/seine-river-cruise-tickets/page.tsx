import BookingWidget from '@/components/BookingWidget';
import FAQSection from '@/components/FAQSection';
import ProductGallery from '@/components/product/ProductGallery';
import ReviewsSection from '@/components/product/ReviewsSection';
import Image from 'next/image';

export default function SeineCruisePage() {
  const images = [
    '/images/cruise.webp',
    '/images/cruise.webp', // Placeholder for more images
    '/images/cruise.webp',
    '/images/cruise.webp',
    '/images/cruise.webp',
  ];

  const reviews = [
    {
      id: 1,
      name: "Lennart Tahvo",
      date: "2025.09.29.",
      rating: 5,
      title: "Amazing experience!",
      text: "It was an amazing experience! We wanted to get off at the Notre-Dame, but the boat didn’t stop at any location 🙂 It was my bad, but all-in-all it was a beautiful ride."
    },
    {
      id: 2,
      name: "Keith McGrea",
      date: "2025.09.25.",
      rating: 5,
      title: "Great perspective",
      text: "Booked tickets literally 2mins before they started letting people in. We joined the 7pm cruise/tour and was a great way to spend an hour. Plenty space on the top deck to get fantastic views of the Parisian landmarks! Calm way to check out the city from a different perspective."
    },
    {
      id: 3,
      name: "kim namjoon",
      date: "2025.09.22.",
      rating: 5,
      title: "Incredible view",
      text: "The best food I ate in Paris! especially the salmon, which was exquisite, loved the dish overall lots of good flavor, feels fancy but not too fancy the view was also absolutely incredible! staff was amazing about allergens 🫶🏼"
    },
    {
      id: 4,
      name: "Chloe Foster",
      date: "2025.09.11.",
      rating: 5,
      title: "So romantic!",
      text: "We did the 1-hour evening cruise, and it was perfect! Seeing the Eiffel Tower sparkle from the river is a core memory I’ll never forget. 😀 The boarding was super quick with our online tickets, no problems at all. The boat was comfortable, and the views were just breathtaking."
    },
    {
      id: 5,
      name: "Kerry Bell",
      date: "2025.09.07.",
      rating: 3,
      title: "Nice option for relaxing",
      text: "The line to board was long, and once on the boat, it was very crowded — which I expected, but still, it made the experience feel more touristy than magical. The commentary pointed out all the major landmarks… but honestly, I had already walked by and seen most of them up close. If you’re not very mobile or just want a relaxing view of the city from the water, it’s a nice option."
    },
    {
      id: 6,
      name: "Sheue Lin Ng",
      date: "2025.09.01.",
      rating: 4,
      title: "Beautiful scenery",
      text: "Long queue to go into the ferry. We were able to take the 830pm boat and the scenery was sunset among all Paris iconic buildings. It was beautiful. The ferry will be filled with crowds. But that should not stop you from enjoying yourself."
    },
    {
      id: 7,
      name: "Ives Takemoto",
      date: "2025.08.10.",
      rating: 5,
      title: "Deliver what they offer",
      text: "Good option to do the tour on Seine River. They deliver what they offer. I recommend you to book online in advance (did it in the same day) to get the cruise tour at night. If you want to se the Eiffel Tower illuminated, I recommend you get one that leaves at 21:20. You cannot decide exactly the hour you depart, you have to estimate according to the line."
    }
  ];

  const faqs = [
    {
      question: "Where does the cruise start and end?",
      answer: "It departs and arrives at Port de la Bourdonnais near the Eiffel Tower."
    },
    {
      question: "How long is the cruise?",
      answer: "Approximately one hour."
    },
    {
      question: "Is commentary available during the cruise?",
      answer: "Yes, multilingual audio commentary is provided."
    },
    {
      question: "Can I buy tickets on the spot?",
      answer: "It’s recommended to book in advance, but on-site purchase is possible if seats are available."
    },
    {
      question: "Is the cruise suitable for children?",
      answer: "Yes, it’s family-friendly."
    },
    {
      question: "Are these tickets for dinner cruises?",
      answer: "No, only standard sightseeing cruise tickets are available."
    }
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
                    <h1 className="text-3xl lg:text-4xl font-bold text-[#24298e] mb-1">Seine River Cruise Tickets</h1>
                    <h2 className="text-lg font-bold text-[#d13737] mb-3">Discover Paris from the Water – Bateaux Parisiens Sightseeing Cruise</h2>
                    
                    <div className="flex items-center mb-6">
                        <div className="flex text-yellow-400 text-lg mr-2">★★★★☆</div>
                        <span className="text-gray-500 text-sm">(25 reviews)</span>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2">Get Your Seine River Cruise Tickets</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Glide along the Seine River and take in Paris’s most iconic landmarks from a whole new perspective. On this scenic one-hour Bateaux Parisiens cruise, you’ll sail past the Eiffel Tower, Notre-Dame Cathedral, the Louvre, and more – all from the comfort of a glass-roofed boat. Audio commentary is available in multiple languages, bringing the city’s history to life as you cruise through its heart. A must-do experience for first-time visitors and Paris lovers alike!
                    </p>

                    <div className="flex items-baseline mb-6">
                        <span className="text-[#24298e] font-bold text-xl mr-2">Now only:</span>
                        <span className="text-[#24298e] font-bold text-3xl">€ 19,99</span>
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
              <h3 className="text-xl font-bold text-[#24298e] mb-4">What’s included with our Seine River Cruise Tickets?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "1-hour Sightseeing Cruise",
                  "Audio guide in 14 languages (Sightseeing Cruises)",
                  "Panoramic views from climate-controlled vessels",
                  "Complimentary digital guide via app",
                  "Wheelchair-accessible boarding and seating"
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
                style={{ backgroundImage: "url('/images/cruise.webp')" }}
              >
                  <div className="absolute inset-0 bg-white/80"></div>
                  
                  <div className="relative z-10 p-8">
                      <h3 className="text-xl font-bold text-[#24298e] mb-6">Seine River Cruise Tickets - Important Information</h3>
                      
                      <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2 underline decoration-[#24298e] decoration-2 underline-offset-4">Boarding Location:</h4>
                            <p className="text-sm text-gray-800 font-medium mb-1">
                                Port de la Bourdonnais, 75007 Paris
                            </p>
                            <p className="text-sm text-gray-700">
                                At the foot of the Eiffel Tower, Pier 3
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-2 underline decoration-[#24298e] decoration-2 underline-offset-4">Opening Hours & Departure Times:</h4>
                            <p className="text-sm text-gray-700">
                                Sightseeing Cruises: Depart every 30 minutes (approx.) from 10 AM to 10 PM<br/>
                                (Exact times may vary by season and booking)
                            </p>
                        </div>
                        
                        <div className="text-sm text-gray-700 space-y-3">
                            <p>
                                <strong>Accessibility:</strong> Wheelchair accessible. Please notify staff in advance for assistance. Guide dogs are welcomed.
                            </p>
                            <p>
                                <strong>Dress Code:</strong> Smart casual.
                            </p>
                            <p>
                                <strong>Child Policy:</strong> Children of all ages are welcome. Discounts are often available for children under 12.
                            </p>
                            <p>
                                <strong>Tips for Visitors:</strong>
                            </p>
                            <ul className="list-disc ml-5 mt-1 space-y-1">
                                <li>Arrive 15–30 minutes before departure to ensure timely boarding.</li>
                                <li>Nighttime cruises offer the most spectacular views, especially when the Eiffel Tower sparkles on the hour.</li>
                                <li>Bring a jacket — the river breeze can be chilly even in warmer months.</li>
                            </ul>
                        </div>
                      </div>
                  </div>
              </div>
              
              {/* Getting There Section with Map */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left: Info */}
                  <div>
                    <h3 className="text-3xl font-bold text-[#24298e] mb-2">Getting There</h3>
                    <p className="text-gray-600 mb-8">Address: Port de la Bourdonnais, 75007 Paris, France</p>
                    
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">M</div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">Metro</h4>
                                <p className="text-gray-600">Trocadéro (Lines 6 and 9), Bir-Hakeim (Line 6)</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">RER</div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">RER</h4>
                                <p className="text-gray-600">RER C – Champ de Mars Tour Eiffel</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">BUS</div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">BUS</h4>
                                <p className="text-gray-600">Lines 42, 69, 72, 82, 87</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 border-2 border-[#24298e] text-[#24298e] rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#24298e] text-2xl mb-1">CAR</h4>
                                <p className="text-gray-600">Nearby underground parking available at Quai Branly Tour Eiffel</p>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-[#24298e] text-center mb-8">Get your Seine River Cruise Tickets</h2>
                <div className="max-w-3xl mx-auto">
                    <BookingWidget basePrice={19.99} />
                </div>
            </div>

            <hr className="border-gray-100" />

            {/* Detailed Content Sections */}
            <div className="space-y-10 text-gray-600 leading-relaxed">
                
                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">Bateaux Parisiens: The Quintessential Seine River Cruise Experience</h2>
                    <p className="mb-4">
                        Bateaux Parisiens offers one of the most iconic and enchanting ways to experience Paris — gliding along the Seine River aboard a stylish glass-covered boat. Whether by day or night, a Bateaux Parisiens cruise provides unmatched views of the city’s most famous monuments, from the Eiffel Tower and Notre-Dame Cathedral to the Louvre and Musée d’Orsay. Known for its high-quality service and elegant vessels, Bateaux Parisiens is a must for any visitor looking to combine sightseeing with a touch of Parisian charm.
                    </p>
                </section>

                <section 
                    className="relative rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-fixed bg-cover bg-center p-8"
                    style={{ backgroundImage: "url('/images/cruise.webp')" }}
                >
                    <div className="absolute inset-0 bg-white/90"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-[#24298e] mb-4">Company Overview and Experience</h2>
                        <div className="float-right ml-6 mb-4 w-full md:w-1/2">
                            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                                <Image 
                                    src="/images/cruise.webp" 
                                    alt="Seine River Cruise Experience" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <p className="mb-4">
                            Established in 1956, Bateaux Parisiens has grown into one of Paris’s premier river cruise companies. The fleet includes modern, panoramic boats with climate control, open-air decks, and commentary in multiple languages. Cruises range from relaxed sightseeing tours to gourmet dining experiences featuring fine French cuisine.
                        </p>
                        <p className="mb-4">
                            Departing from the foot of the Eiffel Tower, the cruises offer guests a seamless blend of cultural immersion and comfort. With over 4 million annual passengers, Bateaux Parisiens has become synonymous with luxury river cruising in the heart of the French capital.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 italic mb-2">Cruise Options</h3>
                        <p className="mb-4">
                            Bateaux Parisiens offers several types of cruises to suit different tastes and schedules:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 mb-4">
                            <li><strong>Sightseeing Cruises:</strong> These 1-hour tours provide a comprehensive overview of Paris’s riverside attractions. Available throughout the day, the cruises feature multilingual audio guides and captivating insights into the city’s history and landmarks.</li>
                            <li><strong>Lunch Cruises:</strong> Ideal for a leisurely daytime experience, lunch cruises include a multi-course meal prepared onboard with fresh, seasonal ingredients, all while floating past Parisian icons.</li>
                            <li><strong>Dinner Cruises:</strong> A romantic highlight for many visitors, the evening dinner cruise includes live music, a refined French menu, and the magical sight of Paris illuminated at night.</li>
                            <li><strong>Private Events and Group Bookings:</strong> Bateaux Parisiens also accommodates corporate functions, weddings, and private celebrations with customizable services and private boat rentals.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">The Route and Sights</h2>
                    <p className="mb-4">
                        The cruise route is designed to showcase the very best of Paris. Major sights include:
                    </p>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4 font-medium text-[#24298e]">
                        <li>Eiffel Tower</li>
                        <li>Les Invalides</li>
                        <li>Musée d’Orsay</li>
                        <li>Louvre Museum</li>
                        <li>Notre-Dame Cathedral</li>
                        <li>Conciergerie</li>
                        <li>Grand Palais</li>
                        <li>Pont Alexandre III</li>
                        <li>Institut de France</li>
                    </ul>
                    <p>
                        Depending on the cruise type and length, guests may also enjoy views of charming Parisian bridges like Pont Neuf and Pont des Arts, making the journey a rich cultural and visual experience.
                    </p>
                </section>

                <section 
                    className="relative rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-fixed bg-cover bg-center p-8"
                    style={{ backgroundImage: "url('/images/cruise.webp')" }}
                >
                    <div className="absolute inset-0 bg-white/90"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-[#24298e] mb-4">Modern Amenities and Accessibility</h2>
                        <div className="float-left mr-6 mb-4 w-full md:w-1/2">
                            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                                <Image 
                                    src="/images/cruise.webp" 
                                    alt="Cruise Amenities" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <p className="mb-4">
                            Bateaux Parisiens boats are designed with comfort and convenience in mind. Features include:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 mb-4">
                            <li>Climate-controlled cabins</li>
                            <li>Panoramic glass windows and open-air decks</li>
                            <li>Free Wi-Fi (on select boats)</li>
                            <li>Accessibility for visitors with reduced mobility</li>
                            <li>Multilingual audio guides via mobile app or headphones</li>
                        </ul>
                        
                        <h3 className="text-xl font-bold text-gray-800 italic mb-2 mt-6">Dining Experience</h3>
                        <p className="mb-4">
                            Dining cruises aboard Bateaux Parisiens are renowned for their culinary excellence. Meals are freshly prepared in the onboard kitchen and include options for vegetarians and dietary restrictions upon request. Menus typically consist of:
                        </p>
                        <ul className="list-disc ml-5 space-y-1 mb-4">
                            <li>Starter</li>
                            <li>Main Course</li>
                            <li>Cheese or Dessert</li>
                            <li>Wine or Champagne (depending on package)</li>
                        </ul>
                        <p>
                            All meals are accompanied by impeccable table service and, during dinner cruises, live music to complete the Parisian ambiance.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#24298e] mb-4">Cultural and Romantic Significance</h2>
                    <p className="mb-4">
                        More than just transportation, a cruise with Bateaux Parisiens is a cultural and emotional experience. For many couples, it becomes the setting for a proposal or anniversary celebration. For families and solo travelers, it is a relaxing yet educational way to engage with the city’s history and spirit. As the Seine River itself is a UNESCO World Heritage site, every journey becomes a voyage through time and art.
                    </p>
                </section>

            </div>

            <hr className="border-gray-100" />

            {/* Reviews */}
            <ReviewsSection reviews={reviews} />

            <hr className="border-gray-100" />

            {/* FAQ */}
            <FAQSection faqs={faqs} />

        </div>
      </div>
    </div>
  );
}
