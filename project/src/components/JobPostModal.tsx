import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';

interface JobPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJobPosted?: () => void;
}

export const JobPostModal: React.FC<JobPostModalProps> = ({ isOpen, onClose, onJobPosted }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    description: '',
    location: '',
    jobType: '',
    category: '',
    experienceLevel: '',
    salaryRange: {
      min: '',
      max: '',
      currency: 'PKR'
    },
    applicationDeadline: '',
    applicationMethod: 'email',
    applicationEmail: '',
    applicationUrl: '',
    contactPerson: {
      name: '',
      email: '',
      phone: ''
    },
    requirements: [''],
    responsibilities: ['']
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Filter out empty requirements and responsibilities
      const cleanedData = {
        ...formData,
        requirements: formData.requirements.filter(req => req.trim() !== ''),
        responsibilities: formData.responsibilities.filter(resp => resp.trim() !== ''),
        salaryRange: {
          ...formData.salaryRange,
          min: formData.salaryRange.min ? parseInt(formData.salaryRange.min) : undefined,
          max: formData.salaryRange.max ? parseInt(formData.salaryRange.max) : undefined
        }
      };

      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(cleanedData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to post job');
      }

      setSuccess(true);
      onJobPosted?.();
      
      setTimeout(() => {
        onClose();
        setSuccess(false);
        // Reset form
        setFormData({
          title: '',
          company: '',
          description: '',
          location: '',
          jobType: '',
          category: '',
          experienceLevel: '',
          salaryRange: { min: '', max: '', currency: 'PKR' },
          applicationDeadline: '',
          applicationMethod: 'email',
          applicationEmail: '',
          applicationUrl: '',
          contactPerson: { name: '', email: '', phone: '' },
          requirements: [''],
          responsibilities: ['']
        });
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addRequirement = () => {
    setFormData({
      ...formData,
      requirements: [...formData.requirements, '']
    });
  };

  const removeRequirement = (index: number) => {
    setFormData({
      ...formData,
      requirements: formData.requirements.filter((_, i) => i !== index)
    });
  };

  const updateRequirement = (index: number, value: string) => {
    const newRequirements = [...formData.requirements];
    newRequirements[index] = value;
    setFormData({ ...formData, requirements: newRequirements });
  };

  const addResponsibility = () => {
    setFormData({
      ...formData,
      responsibilities: [...formData.responsibilities, '']
    });
  };

  const removeResponsibility = (index: number) => {
    setFormData({
      ...formData,
      responsibilities: formData.responsibilities.filter((_, i) => i !== index)
    });
  };

  const updateResponsibility = (index: number, value: string) => {
    const newResponsibilities = [...formData.responsibilities];
    newResponsibilities[index] = value;
    setFormData({ ...formData, responsibilities: newResponsibilities });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">Post a Job</h2>
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
              Job posted successfully! It will be reviewed and published shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="e.g., Senior Software Engineer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Description *</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
                placeholder="Describe the role, company culture, and what makes this opportunity exciting..."
              />
            </div>

            {/* Job Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Type *</label>
                <select
                  required
                  value={formData.jobType}
                  onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Category</option>
                  <option value="Technology">Technology</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business">Business</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level *</label>
                <select
                  required
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Level</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior Level">Senior Level</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="e.g., Lahore, Pakistan or Remote"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline *</label>
                <input
                  type="date"
                  required
                  value={formData.applicationDeadline}
                  onChange={(e) => setFormData({ ...formData, applicationDeadline: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {/* Salary Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range (Optional)</label>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="number"
                  value={formData.salaryRange.min}
                  onChange={(e) => setFormData({
                    ...formData,
                    salaryRange: { ...formData.salaryRange, min: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Min salary"
                />
                <input
                  type="number"
                  value={formData.salaryRange.max}
                  onChange={(e) => setFormData({
                    ...formData,
                    salaryRange: { ...formData.salaryRange, max: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Max salary"
                />
                <select
                  value={formData.salaryRange.currency}
                  onChange={(e) => setFormData({
                    ...formData,
                    salaryRange: { ...formData.salaryRange, currency: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="PKR">PKR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
              {formData.requirements.map((requirement, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={requirement}
                    onChange={(e) => updateRequirement(index, e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter a requirement"
                  />
                  {formData.requirements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRequirement(index)}
                      className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addRequirement}
                className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200"
              >
                <Plus className="h-4 w-4" />
                Add Requirement
              </button>
            </div>

            {/* Responsibilities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities</label>
              {formData.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={responsibility}
                    onChange={(e) => updateResponsibility(index, e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter a responsibility"
                  />
                  {formData.responsibilities.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeResponsibility(index)}
                      className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addResponsibility}
                className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200"
              >
                <Plus className="h-4 w-4" />
                Add Responsibility
              </button>
            </div>

            {/* Application Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">How should candidates apply? *</label>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="email"
                    name="applicationMethod"
                    value="email"
                    checked={formData.applicationMethod === 'email'}
                    onChange={(e) => setFormData({ ...formData, applicationMethod: e.target.value })}
                    className="h-4 w-4 text-green-800 focus:ring-green-500"
                  />
                  <label htmlFor="email" className="ml-2 text-gray-700">Email</label>
                </div>
                {formData.applicationMethod === 'email' && (
                  <input
                    type="email"
                    value={formData.applicationEmail}
                    onChange={(e) => setFormData({ ...formData, applicationEmail: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Application email address"
                    required
                  />
                )}

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="website"
                    name="applicationMethod"
                    value="website"
                    checked={formData.applicationMethod === 'website'}
                    onChange={(e) => setFormData({ ...formData, applicationMethod: e.target.value })}
                    className="h-4 w-4 text-green-800 focus:ring-green-500"
                  />
                  <label htmlFor="website" className="ml-2 text-gray-700">External Website</label>
                </div>
                {formData.applicationMethod === 'website' && (
                  <input
                    type="url"
                    value={formData.applicationUrl}
                    onChange={(e) => setFormData({ ...formData, applicationUrl: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Application URL"
                    required
                  />
                )}
              </div>
            </div>

            {/* Contact Person */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Contact Person (Optional)</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  value={formData.contactPerson.name}
                  onChange={(e) => setFormData({
                    ...formData,
                    contactPerson: { ...formData.contactPerson, name: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Contact name"
                />
                <input
                  type="email"
                  value={formData.contactPerson.email}
                  onChange={(e) => setFormData({
                    ...formData,
                    contactPerson: { ...formData.contactPerson, email: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Contact email"
                />
                <input
                  type="tel"
                  value={formData.contactPerson.phone}
                  onChange={(e) => setFormData({
                    ...formData,
                    contactPerson: { ...formData.contactPerson, phone: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Contact phone"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-bold rounded-md transition-colors disabled:opacity-50"
              >
                {loading ? 'Posting...' : 'Post Job'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};