import React from 'react';
import { Shield, TrendingUp, Users, Briefcase, LineChart, BookOpen } from 'lucide-react';

const PremiumFeatures = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Professional Features</h1>
            <p className="text-xl">Access exclusive tools and resources designed for career advancement and professional growth.</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Executive Advisory Board Portal */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Executive Advisory Board Portal</h3>
              <p className="text-gray-600 mb-6">Connect with C-level alumni who provide strategic guidance and mentorship.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">One-on-one mentorship sessions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Career strategy planning</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Industry-specific guidance</span>
                </li>
              </ul>
              <button className="w-full px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors">
                Access Portal
              </button>
            </div>

            {/* Alumni Venture Capital Network */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Alumni Venture Capital Network</h3>
              <p className="text-gray-600 mb-6">Connect with alumni investors and access funding opportunities.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Startup pitch opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Investment networking events</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Deal flow platform access</span>
                </li>
              </ul>
              <button className="w-full px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors">
                Join Network
              </button>
            </div>

            {/* Industry Intelligence Hub */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <LineChart className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Industry Intelligence Hub</h3>
              <p className="text-gray-600 mb-6">Access real-time market insights and industry analysis.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Market trend reports</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Industry expert insights</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                  <span className="ml-2 text-gray-600">Exclusive research papers</span>
                </li>
              </ul>
              <button className="w-full px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors">
                Access Hub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Premium Membership Plans</h2>
            <p className="text-xl text-gray-600">Choose the plan that best fits your professional needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add pricing plans */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumFeatures;