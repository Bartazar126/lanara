'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface TicketCounts {
  adult: number;
  child: number;
  infant: number;
}

interface BookingWidgetProps {
  basePrice?: number;
}

export default function BookingWidget({ basePrice = 35.00 }: BookingWidgetProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [tickets, setTickets] = useState<TicketCounts>({ adult: 0, child: 0, infant: 0 });
  const [date, setDate] = useState<Value>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    confirmEmail: ''
  });

  const prices = {
    adult: basePrice,
    child: 0,
    infant: 0
  };

  const totalPrice = (tickets.adult * prices.adult) + (tickets.child * prices.child);

  const handleTicketChange = (type: keyof TicketCounts, increment: boolean) => {
    setTickets(prev => {
      const newValue = increment ? prev[type] + 1 : Math.max(0, prev[type] - 1);
      return { ...prev, [type]: newValue };
    });
  };

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00"
  ];

  const renderProgressBar = () => (
    <div className="mb-8 px-2">
        {/* Step Indicators */}
        <div className="flex justify-between relative mb-2">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 transform -translate-y-1/2 rounded-full"></div>
            <div 
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#24298e] to-[#4cae4c] -z-10 transform -translate-y-1/2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>

            {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex flex-col items-center">
                    <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 z-10 shadow-sm ${
                            step >= num 
                                ? 'bg-white border-[#4cae4c] text-[#4cae4c] shadow-md scale-110' 
                                : 'bg-white border-gray-200 text-gray-300'
                        }`}
                    >
                        {step > num ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        ) : num}
                    </div>
                </div>
            ))}
        </div>
        
        {/* Step Labels */}
        <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <span className={step >= 1 ? 'text-[#24298e]' : ''}>Tickets</span>
            <span className={`${step >= 2 ? 'text-[#24298e]' : ''} pl-2`}>Date</span>
            <span className={`${step >= 3 ? 'text-[#24298e]' : ''} pl-4`}>Details</span>
            <span className={step >= 4 ? 'text-[#24298e]' : ''}>Done</span>
        </div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-[#24298e]">Select Your Tickets</h3>
                <p className="text-sm text-gray-500">Free cancellation up to 24 hours before visit</p>
            </div>
            
            <div className="space-y-4">
              <div 
                className={`flex justify-between items-center p-5 border-2 rounded-xl transition-all duration-300 cursor-pointer ${
                    tickets.adult > 0 ? 'border-[#4cae4c] bg-green-50/30 shadow-md' : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'
                }`}
                onClick={() => handleTicketChange('adult', true)}
              >
                <div>
                  <div className="font-bold text-gray-900 text-lg">Adult (18+)</div>
                  <div className="text-[#24298e] font-bold text-xl">€{prices.adult.toFixed(2)}</div>
                </div>
                <div className="flex items-center space-x-4" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => handleTicketChange('adult', false)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        tickets.adult === 0 ? 'bg-gray-100 text-gray-300' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                    disabled={tickets.adult === 0}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                  </button>
                  <span className="w-6 text-center font-bold text-xl text-gray-900">{tickets.adult}</span>
                  <button 
                    onClick={() => handleTicketChange('adult', true)}
                    className="w-10 h-10 rounded-full bg-[#24298e] text-white flex items-center justify-center hover:bg-[#1a1f70] shadow-md transform active:scale-95 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
              </div>

              <div 
                className={`flex justify-between items-center p-5 border-2 rounded-xl transition-all duration-300 cursor-pointer ${
                    tickets.child > 0 ? 'border-[#4cae4c] bg-green-50/30 shadow-md' : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'
                }`}
                onClick={() => handleTicketChange('child', true)}
              >
                <div>
                  <div className="font-bold text-gray-900 text-lg">Child (0-17)</div>
                  <div className="text-[#4cae4c] font-bold text-xl">Free</div>
                </div>
                <div className="flex items-center space-x-4" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => handleTicketChange('child', false)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        tickets.child === 0 ? 'bg-gray-100 text-gray-300' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                    disabled={tickets.child === 0}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                  </button>
                  <span className="w-6 text-center font-bold text-xl text-gray-900">{tickets.child}</span>
                  <button 
                    onClick={() => handleTicketChange('child', true)}
                    className="w-10 h-10 rounded-full bg-[#24298e] text-white flex items-center justify-center hover:bg-[#1a1f70] shadow-md transform active:scale-95 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex justify-between items-center border border-gray-100">
                <span className="text-gray-600 font-medium">Total Price</span>
                <span className="font-bold text-3xl text-[#24298e]">€{totalPrice.toFixed(2)}</span>
            </div>

            <button 
                onClick={() => setStep(2)}
                disabled={totalPrice === 0}
                className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all uppercase tracking-wide shadow-lg ${
                    totalPrice > 0 
                        ? 'bg-gradient-to-r from-[#4cae4c] to-[#45a045] hover:from-[#45a045] hover:to-[#3d8b3d] hover:shadow-xl transform hover:-translate-y-1' 
                        : 'bg-gray-300 cursor-not-allowed'
                }`}
            >
                Continue to Date
            </button>
            
            <div className="flex justify-center items-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center"><svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> Secure Booking</span>
                <span className="flex items-center"><svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> Instant Confirmation</span>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-[#24298e] text-center">Choose Date & Time</h3>
            
            <div className="booking-calendar-wrapper p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <Calendar 
                    onChange={setDate} 
                    value={date} 
                    className="w-full border-none bg-transparent font-sans"
                    tileClassName={({ date, view }) => {
                        if (view === 'month') {
                            if (date.getDay() === 2) return 'opacity-25 cursor-not-allowed'; // Tuesdays closed
                        }
                        return '';
                    }}
                />
            </div>

            <div>
                <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#4cae4c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Available Time Slots
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTime(t)}
                            className={`py-3 px-2 text-sm font-bold rounded-lg border-2 transition-all shadow-sm ${
                                time === t 
                                    ? 'bg-[#24298e] text-white border-[#24298e] shadow-md transform scale-105' 
                                    : 'bg-white border-gray-100 text-gray-600 hover:border-[#24298e] hover:text-[#24298e]'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <button 
                    onClick={() => setStep(1)}
                    className="w-1/3 py-4 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors uppercase text-sm"
                >
                    Back
                </button>
                <button 
                    onClick={() => setStep(3)}
                    disabled={!date || !time}
                    className={`w-2/3 py-4 rounded-xl font-bold text-white text-lg transition-all uppercase tracking-wide shadow-lg ${
                        date && time 
                            ? 'bg-gradient-to-r from-[#4cae4c] to-[#45a045] hover:from-[#45a045] hover:to-[#3d8b3d] hover:shadow-xl transform hover:-translate-y-1' 
                            : 'bg-gray-300 cursor-not-allowed'
                    }`}
                >
                    Next Step
                </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-[#24298e] text-center">Enter Details</h3>
            
            <div className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                        <input 
                            type="text" 
                            className="w-full p-4 text-base border border-gray-200 rounded-xl focus:border-[#24298e] focus:ring-2 focus:ring-blue-50 outline-none transition-all bg-gray-50 focus:bg-white"
                            placeholder="John"
                            value={userDetails.firstName}
                            onChange={(e) => setUserDetails({...userDetails, firstName: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                        <input 
                            type="text" 
                            className="w-full p-4 text-base border border-gray-200 rounded-xl focus:border-[#24298e] focus:ring-2 focus:ring-blue-50 outline-none transition-all bg-gray-50 focus:bg-white"
                            placeholder="Doe"
                            value={userDetails.lastName}
                            onChange={(e) => setUserDetails({...userDetails, lastName: e.target.value})}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input 
                        type="email" 
                        className="w-full p-4 text-base border border-gray-200 rounded-xl focus:border-[#24298e] focus:ring-2 focus:ring-blue-50 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="john.doe@example.com"
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input 
                        type="tel" 
                        className="w-full p-4 text-base border border-gray-200 rounded-xl focus:border-[#24298e] focus:ring-2 focus:ring-blue-50 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="+1 234 567 890"
                        value={userDetails.phone}
                        onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                    />
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <button 
                    onClick={() => setStep(2)}
                    className="w-1/3 py-4 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors uppercase text-sm"
                >
                    Back
                </button>
                <button 
                    onClick={() => {
                        // Simulate API call
                        setTimeout(() => {
                            router.push('/tickets/thank-you');
                        }, 500);
                    }}
                    disabled={!userDetails.email || !userDetails.firstName || !userDetails.lastName}
                    className={`w-2/3 py-4 rounded-xl font-bold text-white text-lg transition-all uppercase tracking-wide shadow-lg ${
                        userDetails.email && userDetails.firstName 
                            ? 'bg-gradient-to-r from-[#4cae4c] to-[#45a045] hover:from-[#45a045] hover:to-[#3d8b3d] hover:shadow-xl transform hover:-translate-y-1' 
                            : 'bg-gray-300 cursor-not-allowed'
                    }`}
                >
                    Confirm Order
                </button>
            </div>
        </div>
        );

        case 4:
            return (
                <div className="text-center py-12 space-y-6 animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-100 text-[#4cae4c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    
                    <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-[#24298e]">Booking Confirmed!</h3>
                        <p className="text-gray-500 text-lg">Thank you, {userDetails.firstName}.</p>
                        <p className="text-gray-500">Your tickets have been sent to <strong className="text-gray-900">{userDetails.email}</strong>.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-2xl mt-8 text-left border border-gray-100 max-w-sm mx-auto shadow-sm">
                        <div className="flex justify-between mb-3 border-b border-gray-200 pb-3">
                            <span className="text-gray-500">Date</span>
                            <span className="font-bold text-gray-900">{date?.toString().slice(0, 15)}</span>
                        </div>
                        <div className="flex justify-between mb-3 border-b border-gray-200 pb-3">
                            <span className="text-gray-500">Time</span>
                            <span className="font-bold text-gray-900">{time}</span>
                        </div>
                        <div className="flex justify-between pt-1">
                            <span className="text-gray-500 font-medium">Total Paid</span>
                            <span className="font-bold text-2xl text-[#24298e]">€{totalPrice.toFixed(2)}</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => {setStep(1); setTickets({adult:0, child:0, infant:0});}}
                        className="mt-8 text-[#24298e] font-bold hover:text-[#1a1f70] transition-colors flex items-center justify-center mx-auto"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        Book another ticket
                    </button>
                </div>
            );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      {/* Top Banner Removed */}
      
      <div className="p-8">
        {renderProgressBar()}
        {renderStep()}
      </div>
    </div>
  );
}
