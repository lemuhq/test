'use client';

import { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import CourseAnalytics from './CourseAnalytics';
import { CourseData } from '../../components/CourseCard';

// Extended Course Data with additional fields
interface ExtendedCourseData extends CourseData {
  category?: string;
  description?: string;
  videoUrl?: string;
  instructorRole?: string;
  price?: number;
  discount?: string;
  dateUpdated?: string;
  benefits?: string[];
  courseOutro?: string;
  skillsGained?: string[];
  learningOutcomes?: string[];
}

export default function CourseManagement() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCourse, setNewCourse] = useState<Partial<ExtendedCourseData>>({
    title: '',
    image: '/images/cardtwo.png', // Default image
    rating: 0,
    students: 0,
    lessons: 0,
    hours: 0,
    instructor: '',
    instructorRole: '',
    price: 0,
    discount: '',
    dateUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    videoUrl: '#',
    benefits: [''],
    courseOutro: '',
    skillsGained: [''],
    learningOutcomes: ['']
  });
  
  // List of available categories
  const categories = [
    'Renewable Energy',
    'Sustainable Building',
    'Climate Science',
    'Environmental Policy',
    'Conservation',
    'Others'
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCourse({
      ...newCourse,
      [name]: name === 'rating' || name === 'students' || name === 'lessons' || name === 'hours' || name === 'price'
        ? Number(value) 
        : value
    });
  };

  const handleArrayInputChange = (arrayName: string, index: number, value: string) => {
    const arrayToUpdate = [...(newCourse[arrayName as keyof ExtendedCourseData] as string[] || [])];
    arrayToUpdate[index] = value;
    
    setNewCourse({
      ...newCourse,
      [arrayName]: arrayToUpdate
    });
  };

  const addArrayItem = (arrayName: string) => {
    const currentArray = [...(newCourse[arrayName as keyof ExtendedCourseData] as string[] || [])];
    currentArray.push('');
    
    setNewCourse({
      ...newCourse,
      [arrayName]: currentArray
    });
  };

  const removeArrayItem = (arrayName: string, index: number) => {
    const currentArray = [...(newCourse[arrayName as keyof ExtendedCourseData] as string[] || [])];
    if (currentArray.length > 1) {
      currentArray.splice(index, 1);
      
      setNewCourse({
        ...newCourse,
        [arrayName]: currentArray
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to save the course
    console.log('New course to be added:', newCourse);
    
    // Mock success response
    alert('Course added successfully!');
    setNewCourse({
      title: '',
      image: '/images/cardtwo.png',
      rating: 0,
      students: 0,
      lessons: 0,
      hours: 0,
      instructor: '',
      instructorRole: '',
      price: 0,
      discount: '',
      dateUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      videoUrl: '#',
      benefits: [''],
      courseOutro: '',
      skillsGained: [''],
      learningOutcomes: ['']
    });
    setShowAddForm(false);
  };
  
  return (
    <div className="space-y-8">
      {/* Add Course Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition-colors"
        >
          <FiPlus className="h-5 w-5" /> Add New Course
        </button>
      </div>
      
      {/* Add Course Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black  flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-semibold text-gray-900">Add New Course</h3>
              <button 
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <h4 className="text-lg font-medium border-b pb-2 mb-4">Basic Information</h4>
              
              {/* Course Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Course Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={newCourse.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Sustainable Energy Fundamentals"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              {/* Two columns layout for instructor info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Instructor */}
                <div>
                  <label htmlFor="instructor" className="block text-sm font-medium text-gray-700 mb-1">
                    Instructor Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="instructor"
                    name="instructor"
                    required
                    value={newCourse.instructor}
                    onChange={handleInputChange}
                    placeholder="e.g. Dr. Sarah Green"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                {/* Instructor Role */}
                <div>
                  <label htmlFor="instructorRole" className="block text-sm font-medium text-gray-700 mb-1">
                    Instructor Role <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="instructorRole"
                    name="instructorRole"
                    required
                    value={newCourse.instructorRole}
                    onChange={handleInputChange}
                    placeholder="e.g. Sustainable Energy Expert"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              
              {/* Course Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={newCourse.category || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Two columns layout for course details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Number of Lessons */}
                <div>
                  <label htmlFor="lessons" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Lessons <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="lessons"
                    name="lessons"
                    required
                    min="1"
                    value={newCourse.lessons || ''}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                {/* Course Hours */}
                <div>
                  <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">
                    Course Hours <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="hours"
                    name="hours"
                    required
                    min="1"
                    value={newCourse.hours || ''}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                {/* Initial Students */}
                <div>
                  <label htmlFor="students" className="block text-sm font-medium text-gray-700 mb-1">
                    Initial Students
                  </label>
                  <input
                    type="number"
                    id="students"
                    name="students"
                    min="0"
                    value={newCourse.students || ''}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              
              {/* Two columns layout for pricing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price */}
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    required
                    min="0"
                    value={newCourse.price || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. 5000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                {/* Discount */}
                <div>
                  <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-1">
                    Discount
                  </label>
                  <input
                    type="text"
                    id="discount"
                    name="discount"
                    value={newCourse.discount || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. 30% off"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              
              <h4 className="text-lg font-medium border-b pb-2 mb-4 mt-8">Course Content</h4>
              
              {/* Course Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Course Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={newCourse.description || ''}
                  onChange={handleInputChange}
                  placeholder="Enter a detailed description of the course"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              {/* Course Outro */}
              <div>
                <label htmlFor="courseOutro" className="block text-sm font-medium text-gray-700 mb-1">
                  Course Outro
                </label>
                <textarea
                  id="courseOutro"
                  name="courseOutro"
                  rows={3}
                  value={newCourse.courseOutro || ''}
                  onChange={handleInputChange}
                  placeholder="Closing paragraph summarizing the course value"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              {/* Benefits */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Course Benefits <span className="text-red-500">*</span>
                  </label>
                  <button 
                    type="button" 
                    onClick={() => addArrayItem('benefits')}
                    className="text-sm text-green-600 hover:text-green-800"
                  >
                    + Add Benefit
                  </button>
                </div>
                
                {newCourse.benefits?.map((benefit, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={benefit}
                      onChange={(e) => handleArrayInputChange('benefits', index, e.target.value)}
                      placeholder="e.g. Learn the basics of renewable energy"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {newCourse.benefits && newCourse.benefits.length > 1 && (
                      <button 
                        type="button" 
                        onClick={() => removeArrayItem('benefits', index)}
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        <FiX />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Learning Outcomes */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Learning Outcomes <span className="text-red-500">*</span>
                  </label>
                  <button 
                    type="button" 
                    onClick={() => addArrayItem('learningOutcomes')}
                    className="text-sm text-green-600 hover:text-green-800"
                  >
                    + Add Outcome
                  </button>
                </div>
                
                {newCourse.learningOutcomes?.map((outcome, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={outcome}
                      onChange={(e) => handleArrayInputChange('learningOutcomes', index, e.target.value)}
                      placeholder="What students will learn"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {newCourse.learningOutcomes && newCourse.learningOutcomes.length > 1 && (
                      <button 
                        type="button" 
                        onClick={() => removeArrayItem('learningOutcomes', index)}
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        <FiX />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Skills Gained */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Skills Gained <span className="text-red-500">*</span>
                  </label>
                  <button 
                    type="button" 
                    onClick={() => addArrayItem('skillsGained')}
                    className="text-sm text-green-600 hover:text-green-800"
                  >
                    + Add Skill
                  </button>
                </div>
                
                {newCourse.skillsGained?.map((skill, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleArrayInputChange('skillsGained', index, e.target.value)}
                      placeholder="e.g. Project Management"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {newCourse.skillsGained && newCourse.skillsGained.length > 1 && (
                      <button 
                        type="button" 
                        onClick={() => removeArrayItem('skillsGained', index)}
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        <FiX />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Course Image URL */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Course Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={newCourse.image || ''}
                  onChange={handleInputChange}
                  placeholder="/images/course-image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <p className="text-sm text-gray-500 mt-1">Leave empty to use default image</p>
              </div>
              
              {/* Submit Buttons */}
              <div className="flex justify-end gap-3 pt-4 sticky bottom-0 bg-white pb-2 border-t mt-8">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Analytics Section */}
      <CourseAnalytics />
    </div>
  );
} 