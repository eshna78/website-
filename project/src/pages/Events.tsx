import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Filter, Search, Plus, Star, Eye, ChevronRight } from 'lucide-react';
import { EventRegistrationModal } from '../components/EventRegistrationModal';
import { EventIdeaModal } from '../components/EventIdeaModal';
import { EventDetailsModal } from '../components/EventDetailsModal';
import EventCountdown from '../components/EventCountdown';

interface Event {
  _id: string;
  title: string;
  description: string;
  shortDescription?: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  location: string;
  venue?: {
    name: string;
    address: string;
    city: string;
  };
  type: string;
  category: string;
  capacity: number;
  registeredCount: number;
  isVirtual: boolean;
  meetingLink?: string;
  images: Array<{
    url: string;
    caption: string;
    isPrimary: boolean;
  }>;
  gallery: Array<{
    url: string;
    caption: string;
    uploadedAt: string;
  }>;
  organizer: {
    name: string;
    email: string;
    phone?: string;
    organization?: string;
  };
  speakers: Array<{
    name: string;
    title: string;
    bio: string;
    image?: string;
    linkedin?: string;
  }>;
  agenda: Array<{
    time: string;
    title: string;
    description: string;
    speaker: string;
    duration: number;
  }>;
  requirements: string[];
  benefits: string[];
  tags: string[];
  registrationFee: {
    amount: number;
    currency: string;
  };
  registrationDeadline: string;
  createdBy: {
    firstName: string;
    lastName: string;
    email: string;
  };
  status: string;
  visibility: string;
  feedback: Array<{
    user: {
      firstName: string;
      lastName: string;
    };
    rating: number;
    comment: string;
    createdAt: string;
  }>;
  averageRating: number;
  totalFeedback: number;
  isPast: boolean;
  isRegistrationOpen: boolean;
  spotsRemaining: number;
  createdAt: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('upcoming');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showIdeaModal, setShowIdeaModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    
    fetchEvents();
  }, []);

  useEffect(() => {
    filterEvents();
  }, [events, filter, typeFilter, searchTerm]);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      const data = await response.json();
      
      if (data.success) {
        setEvents(data.data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterEvents = () => {
    let filtered = events;

    // Filter by time (upcoming/past)
    if (filter === 'upcoming') {
      filtered = filtered.filter(event => !event.isPast);
    } else if (filter === 'past') {
      filtered = filtered.filter(event => event.isPast);
    }

    // Filter by type
    if (typeFilter !== 'all') {
      filtered = filtered.filter(event => event.type.toLowerCase() === typeFilter.toLowerCase());
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredEvents(filtered);
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setShowDetailsModal(true);
  };

  const handleRegisterClick = (event: Event) => {
    if (!user) {
      alert('Please login to register for events');
      return;
    }
    setSelectedEvent(event);
    setShowRegistrationModal(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (time: string) => {
    return new Date(`2000-01-01 ${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getEventImage = (event: Event) => {
    const primaryImage = event.images?.find(img => img.isPrimary);
    if (primaryImage) return primaryImage.url;
    if (event.images?.length > 0) return event.images[0].url;
    return 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  };

  const upcomingEvents = events.filter(event => !event.isPast).slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-800"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Events & Reunions</h1>
            <p className="text-xl mb-8">Connect, learn, and grow with fellow Namal alumni through our exciting events and reunions.</p>
            {user && (
              <button
                onClick={() => setShowIdeaModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors"
              >
                <Plus className="h-5 w-5" />
                Suggest an Event
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Event Countdown Section */}
      {upcomingEvents.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <EventCountdown 
                  key={event._id} 
                  title={event.title} 
                  date={event.date}
                  location={event.location}
                  onClick={() => handleEventClick(event)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search events by title, description, or location"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center flex-wrap gap-3">
              <Filter className="h-5 w-5 text-green-800" />
              
              {/* Time Filter */}
              <div className="flex gap-2">
                <button 
                  onClick={() => setFilter('upcoming')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    filter === 'upcoming' 
                      ? 'bg-green-800 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  Upcoming
                </button>
                <button 
                  onClick={() => setFilter('past')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    filter === 'past' 
                      ? 'bg-green-800 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  Past Events
                </button>
                <button 
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    filter === 'all' 
                      ? 'bg-green-800 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  All Events
                </button>
              </div>

              {/* Type Filter */}
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Types</option>
                <option value="reunion">Reunion</option>
                <option value="networking">Networking</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="social">Social</option>
                <option value="career">Career</option>
                <option value="conference">Conference</option>
                <option value="webinar">Webinar</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or check back later for new events.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map(event => (
                <div key={event._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={getEventImage(event)} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.type === 'Reunion' ? 'bg-purple-100 text-purple-800' :
                        event.type === 'Networking' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                        event.type === 'Seminar' ? 'bg-yellow-100 text-yellow-800' :
                        event.type === 'Social' ? 'bg-pink-100 text-pink-800' :
                        event.type === 'Career' ? 'bg-indigo-100 text-indigo-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    {event.isPast && event.averageRating > 0 && (
                      <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm font-medium">{event.averageRating.toFixed(1)}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2 line-clamp-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.shortDescription || event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {formatTime(event.startTime)} - {formatTime(event.endTime)}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.isVirtual ? 'Virtual Event' : event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {event.registeredCount}/{event.capacity} registered
                        </span>
                      </div>
                    </div>

                    {event.registrationFee.amount > 0 && (
                      <div className="mb-4">
                        <span className="text-lg font-semibold text-green-700">
                          {event.registrationFee.currency} {event.registrationFee.amount.toLocaleString()}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <button 
                        onClick={() => handleEventClick(event)}
                        className="flex items-center text-green-800 hover:text-green-700 font-semibold"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                      
                      {!event.isPast && event.isRegistrationOpen && (
                        <button 
                          onClick={() => handleRegisterClick(event)}
                          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors"
                        >
                          Register
                        </button>
                      )}
                      
                      {!event.isPast && !event.isRegistrationOpen && (
                        <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md text-sm">
                          Registration Closed
                        </span>
                      )}
                      
                      {event.isPast && (
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-md text-sm font-medium">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Registration Modal */}
      <EventRegistrationModal 
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
        event={selectedEvent}
      />

      {/* Event Idea Modal */}
      <EventIdeaModal 
        isOpen={showIdeaModal}
        onClose={() => setShowIdeaModal(false)}
      />

      {/* Event Details Modal */}
      <EventDetailsModal 
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        event={selectedEvent}
        onRegister={() => {
          setShowDetailsModal(false);
          setShowRegistrationModal(true);
        }}
      />
    </div>
  );
};

export default Events;