import React from 'react';
import { X } from 'lucide-react';

interface Story {
  id: number;
  name: string;
  batch: string;
  title: string;
  story: string;
  achievements: string[];
  image: string;
  fullStory?: string;
}

interface StoryModalProps {
  story: Story;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">{story.name}'s Journey</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src={story.image} 
                alt={story.name} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <p className="text-xl font-semibold text-green-800">{story.title}</p>
                <p className="text-gray-600">Class of {story.batch}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Professional Journey</h3>
              <p className="text-gray-600 mb-6">{story.fullStory || story.story}</p>

              <h3 className="text-lg font-semibold text-green-800 mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                {story.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                    <span className="ml-2 text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;