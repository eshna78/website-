import React, { useState } from 'react';
import { Search, Award, Briefcase, GraduationCap, Filter } from 'lucide-react';
import StoryModal from '../components/StoryModal';

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState<null | any>(null);
  
  // Example story data structure - replace with your actual data source
  const stories = [
    {
      id: 1,
      title: "From Graduate to Tech Lead",
      category: "Career Growth",
      preview: "A journey of determination and growth in the tech industry..."
    }
    // Add more stories as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search success stories..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            <span>Filter Stories</span>
          </button>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-2 text-green-700 mb-4">
                {story.category === "Career Growth" && <Briefcase className="w-5 h-5" />}
                {story.category === "Academic Achievement" && <GraduationCap className="w-5 h-5" />}
                {story.category === "Recognition" && <Award className="w-5 h-5" />}
                <span className="text-sm font-medium">{story.category}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
              <p className="text-gray-600 mb-4">{story.preview}</p>
              <button 
                onClick={() => setSelectedStory(story)}
                className="px-4 py-2 bg-green-800 hover:bg-green-700 text-white font-bold rounded-md transition-colors"
              >
                Read Full Story
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
};

export default SuccessStories;