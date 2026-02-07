interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  title?: string;
  text: string;
}

interface ReviewsSectionProps {
  reviews?: Review[];
}

export default function ReviewsSection({ reviews: customReviews }: ReviewsSectionProps) {
  const defaultReviews = [
    {
      id: 1,
      name: "Israel Hernandez",
      date: "2025.11.20.",
      rating: 5,
      title: "The Best €35 I've Ever Spent!",
      text: "The booking process was so efficient, I got the e-ticket seconds after I hit 'pay.' That quick confirmation felt great. The place is HUGE, plan your route or you'll just wander aimlessly (like I did for a while). 🙂"
    },
    {
      id: 2,
      name: "Anu Kukreja",
      date: "2025.11.20.",
      rating: 5,
      title: "Amazing experience",
      text: "Mio marito ha quasi sbagliato a prenotare l'orario, ma il sistema era così chiaro che ci ha corretto subito. Biglietto ricevuto immediatamente via email. Nonostante i selfie-stick ovunque, è stato pazzesco"
    },
    {
      id: 3,
      name: "Anamaria Condria",
      date: "2025.11.18.",
      rating: 4,
      title: "Simple booking",
      text: "Mi sono persa nei sotterranei! La parte burocratica, la prenotazione, è stata una passeggiata. Semplicissima e biglietto immediato. L'ho fatto in 3 minuti. Il museo è una meraviglia, ma i cartelli potrebbero essere più chiari. Ottimi i servizi igienici!"
    }
  ];

  const reviews = customReviews || defaultReviews;

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-[#24298e]">Reviews</h3>
        <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
                {'★'.repeat(5)}
            </div>
            <span className="font-bold text-gray-900">4.5/5</span>
            <span className="text-gray-500 text-sm">({reviews.length * 19} reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#24298e]/10 rounded-full flex items-center justify-center text-[#24298e] font-bold mr-3">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                <div className="flex text-yellow-400 text-xs">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </div>
              <span className="ml-auto text-xs text-gray-400">{review.date}</span>
            </div>
            {review.title && <h5 className="font-bold text-gray-800 mb-2">{review.title}</h5>}
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="text-[#24298e] font-bold hover:underline">
            Load more reviews
        </button>
      </div>
    </section>
  );
}
