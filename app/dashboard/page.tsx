'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import  { CourseData } from '../src/components/CourseCard';
import { FiClock, FiBook, FiUsers, FiPlay, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Dashboard() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentInProgressSlide, setCurrentInProgressSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const inProgressCarouselRef = useRef<HTMLDivElement>(null);
  
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  // Close dropdown when clicking outside
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Navigate to course details page
  const navigateToCourse = (courseId: number) => {
    router.push(`/courses/${courseId}`);
  };

  // Sample in-progress courses
  const inProgressCourses = [
    {
      id: 1,
      title: "Renewable Energy Transformation for Beginners",
      module: "Introduction",
      moduleNumber: 1,
      readingTime: 4,
      progress: 25,
      completed: 0,
      total: 6
    },
    {
      id: 2,
      title: "Sustainable Building Materials",
      module: "Green Materials",
      moduleNumber: 2,
      readingTime: 6,
      progress: 45,
      completed: 3,
      total: 8
    },
    {
      id: 3,
      title: "Climate Change Solutions",
      module: "Data Analysis",
      moduleNumber: 3,
      readingTime: 5,
      progress: 15,
      completed: 1,
      total: 7
    }
  ];

  // Sample course data
  const courses: CourseData[] = [
    {
      id: 1,
      title: "Renewable Energy Transformation for Beginners",
      image: "/images/cardtwo.png",
      rating: 4.5,
      students: 5,
      lessons: 5,
      hours: 4,
      instructor: "Kakashi Hatake"
    },
    {
      id: 2,
      title: "Renewable Energy Transformation for Beginners",
      image: "/images/card1.png",
      rating: 4.5,
      students: 5,
      lessons: 5,
      hours: 4,
      instructor: "Kakashi Hatake"
    },
    {
      id: 3,
      title: "Renewable Energy Transformation for Beginners",
      image: "/images/cardthree.png",
      rating: 4.5,
      students: 5,
      lessons: 5,
      hours: 4,
      instructor: "Kakashi Hatake"
    },
    {
      id: 4,
      title: "Renewable Energy Transformation for Beginners",
      image: "/images/cardtwo.png",
      rating: 4.5,
      students: 5,
      lessons: 5,
      hours: 4,
      instructor: "Kakashi Hatake"
    },
    {
      id: 5,
      title: "Renewable Energy Transformation for Beginners",
      image: "/images/card1.png",
      rating: 4.5,
      students: 5,
      lessons: 5,
      hours: 4,
      instructor: "Kakashi Hatake"
    },
    {
      id: 6,
      title: "Renewable Energy Transformation for Beginners",
      image: "/images/cardthree.png",
      rating: 4.5,
      students: 5,
      lessons: 5,
      hours: 4,
      instructor: "Kakashi Hatake"
    }
  ];

  // Navigate carousel functions
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? courses.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === courses.length - 3 ? 0 : prev + 1));
  };

  // Navigate in-progress carousel
  const prevInProgressSlide = () => {
    setCurrentInProgressSlide((prev) => 
      prev === 0 ? inProgressCourses.length - 1 : prev - 1
    );
  };

  const nextInProgressSlide = () => {
    setCurrentInProgressSlide((prev) => 
      prev === inProgressCourses.length - 1 ? 0 : prev + 1
    );
  };

  // Update carousel positions when slides change
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentSlide * (carouselRef.current.offsetWidth / 3),
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  useEffect(() => {
    if (inProgressCarouselRef.current) {
      // Get only the left cards by selecting the first child of each slide
      const leftCards = inProgressCarouselRef.current.querySelectorAll('.slide-left-card');
      
      // Calculate the width of a single left card
      const slideWidth = leftCards[0] ? (leftCards[0] as HTMLElement).offsetWidth : 0;
      
      // Scroll only the width of the left card
      inProgressCarouselRef.current.scrollTo({
        left: currentInProgressSlide * slideWidth,
        behavior: 'smooth'
      });
    }
  }, [currentInProgressSlide]);

  // Static right card content (will be positioned absolutely)
  const staticRightCard = (
    <div className="bg-white rounded-lg border border-green-100 shadow-sm p-6  static-right-card">
    <div className="flex flex-row gap-2">
    <div>
      <h3 className=" font-bold text-black mb-2">Take the next step</h3>
      <p className="text-gray-500 mb-6 text-sm">Become a Tier 4 user and unlock new opportunities by taking this course.</p>
      </div>
      
      <div className="flex justify-end mb-6">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-lime-100 flex items-center justify-center">
            <div className="rounded-full bg-lime-400 w-20 h-20"></div>
          </div>
        </div>
      </div>
    </div>
      
      <a href="#" className="text-green-500 text-sm font-medium flex items-center hover:text-green-600 transition-colors mt-10">
        <span className="text-black text-sm">Solar panel rigging for professionals</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-black" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white" onClick={closeDropdown}>
      {/* Featured Course Section with Background Image */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/Isolation_Mode.png" 
            alt="Background pattern" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-16 mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
            <div className="flex gap-2">
              <button 
                onClick={prevInProgressSlide}
                className="bg-[#15B67A] rounded-full p-2 shadow-sm hover:bg-[#15B67A]"
                aria-label="Previous course"
              >
                <FiChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={nextInProgressSlide}
                className="bg-[#15B67A] rounded-full p-2 shadow-sm hover:bg-[#15B67A]"
                aria-label="Next course"
              >
                <FiChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          
          {/* Course Cards Row */}
          <div className="relative mb-12 ">
            {/* Position the right card absolutely to keep it in place */}
            <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:z-10 lg:bottom-0 lg:w-85">
              {staticRightCard}
            </div>
            
            <div 
              ref={inProgressCarouselRef}
              className="flex overflow-x-hidden scroll-smooth carousel-container"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {inProgressCourses.map((course) => (
                <div key={course.id} className="min-w-full flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                  <div className="flex flex-col lg:flex-row w-1/3 lg:w-3/4">
                    {/* Left Card - Current Course */}
                    <div className="flex-1 slide-left-card">
                      <div 
                        className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden h-full cursor-pointer"
                        onClick={() => navigateToCourse(course.id)}
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold border-b border-black text-black">Sustainable Energy Solutions: Professional Certificate</h2>


                            <div className="relative">
                              <button 
                                className="text-sm font-medium text-black flex items-center"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleDropdown();
                                }}
                              >
                                {course.completed} of {course.total} completed
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </button>
                              <div 
                                className={`absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-20 ${dropdownOpen ? 'block' : 'hidden'}`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div className="py-2">
                                  <div className="px-4 py-2 border-b border-gray-100">
                                    <h4 className="font-medium text-gray-800">Module Progress</h4>
                                  </div>
                                  
                                  <div className="px-4 py-2 flex justify-between items-center hover:bg-gray-50">
                                    <span className="text-sm text-black">Module 1: Introduction</span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded">In Progress</span>
                                    </div>
                                  </div>
                                  
                                  <div className="px-4 py-2 flex justify-between items-center hover:bg-gray-50">
                                    <span className="text-sm text-black">Module 2: Basics of Energy</span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">Not Started</span>
                                    </div>
                                  </div>
                                  
                                  <div className="px-4 py-2 flex justify-between items-center hover:bg-gray-50">
                                    <span className="text-sm text-black">Module 3: Solar Energy</span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">Not Started</span>
                                    </div>
                                  </div>
                                  
                                  <div className="px-4 py-2 flex justify-between items-center hover:bg-gray-50">
                                    <span className="text-sm text-black">Module 4: Wind Energy</span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">Not Started</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>


                          </div>
                          
                          <div className="flex bg-[#F5F5F5] rounded-lg p-4">
                            {/* Play Button */}
                            <div className="relative flex-shrink-0 mr-6">
                              <div className="w-32 h-32 rounded-full border-8 border-teal-200 overflow-hidden flex items-center justify-center bg-teal-700 relative">
                                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                  <div 
                                    className="bg-white/30 rounded-full w-14 h-14 flex items-center justify-center z-10 cursor-pointer"
                                  >
                                    <FiPlay className="text-white w-7 h-7" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Course Info */}
                            <div className="flex-1">
                              <h3 className="text-teal-500 text-2xl font-medium mb-4">{course.title}</h3>
                              
                              <div className="w-full">
                                <div className="bg-gray-200 h-2 rounded-full mb-2">
                                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                                </div>
                                <div className="flex justify-between text-sm text-gray-700">
                                  <span>Overall Progress</span>
                                  <span>{course.progress}%</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Right Side Info */}
                            <div className="border-l border-gray-300 pl-8 ml-8 w-56 flex-shrink-0">
                              <div className="flex items-start gap-2 mb-1">
                                <div className="bg-teal-100 text-teal-600 p-1 rounded">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </div>
                                <h4 className="font-medium text-gray-800">{course.module}</h4>
                              </div>
                              <div className="text-gray-600 ml-7">Module {course.moduleNumber}</div>
                              <div className="text-gray-600 ml-7">Reading - {course.readingTime} min</div>
                              <div className="mt-4 ml-7">
                                <button className="text-sm font-medium text-gray-700">Next Up</button>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                    
                    {/* Right Card - Take Next Step - Only visible on mobile */}
                    <div className="lg:hidden">
                      {staticRightCard}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Navigation for multiple courses */}
          <div className="flex justify-center gap-2 mb-6">
            {inProgressCourses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentInProgressSlide(index)}
                className={`w-2 h-2 rounded-full ${currentInProgressSlide === index ? 'bg-teal-500' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Courses Carousel */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Courses</h2>
          
          <div className="relative">
            {/* Previous Button */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="flex overflow-x-hidden scroll-smooth gap-6 pb-4"
            >
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  className="min-w-[calc(33.333%-16px)] flex-shrink-0 cursor-pointer" 
                  onClick={() => navigateToCourse(course.id)}
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Course Image */}
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gray-200">
                        <Image src={course.image} alt={course.title} fill style={{ objectFit: 'cover' }} />
                      </div>
                    </div>
                    
                    {/* Course Content */}
                    <div className="p-4">
                      {/* Rating */}
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">
                            {i < Math.floor(course.rating) ? "★" : i === Math.floor(course.rating) && course.rating % 1 > 0 ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold mb-4 text-black">{course.title}</h3>
                      
                      {/* Meta Info */}
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <FiUsers className="text-green-500" />
                        <span className="text-green-500">{course.students}</span>
                        <span className="text-gray-600">Students</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <FiBook className="text-green-500" />
                        <span className="text-green-500">{course.lessons}</span>
                        <span className="text-gray-600">Lessons</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm mb-4">
                        <FiClock className="text-green-500" />
                        <span className="text-green-500">{course.hours}</span>
                        <span className="text-gray-600">hours</span>
                      </div>
                      
                      {/* Instructor */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"></div>
                          <span className="ml-2 text-sm text-black">{course.instructor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Next Button */}
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(courses.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 3)}
                className={`w-2 h-2 rounded-full ${index * 3 <= currentSlide && currentSlide < (index + 1) * 3 ? 'bg-green-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 