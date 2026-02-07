'use client';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

export default function FAQSection({ faqs: customFaqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultFaqs = [
    {
      question: "WHAT PAYMENT METHODS ARE ACCEPTED?",
      answer: "Credit/debit cards and other major online payment options."
    },
    {
      question: "HOW WILL I RECEIVE MY TICKET?",
      answer: "Tickets are sent by email as PDF attachments."
    },
    {
      question: "HOW LONG DOES DELIVERY TAKE?",
      answer: "You receive your ticket immediately after payment."
    },
    {
      question: "WHAT SHOULD I DO IF I DON’T RECEIVE MY TICKET?",
      answer: "Contact our support team by email or the live chat feature."
    },
    {
      question: "ARE TICKETS REFUNDABLE OR CHANGEABLE?",
      answer: "We offer free cancellation up to 24 hours before the scheduled time. After this period, tickets are non-refundable."
    },
    {
      question: "WHO DO I CONTACT WITH QUESTIONS?",
      answer: "Our customer support team via E-mail or Live Chat."
    },
    {
      question: "DO I NEED TO PRINT MY TICKET?",
      answer: "A mobile QR code is usually sufficient."
    },
    {
      question: "ARE GROUP DISCOUNTS AVAILABLE?",
      answer: "Yes, for larger groups upon request."
    }
  ];

  const faqs = customFaqs || defaultFaqs;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Title */}
            <div className="lg:col-span-3 text-right lg:text-right">
                <h2 className="text-4xl font-bold text-[#24298e] uppercase tracking-wide">FAQ</h2>
            </div>

            {/* Right Column: Questions */}
            <div className="lg:col-span-9">
                <div className="border-t-2 border-[#d13737]">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b-2 border-[#d13737]">
                            <button 
                                onClick={() => toggleAccordion(index)}
                                className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
                            >
                                <span className="text-[#24298e] font-bold text-sm md:text-base uppercase tracking-wide group-hover:text-[#1a1e6e] transition-colors">
                                    {faq.question}
                                </span>
                                <span className="text-[#24298e] text-2xl font-bold ml-4">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
