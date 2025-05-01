'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiEdit2, FiShare2, FiPlus, FiSave, FiX, FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';

export default function ProfilePage() {
 
  const [editMode, setEditMode] = useState<string | null>(null);
  
  // Profile data with initial values
  const [projects, setProjects] = useState<{
    id: number;
    title: string;
    date: string;
    description: string;
    link?: string;
  }[]>([]);
  
  const [workHistory, setWorkHistory] = useState([
    {
      id: 1,
      title: "User Experience (UX) Designer at Lemu",
      date: "July 2023 - Present",
      description: "Designed the overall product strategy."
    }
  ]);
  
  const [credentials, setCredentials] = useState([
    {
      id: 1,
      title: "User Experience (UX) Designer at Lemu",
      date: "July 2023 - Present",
      description: "Designed the overall product strategy."
    }
  ]);
  
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Foundations of Renewable Energy",
      date: "July 2023",
      issuer: "Issued By Kaizo Intl"
    },
    {
      id: 2,
      title: "Foundations of Renewable Energy",
      date: "July 2023",
      issuer: "Issued By Kaizo Intl"
    }
  ]);

  // New empty templates
  const emptyProject = {
    id: Date.now(),
    title: "",
    date: "",
    description: "",
    link: ""
  };
  
  const emptyWorkHistory = {
    id: Date.now(),
    title: "",
    date: "",
    description: ""
  };

  const emptyCredential = {
    id: Date.now(),
    title: "",
    date: "",
    description: ""
  };

  const emptyCourse = {
    id: Date.now(),
    title: "",
    date: "",
    issuer: ""
  };
  
  // Toggle edit mode for a specific section
  const toggleEditMode = (section: string) => {
    if (editMode === section) {
      setEditMode(null);
    } else {
      setEditMode(section);
    }
  };
  
  // Add new item handlers
  const addProject = () => {
    const newItem = { ...emptyProject, id: Date.now() };
    setProjects([...projects, newItem]);
    setEditMode(`project-${newItem.id}`);
  };

  const addWorkHistory = () => {
    const newItem = { ...emptyWorkHistory, id: Date.now() };
    setWorkHistory([...workHistory, newItem]);
    setEditMode(`work-history-${newItem.id}`);
  };

  const addCredential = () => {
    const newItem = { ...emptyCredential, id: Date.now() };
    setCredentials([...credentials, newItem]);
    setEditMode(`credential-${newItem.id}`);
  };

  const addCourse = () => {
    const newItem = { ...emptyCourse, id: Date.now() };
    setCourses([...courses, newItem]);
    setEditMode(`course-${newItem.id}`);
  };
  
  // Delete item handlers
  const deleteProject = (id: number) => {
    setProjects(projects.filter(item => item.id !== id));
    if (editMode === `project-${id}`) {
      setEditMode(null);
    }
  };

  const deleteWorkHistory = (id: number) => {
    setWorkHistory(workHistory.filter(item => item.id !== id));
    if (editMode === `work-history-${id}`) {
      setEditMode(null);
    }
  };

  const deleteCredential = (id: number) => {
    setCredentials(credentials.filter(item => item.id !== id));
    if (editMode === `credential-${id}`) {
      setEditMode(null);
    }
  };

  const deleteCourse = (id: number) => {
    setCourses(courses.filter(item => item.id !== id));
    if (editMode === `course-${id}`) {
      setEditMode(null);
    }
  };
  
  // Form change handlers
  const handleProjectChange = (id: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjects(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };
  
  const handleWorkHistoryChange = (id: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setWorkHistory(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };
  
  const handleCredentialChange = (id: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };
  
  const handleCourseChange = (id: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCourses(prev => 
      prev.map(course => 
        course.id === id ? { ...course, [name]: value } : course
      )
    );
  };
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-4 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Left Column - Personal Details */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 text-center items-center">
              <div className="flex justify-between mb-4">
                <button className="text-gray-500 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-500 p-2">
                  <FiEdit2 className="h-5 w-5" />
                </button>
              </div>
              
              <h2 className="text-lg font-bold text-center mb-2 text-black">Personal Details</h2>
              
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden my-4 sm:my-6 border-4 border-teal-600">
                <Image 
                  src="/images/kakashi.jpg" 
                  alt="Profile Picture" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Kakashi Hatake</h1>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-gray-500">Sustainer</span>
                <span className="bg-green-500 text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">PRO</span>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
              </div>
              
              <a href="#" className="hover:underline text-sm block mb-6">
                <span className="text-[#007AFF]">Update profile visibility</span>
              </a>

              <div className="flex items-center justify-center gap-2">
                <button className="flex items-center justify-center gap-2 border w-full border-gray-300 rounded-md py-2 px-4 text-black hover:bg-gray-50 transition-colors">
                  <FiShare2 className="h-4 w-4" />
                  <span>Share your profile</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full md:w-3/4">
            {/* Achievements Section */}
            <div className="p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-10">Achievements</h2>
              
              <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-12 mb-10 sm:mb-16">
                {/* Tier 1 - Active */}
                <div className="relative flex flex-col items-center">
                  <div className="absolute -top-2 -left-2">
                    <span className="bg-green-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full">
                      Current
                    </span>
                  </div>
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold border-4 border-lime-300 bg-teal-700 mb-3">
                    1
                  </div>
                  <span className="text-black font-medium">Tier 1 (Active)</span>
                </div>
                
                {/* Tiers 2-4 - Locked */}
                {[2, 3, 4].map((tier) => (
                  <div key={tier} className="flex flex-col items-center group relative">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold border-4 border-gray-300 bg-gray-700 mb-3 relative">
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-10 w-8 sm:w-10 text-white opacity-90 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-gray-200"></span>
                      </div>
                    </div>
                    <span className="text-black font-medium">Tier {tier}</span>
                    
                    {/* Hover tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full mt-2 bg-white p-4 rounded-lg shadow-lg text-left z-10 w-64 border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Requirements for Tier {tier}:</h4>
                      {tier === 2 && (
                        <>
                          <p className="text-black text-sm mb-2">• Complete &quot;Fundamentals of Sustainability&quot; course</p>
                          <p className="text-black text-sm mb-2">• Earn 50 community points</p>
                          <p className="text-black text-sm mb-2">• Participate in 1 sustainability challenge</p>
                        </>
                      )}
                      {tier === 3 && (
                        <>
                          <p className="text-black text-sm mb-2">• Complete &quot;Intermediate Renewable Energy&quot; course</p>
                          <p className="text-black text-sm mb-2">• Participate in 2 sustainability projects</p>
                          <p className="text-black text-sm mb-2">• Submit 1 case study</p>
                        </>
                      )}
                      {tier === 4 && (
                        <>
                          <p className="text-black text-sm mb-2">• Complete &quot;Advanced Energy Solutions&quot; course</p>
                          <p className="text-black text-sm mb-2">• Mentor 3 new members</p>
                          <p className="text-black text-sm mb-2">• Present at 1 sustainability event</p>
                        </>
                      )}
                      <Link href={`/tier/${tier}/requirements`} className="text-sm text-teal-600 font-medium flex items-center mt-2 hover:text-teal-700 py-2">
                       
                       <span className="text-black"> View detailed requirements</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-black" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Call to action for next tier */}
              <div className="relative border-l-4 border-teal-500 bg-white rounded-lg shadow-sm p-5 sm:p-8 pl-6 sm:pl-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to advance to Tier 2?</h3>
                <p className="text-black mb-4 sm:mb-6 text-base sm:text-lg max-w-3xl">
                  Complete the &quot;Fundamentals of Sustainability&quot; course and contribute to our community to unlock advanced features and recognition.
                </p>
                <Link href="/courses/fundamentals" className="inline-flex items-center bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-teal-700 transition-colors text-base sm:text-lg font-medium">
                  Start the course
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Experience Section */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Experience</h2>
              
              <div className="mb-6 sm:mb-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Projects</h3>
                  <button 
                    onClick={addProject}
                    className="flex items-center justify-center sm:justify-start gap-2 bg-white border border-gray-300 rounded-md py-2 px-4 text-black hover:bg-gray-50 transition-colors w-full sm:w-auto"
                  >
                    <span>Add new project</span>
                    <FiPlus className="h-5 w-5" />
                  </button>
                </div>
                
                {projects.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center text-gray-500">
                    No projects added yet
                  </div>
                ) : (
                  projects.map(project => (
                    <div key={project.id} className="mb-4">
                      {editMode === `project-${project.id}` ? (
                        <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 border border-gray-200 shadow-sm">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4">
                            <h4 className="font-bold text-gray-900">Edit Project</h4>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => deleteProject(project.id)} 
                                className="p-2 text-red-500 hover:text-red-700"
                                title="Delete"
                              >
                                <FiTrash2 className="h-5 w-5" />
                              </button>
                              <button 
                                onClick={() => setEditMode(null)} 
                                className="p-2 text-gray-500 hover:text-black"
                                title="Cancel"
                              >
                                <FiX className="h-5 w-5" />
                              </button>
                              <button 
                                onClick={() => setEditMode(null)} 
                                className="p-2 text-teal-500 hover:text-teal-700"
                                title="Save"
                              >
                                <FiSave className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-black mb-1">Project Title</label>
                              <input
                                type="text"
                                name="title"
                                value={project.title}
                                onChange={(e) => handleProjectChange(project.id, e)}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-black mb-1">Time Period</label>
                              <input
                                type="text"
                                name="date"
                                value={project.date}
                                onChange={(e) => handleProjectChange(project.id, e)}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-black mb-1">Description</label>
                              <textarea
                                name="description"
                                value={project.description}
                                onChange={(e) => handleProjectChange(project.id, e)}
                                rows={3}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-black mb-1">Project Link (optional)</label>
                              <input
                                type="url"
                                name="link"
                                value={project.link}
                                onChange={(e) => handleProjectChange(project.id, e)}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="https://..."
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 relative group">
                          <div className="absolute top-4 right-4 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => deleteProject(project.id)} 
                              className="text-red-500 hover:text-red-700 p-1 sm:p-0"
                              title="Delete"
                            >
                              <FiTrash2 className="h-5 w-5" />
                            </button>
                            <button 
                              onClick={() => toggleEditMode(`project-${project.id}`)} 
                              className="text-gray-500 hover:text-black p-1 sm:p-0"
                              title="Edit"
                            >
                              <FiEdit2 className="h-5 w-5" />
                            </button>
                          </div>
                          
                          <h4 className="text-base font-bold text-gray-900 pr-16 sm:pr-0">{project.title}</h4>
                          <p className="text-sm text-gray-500 mb-4">({project.date})</p>
                          <p className="text-black mb-3">{project.description}</p>
                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-teal-600 hover:text-teal-700 font-medium flex items-center"
                            >
                              <span className="text-black">View Project</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-black" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Work history</h3>
                  <button 
                    onClick={addWorkHistory}
                    className="flex items-center justify-center sm:justify-start gap-2 bg-white border border-gray-300 rounded-md py-2 px-4 text-black hover:bg-gray-50 transition-colors w-full sm:w-auto"
                  >
                    <span>Add new</span>
                    <FiPlus className="h-5 w-5" />
                  </button>
                </div>
                
                {workHistory.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center text-gray-500">
                    No work history added yet
                  </div>
                ) : (
                  workHistory.map(item => (
                    <div key={item.id} className="mb-4">
                      {editMode === `work-history-${item.id}` ? (
                        <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 border border-gray-200 shadow-sm">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4">
                            <h4 className="font-bold text-gray-900">Edit Work History</h4>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => deleteWorkHistory(item.id)} 
                                className="p-2 text-red-500 hover:text-red-700"
                                title="Delete"
                              >
                                <FiTrash2 className="h-5 w-5" />
                              </button>
                              <button 
                                onClick={() => setEditMode(null)} 
                                className="p-2 text-gray-500 hover:text-black"
                                title="Cancel"
                              >
                                <FiX className="h-5 w-5" />
                              </button>
                              <button 
                                onClick={() => setEditMode(null)} 
                                className="p-2 text-teal-500 hover:text-teal-700"
                                title="Save"
                              >
                                <FiSave className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-black mb-1">Position Title</label>
                              <input
                                type="text"
                                name="title"
                                value={item.title}
                                onChange={(e) => handleWorkHistoryChange(item.id, e)}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-black mb-1">Date Range</label>
                              <input
                                type="text"
                                name="date"
                                value={item.date}
                                onChange={(e) => handleWorkHistoryChange(item.id, e)}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-black mb-1">Description</label>
                              <textarea
                                name="description"
                                value={item.description}
                                onChange={(e) => handleWorkHistoryChange(item.id, e)}
                                rows={3}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 relative group">
                          <div className="absolute top-4 right-4 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => deleteWorkHistory(item.id)} 
                              className="text-red-500 hover:text-red-700 p-1 sm:p-0"
                              title="Delete"
                            >
                              <FiTrash2 className="h-5 w-5" />
                            </button>
                            <button 
                              onClick={() => toggleEditMode(`work-history-${item.id}`)} 
                              className="text-gray-500 hover:text-black p-1 sm:p-0"
                              title="Edit"
                            >
                              <FiEdit2 className="h-5 w-5" />
                            </button>
                          </div>
                          
                          <h4 className="text-base font-bold text-gray-900 pr-16 sm:pr-0">{item.title}</h4>
                          <p className="text-sm text-gray-500 mb-4">({item.date})</p>
                          <p className="text-black">{item.description}</p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
            
            {/* Education Section */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Education</h2>
              
              <div className="mb-6 sm:mb-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Credentials</h3>
                  <button 
                    onClick={addCredential}
                    className="flex items-center justify-center sm:justify-start gap-2 bg-white border border-gray-300 rounded-md py-2 px-4 text-black hover:bg-gray-50 transition-colors w-full sm:w-auto"
                  >
                    <span>Add new</span>
                    <FiPlus className="h-5 w-5" />
                  </button>
                </div>
                
                {credentials.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center text-gray-500">
                    No credentials added yet
                  </div>
                ) : (
                  credentials.map(credential => (
                    <div key={credential.id} className="mb-4">
                      {editMode === `credential-${credential.id}` ? (
                        <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 border border-gray-200 shadow-sm">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4">
                            <h4 className="font-bold text-gray-900">Edit Credential</h4>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => deleteCredential(credential.id)} 
                                className="p-2 text-red-500 hover:text-red-700"
                                title="Delete"
                              >
                                <FiTrash2 className="h-5 w-5" />
                              </button>
                              <button 
                                onClick={() => setEditMode(null)} 
                                className="p-2 text-gray-500 hover:text-black"
                                title="Cancel"
                              >
                                <FiX className="h-5 w-5" />
                              </button>
                              <button 
                                onClick={() => setEditMode(null)} 
                                className="p-2 text-teal-500 hover:text-teal-700"
                                title="Save"
                              >
                                <FiSave className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-black mb-1">Credential Title</label>
                              <input
                                type="text"
                                name="title"
                                value={credential.title}
                                onChange={(e) => handleCredentialChange(credential.id, e)}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-black mb-1">Date Range</label>
                              <input
                                type="text"
                                name="date"
                                value={credential.date}
                                onChange={(e) => handleCredentialChange(credential.id, e)}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-black mb-1">Description</label>
                              <textarea
                                name="description"
                                value={credential.description}
                                onChange={(e) => handleCredentialChange(credential.id, e)}
                                rows={3}
                                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 relative group">
                          <div className="absolute top-4 right-4 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => deleteCredential(credential.id)} 
                              className="text-red-500 hover:text-red-700 p-1 sm:p-0"
                              title="Delete"
                            >
                              <FiTrash2 className="h-5 w-5" />
                            </button>
                            <button 
                              onClick={() => toggleEditMode(`credential-${credential.id}`)} 
                              className="text-gray-500 hover:text-black p-1 sm:p-0"
                              title="Edit"
                            >
                              <FiEdit2 className="h-5 w-5" />
                            </button>
                          </div>
                          
                          <h4 className="text-base font-bold text-gray-900 pr-16 sm:pr-0">{credential.title}</h4>
                          <p className="text-sm text-gray-500 mb-4">({credential.date})</p>
                          <p className="text-black">{credential.description}</p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Courses</h3>
                  <button 
                    onClick={addCourse}
                    className="flex items-center justify-center sm:justify-start gap-2 bg-white border border-gray-300 rounded-md py-2 px-4 text-black hover:bg-gray-50 transition-colors w-full sm:w-auto"
                  >
                    <span>Add new</span>
                    <FiPlus className="h-5 w-5" />
                  </button>
                </div>
                
                {courses.map((course) => (
                  <div key={course.id} className="mb-4">
                    {editMode === `course-${course.id}` ? (
                      <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4">
                          <h4 className="font-bold text-gray-900">Edit Course</h4>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => deleteCourse(course.id)} 
                              className="p-2 text-red-500 hover:text-red-700"
                              title="Delete"
                            >
                              <FiTrash2 className="h-5 w-5" />
                            </button>
                            <button 
                              onClick={() => setEditMode(null)} 
                              className="p-2 text-gray-500 hover:text-black"
                              title="Cancel"
                            >
                              <FiX className="h-5 w-5" />
                            </button>
                            <button 
                              onClick={() => setEditMode(null)} 
                              className="p-2 text-teal-500 hover:text-teal-700"
                              title="Save"
                            >
                              <FiSave className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-black mb-1">Course Title</label>
                            <input
                              type="text"
                              name="title"
                              value={course.title}
                              onChange={(e) => handleCourseChange(course.id, e)}
                              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-black mb-1">Completion Date</label>
                            <input
                              type="text"
                              name="date"
                              value={course.date}
                              onChange={(e) => handleCourseChange(course.id, e)}
                              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-black mb-1">Issuer</label>
                            <input
                              type="text"
                              name="issuer"
                              value={course.issuer}
                              onChange={(e) => handleCourseChange(course.id, e)}
                              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 relative group">
                        <div className="absolute top-4 right-4 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => deleteCourse(course.id)} 
                            className="text-red-500 hover:text-red-700 p-1 sm:p-0"
                            title="Delete"
                          >
                            <FiTrash2 className="h-5 w-5" />
                          </button>
                          <button 
                            onClick={() => toggleEditMode(`course-${course.id}`)} 
                            className="text-gray-500 hover:text-black p-1 sm:p-0"
                            title="Edit"
                          >
                            <FiEdit2 className="h-5 w-5" />
                          </button>
                        </div>
                        
                        <h4 className="text-base font-bold text-gray-900 pr-16 sm:pr-0">{course.title}</h4>
                        <p className="text-sm text-gray-500 mb-4">({course.date})</p>
                        <p className="text-black">{course.issuer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 