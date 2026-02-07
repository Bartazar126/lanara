import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - AccessToParis.com',
  description: 'Get in touch with AccessToParis.com. Customer support via email and live chat for your Paris attraction tickets.',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
          
          <div className="space-y-6">
            <p className="text-gray-600 text-lg text-center mb-8">
              Have questions about your tickets? Our support team is here to help!
            </p>
            
            <div className="bg-blue-50 p-6 rounded-md border border-blue-100">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Email Support</h2>
              <p className="text-blue-700 mb-4">
                For any inquiries, please email us at:
              </p>
              <a href="mailto:info@accesstoparis.com" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
                info@accesstoparis.com
              </a>
              <p className="text-sm text-blue-600 mt-2">
                We aim to respond within 24 hours.
              </p>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-4">
                Before contacting us, please check our FAQ section for quick answers to common questions about ticket delivery, cancellations, and more.
              </p>
              <a href="/#faq" className="text-orange-500 font-medium hover:text-orange-600">
                View FAQ &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
