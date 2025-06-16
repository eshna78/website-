import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, Star, Image, User, Phone, Mail, Globe } from 'lucide-react';

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

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
  onRegister: () => void;
}

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ 
  isOpen, 
  onClose, 
  event,
  onRegister 
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isOpen || !event) return null;

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

  const getEventImage = () => {
    const primaryImage = event.images?.find(img => img.isPrimary);
    if (primaryImage) return primaryImage.url;
    if (event.images?.length > 0) return event.images[0].url;
    return 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            {/* Header Image */}
            <div className="relative h-64 bg-gray-200">
              <img 
                src={getEventImage()} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.type === 'Reunion' ? 'bg-purple-600' :
                  event.type === 'Networking' ? 'bg-blue-600' :
                  event.type === 'Workshop' ? 'bg-green-600' :
                  event.type === 'Seminar' ? 'bg-yellow-600' :
                  event.type === 'Social' ? 'bg-pink-600' :
                  event.type === 'Career' ? 'bg-indigo-600' :
                  'bg-gray-600'
                }`}>
                  {event.type}
                </span>
              </div>
            </div>

            <div className="p-6">
              {/* Event Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-green-800 mb-4">{event.title}</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-green-800" />
                    <div>
                      <p className="font-medium">{formatDate(event.date)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-green-800" />
                    <div>
                      <p className="font-medium">
                        {formatTime(event.startTime)} - {formatTime(event.endTime)}
                      </p>
                      <p className="text-sm text-gray-500">{event.duration} minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-green-800" />
                    <div>
                      <p className="font-medium">
                        {event.isVirtual ? 'Virtual Event' : event.location}
                      </p>
                      {event.venue && (
                        <p className="text-sm text-gray-500">{event.venue.name}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-green-800" />
                    <div>
                      <p className="font-medium">
                        {event.registeredCount}/{event.capacity} registered
                      </p>
                      <p className="text-sm text-gray-500">
                        {event.spotsRemaining} spots remaining
                      </p>
                    </div>
                  </div>
                </div>

                {event.isPast && event.averageRating > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {renderStars(Math.round(event.averageRating))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {event.averageRating.toFixed(1)} ({event.totalFeedback} reviews)
                    </span>
                  </div>
                )}

                {event.registrationFee.amount > 0 && (
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-700">
                      {event.registrationFee.currency} {event.registrationFee.amount.toLocaleString()}
                    </span>
                    <span className="text-gray-600 ml-2">Registration Fee</span>
                  </div>
                )}
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  {['overview', 'agenda', 'speakers', 'gallery', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                        activeTab === tab
                          ? 'border-green-800 text-green-800'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mb-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">About This Event</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>

                    {event.benefits.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">What You'll Gain</h3>
                        <ul className="space-y-2">
                          {event.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold mt-0.5">✓</div>
                              <span className="ml-3 text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.requirements.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Requirements</h3>
                        <ul className="space-y-2">
                          {event.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 text-xs font-bold mt-0.5">!</div>
                              <span className="ml-3 text-gray-600">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Event Organizer</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start space-x-4">
                          <div className="bg-green-100 rounded-full p-3">
                            <User className="h-6 w-6 text-green-800" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{event.organizer.name}</h4>
                            {event.organizer.organization && (
                              <p className="text-gray-600">{event.organizer.organization}</p>
                            )}
                            <div className="mt-2 space-y-1">
                              <div className="flex items-center text-sm text-gray-600">
                                <Mail className="h-4 w-4 mr-2" />
                                <a href={`mailto:${event.organizer.email}`} className="hover:text-green-800">
                                  {event.organizer.email}
                                </a>
                              </div>
                              {event.organizer.phone && (
                                <div className="flex items-center text-sm text-gray-600">
                                  <Phone className="h-4 w-4 mr-2" />
                                  <a href={`tel:${event.organizer.phone}`} className="hover:text-green-800">
                                    {event.organizer.phone}
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'agenda' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Agenda</h3>
                    {event.agenda.length > 0 ? (
                      <div className="space-y-4">
                        {event.agenda.map((item, index) => (
                          <div key={index} className="border-l-4 border-green-800 pl-4 py-2">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-800">{item.title}</h4>
                              <span className="text-sm text-gray-500">{item.time} ({item.duration} min)</span>
                            </div>
                            <p className="text-gray-600 mb-1">{item.description}</p>
                            {item.speaker && (
                              <p className="text-sm text-green-800 font-medium">Speaker: {item.speaker}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">Agenda will be updated soon.</p>
                    )}
                  </div>
                )}

                {activeTab === 'speakers' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Featured Speakers</h3>
                    {event.speakers.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {event.speakers.map((speaker, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                              {speaker.image ? (
                                <img 
                                  src={speaker.image} 
                                  alt={speaker.name}
                                  className="w-16 h-16 rounded-full object-cover"
                                />
                              ) : (
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                  <User className="h-8 w-8 text-green-800" />
                                </div>
                              )}
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-800">{speaker.name}</h4>
                                <p className="text-green-700 font-medium">{speaker.title}</p>
                                <p className="text-gray-600 text-sm mt-2">{speaker.bio}</p>
                                {speaker.linkedin && (
                                  <a 
                                    href={speaker.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-2"
                                  >
                                    <Globe className="h-4 w-4 mr-1" />
                                    LinkedIn Profile
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">Speaker information will be updated soon.</p>
                    )}
                  </div>
                )}

                {activeTab === 'gallery' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Gallery</h3>
                    {event.gallery.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {event.gallery.map((image, index) => (
                          <div 
                            key={index}
                            className="relative group cursor-pointer"
                            onClick={() => setSelectedImage(image.url)}
                          >
                            <img 
                              src={image.url} 
                              alt={image.caption}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 rounded-lg flex items-center justify-center">
                              <Image className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No photos available yet.</p>
                    )}
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Reviews</h3>
                    {event.feedback.length > 0 ? (
                      <div className="space-y-4">
                        {event.feedback.map((review, index) => (
                          <div key={index} className="border-b border-gray-200 pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <div className="bg-green-100 rounded-full p-2">
                                  <User className="h-4 w-4 text-green-800" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800">
                                    {review.user.firstName} {review.user.lastName}
                                  </p>
                                  <div className="flex items-center">
                                    {renderStars(review.rating)}
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">
                                {new Date(review.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No reviews yet.</p>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  Registration deadline: {new Date(event.registrationDeadline).toLocaleDateString()}
                </div>
                
                <div className="flex gap-3">
                  {!event.isPast && event.isRegistrationOpen && (
                    <button 
                      onClick={onRegister}
                      className="px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-bold rounded-md transition-colors"
                    >
                      Register Now
                    </button>
                  )}
                  
                  {!event.isPast && !event.isRegistrationOpen && (
                    <span className="px-6 py-3 bg-gray-100 text-gray-600 rounded-md font-medium">
                      Registration Closed
                    </span>
                  )}
                  
                  {event.isPast && (
                    <span className="px-6 py-3 bg-green-100 text-green-800 rounded-md font-medium">
                      Event Completed
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-60">
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Event gallery"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};