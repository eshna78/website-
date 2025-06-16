import React from 'react';
import { Award, BookOpen, Users, Heart, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Namal Alumni Network</h1>
            <p className="text-xl">Building bridges between past, present, and future Namal graduates.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-800 mr-3" />
                <h2 className="text-3xl font-bold text-green-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                The Namal Alumni Network exists to foster lifelong connections among graduates, 
                support their professional growth, and strengthen their bond with the university. 
                We aim to create a vibrant community that contributes to the advancement of Namal 
                University and society at large.
              </p>
              <p className="text-gray-600 text-lg">
                Through mentorship, networking, and collaborative initiatives, we empower our alumni 
                to achieve their full potential while giving back to their alma mater and communities.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-green-800 mr-3" />
                <h2 className="text-3xl font-bold text-green-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                We envision a global network of Namal alumni who are leaders in their fields, 
                actively engaged with the university, and committed to making a positive impact 
                on society. Our alumni will be recognized for their excellence, innovation, and 
                service to humanity.
              </p>
              <p className="text-gray-600 text-lg">
                By 2030, we aim to be one of the most active and influential alumni networks in 
                Pakistan, with chapters across the world and a reputation for fostering meaningful 
                connections and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our actions and decisions as we build a stronger alumni community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We uphold the highest standards in all our endeavors, striving for excellence in our 
                professional lives and alumni initiatives.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a sense of belonging and mutual support among all Namal graduates, 
                creating a network that feels like family.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Service</h3>
              <p className="text-gray-600">
                We are committed to giving back to our alma mater and society through mentorship, 
                philanthropy, and volunteer work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The journey of building a strong alumni community
            </p>
          </div>
          
          <div className="relative border-l-4 border-green-800 ml-6 md:ml-0 md:mx-auto md:max-w-3xl pl-6 space-y-12">
            <div>
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-yellow-500 border-4 border-green-800"></div>
              <h3 className="text-xl font-bold text-green-800 mb-2">2010: The Beginning</h3>
              <p className="text-gray-600">
                With the graduation of Namal's first batch, the seeds of an alumni network were planted. 
                A small group of graduates formed an informal association to stay connected.
              </p>
            </div>
            
            <div>
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-yellow-500 border-4 border-green-800"></div>
              <h3 className="text-xl font-bold text-green-800 mb-2">2015: Official Formation</h3>
              <p className="text-gray-600">
                The Namal Alumni Network was officially established with a formal structure, 
                elected leadership, and a mission to support graduates and the university.
              </p>
            </div>
            
            <div>
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-yellow-500 border-4 border-green-800"></div>
              <h3 className="text-xl font-bold text-green-800 mb-2">2018: Global Expansion</h3>
              <p className="text-gray-600">
                As more Namal graduates pursued opportunities abroad, international chapters 
                were formed in the UK, USA, UAE, and Australia.
              </p>
            </div>
            
            <div>
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-yellow-500 border-4 border-green-800"></div>
              <h3 className="text-xl font-bold text-green-800 mb-2">2020: Digital Transformation</h3>
              <p className="text-gray-600">
                The network embraced digital platforms to connect alumni worldwide, launching 
                virtual events, webinars, and online mentorship programs.
              </p>
            </div>
            
            <div>
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-yellow-500 border-4 border-green-800"></div>
              <h3 className="text-xl font-bold text-green-800 mb-2">2025: Present Day</h3>
              <p className="text-gray-600">
                Today, the Namal Alumni Network boasts over 5,000 members across 120+ countries, 
                with a robust program of events, initiatives, and opportunities for engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated alumni who guide our network
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="President" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-1">Dr. Adnan Malik</h3>
                <p className="text-yellow-600 font-semibold mb-3">President</p>
                <p className="text-gray-600 mb-4">Class of 2010 | Entrepreneur & Philanthropist</p>
                <p className="text-gray-600">
                  Dr. Adnan leads our network with a vision to create meaningful connections and opportunities for all alumni.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Vice President" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-1">Ayesha Khan</h3>
                <p className="text-yellow-600 font-semibold mb-3">Vice President</p>
                <p className="text-gray-600 mb-4">Class of 2012 | Senior Manager at Microsoft</p>
                <p className="text-gray-600">
                  Ayesha oversees our mentorship programs and professional development initiatives.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Secretary" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-1">Farhan Ahmed</h3>
                <p className="text-yellow-600 font-semibold mb-3">Secretary</p>
                <p className="text-gray-600 mb-4">Class of 2015 | Academic Researcher</p>
                <p className="text-gray-600">
                  Farhan coordinates our events and manages communications with our global alumni community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the Namal Alumni Network today and help us build a stronger community for current and future graduates.
          </p>
          <div className="flex justify-center">
            <a 
              href="/membership" 
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors text-lg"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;