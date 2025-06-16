import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Award, BookOpen, Briefcase, Heart } from 'lucide-react';

interface HomeProps {
  onRegister: () => void;
}

const Home: React.FC<HomeProps> = ({ onRegister }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to the Namal Alumni Network</h1>
            <p className="text-xl mb-8">Connecting graduates, fostering relationships, and building a stronger community.</p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onRegister}
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors"
              >
                Join the Network
              </button>
              <Link to="/events" className="px-6 py-3 bg-transparent hover:bg-green-700 border-2 border-yellow-400 text-yellow-400 font-bold rounded-md transition-colors">
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-green-800">5000+</p>
              <p className="text-gray-600">Alumni</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-green-800">120+</p>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-green-800">250+</p>
              <p className="text-gray-600">Events</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-green-800">75+</p>
              <p className="text-gray-600">Chapters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the benefits of being part of the Namal Alumni Network</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Events & Reunions</h3>
              <p className="text-gray-600">Connect with fellow alumni at our regular events, reunions, and networking opportunities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Mentorship Program</h3>
              <p className="text-gray-600">Share your expertise or receive guidance from experienced professionals in your field.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Success Stories</h3>
              <p className="text-gray-600">Celebrate and get inspired by the achievements of our distinguished alumni.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Scholarships</h3>
              <p className="text-gray-600">Access exclusive scholarships and funding opportunities for further education.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Job Portal</h3>
              <p className="text-gray-600">Explore career opportunities shared exclusively with the Namal alumni community.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Give Back</h3>
              <p className="text-gray-600">Support the next generation of Namal students through donations and volunteering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Alumni Spotlight</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet our exceptional alumni making an impact around the world</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Alumni 1" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-1">Sarah Ahmed</h3>
                <p className="text-gray-500 mb-3">Class of 2015 | Software Engineer at Google</p>
                <p className="text-gray-600">Sarah leads a team of engineers developing AI solutions that are changing how we interact with technology.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Alumni 2" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-1">Imran Khan</h3>
                <p className="text-gray-500 mb-3">Class of 2012 | Founder & CEO of TechVentures</p>
                <p className="text-gray-600">Imran's startup has revolutionized renewable energy solutions in developing countries.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Alumni 3" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-1">Fatima Malik</h3>
                <p className="text-gray-500 mb-3">Class of 2017 | Research Scientist at MIT</p>
                <p className="text-gray-600">Fatima's groundbreaking research in biotechnology has earned her international recognition.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/success-stories" className="px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-bold rounded-md transition-colors">
              View More Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join us for these exciting opportunities to connect with fellow alumni</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-yellow-500 text-green-900 p-4 text-center">
                <p className="text-2xl font-bold">25</p>
                <p className="uppercase">June</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">Annual Alumni Reunion</h3>
                <p className="text-gray-500 mb-3">Namal University Campus, Mianwali</p>
                <p className="text-gray-600 mb-4">Join us for a day of networking, reminiscing, and celebrating our alma mater.</p>
                <Link to="/events" className="text-green-800 font-semibold hover:text-green-700">Register Now →</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-yellow-500 text-green-900 p-4 text-center">
                <p className="text-2xl font-bold">10</p>
                <p className="uppercase">July</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">Career Development Workshop</h3>
                <p className="text-gray-500 mb-3">Virtual Event</p>
                <p className="text-gray-600 mb-4">Enhance your professional skills with our expert-led workshop on leadership.</p>
                <Link to="/events" className="text-green-800 font-semibold hover:text-green-700">Register Now →</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-yellow-500 text-green-900 p-4 text-center">
                <p className="text-2xl font-bold">18</p>
                <p className="uppercase">August</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">Networking Dinner</h3>
                <p className="text-gray-500 mb-3">Pearl Continental Hotel, Lahore</p>
                <p className="text-gray-600 mb-4">Connect with alumni in your industry at our exclusive networking dinner.</p>
                <Link to="/events" className="text-green-800 font-semibold hover:text-green-700">Register Now →</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/events" className="px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-bold rounded-md transition-colors">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter to receive updates on events, opportunities, and alumni news.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 flex-grow max-w-md"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;