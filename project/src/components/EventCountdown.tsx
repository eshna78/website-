import React, { useState, useEffect } from 'react';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventCountdownProps {
  date: string;
  title: string;
  location?: string;
  onClick?: () => void;
}

const EventCountdown: React.FC<EventCountdownProps> = ({ date, title, location, onClick }) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = parseISO(date);
      const now = new Date();
      
      if (eventDate < now) {
        setIsExpired(true);
        setTimeLeft('Event has passed');
        return;
      }

      const distance = formatDistanceToNowStrict(eventDate, { addSuffix: true });
      setTimeLeft(distance);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [date]);

  const formatEventDate = () => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatEventTime = () => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div 
      className={`bg-gradient-to-br from-green-800 to-green-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:scale-105' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-yellow-200">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatEventDate()}</span>
            </div>
            
            <div className="flex items-center text-yellow-200">
              <Clock className="h-4 w-4 mr-2" />
              <span>{formatEventTime()}</span>
            </div>
            
            {location && (
              <div className="flex items-center text-yellow-200">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="truncate">{location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="border-t border-green-700 pt-4">
        <div className="text-center">
          <p className="text-xs text-green-200 mb-1">
            {isExpired ? 'Status' : 'Starts in'}
          </p>
          <p className={`text-lg font-bold ${
            isExpired ? 'text-red-300' : 'text-yellow-400'
          }`}>
            {timeLeft}
          </p>
        </div>
      </div>
      
      {onClick && (
        <div className="mt-4 text-center">
          <span className="text-xs text-green-200 hover:text-white transition-colors">
            Click for details →
          </span>
        </div>
      )}
    </div>
  );
};

export default EventCountdown;