import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, Users } from 'lucide-react';

interface Event {
  _id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  isVirtual: boolean;
  registrationFee: {
    amount: number;
    currency: string;
  };
  capacity: number;
  registeredCount: number;
}

interface EventRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
}

export const EventRegistrationModal: React.FC<EventRegistrationModalProps> = ({ 
  isOpen, 
  onClose, 
  event 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
    dietaryRestrictions: '',
    emergencyContact: '',
    agreeToTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/api/events/${event._id}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          requirements: '',
          dietaryRestrictions: '',
          emergencyContact: '',
          agreeToTerms: false
        });
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">Register for Event</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Registration successful! You will receive a confirmation email shortly.
            </div>
          )}

          {/* Event Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">{event.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(event.date)}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{event.isVirtual ? 'Virtual Event' : event.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Users className="h-4 w-4 mr-2" />
                <span>{event.registeredCount}/{event.capacity} registered</span>
              </div>
            </div>

            {event.registrationFee.amount > 0 && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <span className="text-lg font-semibold text-green-700">
                  Registration Fee: {event.registrationFee.currency} {event.registrationFee.amount.toLocaleString()}
                </span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                <input
                  type="text"
                  value={formData.emergencyContact}
                  onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Name and phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={3}
                placeholder="Any accessibility needs, questions, or special requests..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Restrictions</label>
              <input
                type="text"
                value={formData.dietaryRestrictions}
                onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Vegetarian, vegan, allergies, etc."
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="h-4 w-4 text-green-800 focus:ring-green-500 border-gray-300 rounded mt-1"
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the event terms and conditions, and understand that my registration is subject to approval. 
                  I consent to receiving event-related communications.
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-800 focus:ring-green-500 border-gray-300 rounded mt-1"
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to receive updates about future alumni events and opportunities.
                </span>
              </label>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <h4 className="font-medium text-yellow-800 mb-2">Important Information:</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Registration confirmation will be sent to your email address</li>
                <li>• Please arrive 15 minutes before the event start time</li>
                {event.registrationFee.amount > 0 && (
                  <li>• Payment instructions will be included in your confirmation email</li>
                )}
                <li>• Cancellation policy: 48 hours notice required for refunds</li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={loading || !formData.agreeToTerms}
              className="w-full px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-bold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Registering...' : 'Complete Registration'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};