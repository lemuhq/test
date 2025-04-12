'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaStar, FaRegStar, FaUser, FaClock, FaBook, FaUsers, FaCheck, FaShare } from 'react-icons/fa';
import { MdOutlineOndemandVideo, MdOutlineAllInclusive, MdOutlineDesktopWindows, MdOutlineInsertDriveFile, MdOutlineComputer, MdOutlineSmartphone, MdOutlineWifi } from 'react-icons/md';
import Footer from '../../src/components/footer';
import CourseCard, { CourseData } from '../../src/components/CourseCard';

// TypeScript type for page parameters
type CourseDetailPageProps = {
  params: {
    id: string;
  };
};

// Sample course data for the current course
const courseData = {
  id: 2,
  title: "Renewable Energy Transformation for Beginners",
  image: "/images/cardtwo.png",
  videoUrl: "#",
  rating: 4.5,
  students: 987,
  lessons: 15,
  hours: 4,
  instructor: "Akwande Amail",
  instructorRole: "Data Science",
  price: 5000,
  discount: "30% off",
  dateUpdated: "April 20th, 2024",
  description: `
    Are you curious about renewable energy and its potential to transform our world? This beginner-friendly course is designed to introduce you to the fundamentals of renewable energy systems, making complex concepts accessible to everyone—whether an aspiring environmentalist, a professional looking to expand your knowledge, or simply someone interested in green energy solutions, this course offers an engaging starting point.

    Through practical examples and simple explanations, you'll explore:
  `,
  benefits: [
    "The basics of renewable energy: solar, wind, hydro, biomass, and geothermal.",
    "The environmental and economic benefits of clean energy solutions.",
    "How renewable energy technologies work and their real-world applications.",
    "The global shift toward sustainability and your role in the transition."
  ],
  courseOutro: `
    This course employs a mix of engaging instructional methods and real-world examples to accommodate learners from diverse backgrounds. By the end, you'll gain a solid foundation in sustainable renewable energy systems and their impact, empowering you to make informed decisions and contribute to a greener planet.

    Join us as we unlock the power of renewable energy and build a sustainable future—together.
  `,
  skillsGained: [
    "Project Management",
    "Project Management",
    "Project Management",
    "Project Management",
    "Project Management"
  ],
  learningOutcomes: [
    "The basics of songwriting",
    "How to find inspiration",
    "Theological songwriting",
    "How to sell your songs"
  ],
  courseBenefits: [
    { text: "38 hours, 20 minute on-demand video", icon: <MdOutlineOndemandVideo color="black" size={25} /> },
    { text: "Full lifetime access", icon: <MdOutlineAllInclusive color="black" size={25} /> },
    { text: "Access on mobile, desktop & TV", icon: <MdOutlineDesktopWindows color="black" size={25} /> },
    { text: "Certificate of completion", icon: <MdOutlineInsertDriveFile color="black" size={25} /> }
  ],
  requirements: [
    { text: "A working computer", icon: <MdOutlineComputer color="black" size={25} /> },
    { text: "Or a smartphone", icon: <MdOutlineSmartphone color="black" size={25} /> },
    { text: "& internet", icon: <MdOutlineWifi color="black" size={25} /> }
  ]
};

// Sample related courses
const relatedCourses: CourseData[] = [
  {
    id: 101,
    title: "Renewable Energy Transformation for Beginners",
    image: "/images/cardthree.png",
    rating: 4.9,
    students: 782,
    lessons: 5,
    hours: 4,
    instructor: "Kawahi Hekate"
  },
  {
    id: 102,
    title: "Renewable Energy Transformation for Beginners",
    image: "/images/card1.png",
    rating: 4.7,
    students: 943,
    lessons: 5,
    hours: 4,
    instructor: "Kawahi Hekate"
  },
  {
    id: 103,
    title: "Renewable Energy Transformation for Beginners",
    image: "/images/cardtwo.png",
    rating: 4.8,
    students: 1105,
    lessons: 5,
    hours: 4,
    instructor: "Kawahi Hekate"
  }
];

export default function CourseDetail({ params }: CourseDetailPageProps) {
  const [activeTab, setActiveTab] = useState('overview');
  
  // In a real app, you would fetch course data based on params.id
  // const courseId = params.id;
  // console.log(`Fetching course with ID: ${courseId}`);
  
  // Function to render star ratings
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400 opacity-50" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Course Header with Breadcrumb */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center overflow-hidden bg-[#2E646F]">
        {/* Background pattern */}
        <Image 
          src="/images/coursepattern.png"
          alt="Course Pattern Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        
        {/* Breadcrumb and Title */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="flex items-center text-white/80 mb-2 justify-center text-lg sm:text-xl md:text-2xl lg:text-[36px]">
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-white truncate max-w-[200px] sm:max-w-[300px] md:max-w-full">{courseData.title}</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Left column - Course content */}
          <div className="w-full lg:w-2/3">
            {/* Video Preview */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden border-4 border-white shadow-lg mb-8">
              <Image 
                src="/images/cardtwo.png"
                alt={courseData.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-100 transition">
                  <FaPlay className="text-[#2E646F] ml-1 text-base md:text-xl" />
                </div>
              </div>
            </div>
            
            {/* Instructor and Course Info */}
            <div className="mb-8 border-b pb-6">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0 w-full sm:w-auto">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2E646F] rounded-full overflow-hidden">
                      <Image 
                        src="/images/intructor.png"
                        alt={courseData.instructor}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-black">Instructor</p>
                    <p className="font-medium text-sm md:text-base text-black">{courseData.instructor}</p>
                  </div>
                </div>
                
                {/* Mobile grid for smaller screens */}
                <div className="grid grid-cols-2 gap-4 w-full sm:hidden mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-black">Category</p>
                    <p className="font-medium text-sm md:text-base text-black">{courseData.instructorRole}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs md:text-sm text-black">Last Update</p>
                    <p className="font-medium text-sm md:text-base text-black">{courseData.dateUpdated}</p>
                  </div>
                  
                  <div className="col-span-2 mt-3">
                    <p className="text-xs md:text-sm text-black">Ratings (4.50)</p>
                    <div className="flex items-center">
                      {renderStars(courseData.rating)}
                    </div>
                  </div>
                </div>
                
                {/* Desktop layout - hidden on mobile */}
                <div className="hidden sm:flex sm:items-center">
                  {/* Vertical divider */}
                  <div className="h-10 w-px bg-black mx-2 md:mx-6"></div>
                  
                  <div>
                    <p className="text-xs md:text-sm text-black">Category</p>
                    <p className="font-medium text-sm md:text-base text-black">{courseData.instructorRole}</p>
                  </div>
                  
                  {/* Vertical divider */}
                  <div className="h-10 w-px bg-black mx-2 md:mx-6 lg:mx-10"></div>
                  
                  <div>
                    <p className="text-xs md:text-sm text-black">Last Update</p>
                    <p className="font-medium text-sm md:text-base text-black">{courseData.dateUpdated}</p>
                  </div>
                  
                  {/* Vertical divider */}
                  <div className="h-10 w-px bg-black mx-2 md:mx-6 lg:mx-10"></div>
                  
                  <div>
                    <p className="text-xs md:text-sm text-black">Ratings (4.50)</p>
                    <div className="flex items-center">
                      {renderStars(courseData.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b mb-8 bg-[#F5F5F5] justify-between sm:justify-evenly">
              <button 
                className={`px-3 sm:px-5 md:px-10 py-3 whitespace-nowrap w-1/4 text-sm sm:text-base font-medium ${activeTab === 'overview' ? 'text-white bg-green-500' : 'text-[#256670] hover:bg-gray-100'}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-3 sm:px-5 md:px-10 py-3 whitespace-nowrap w-1/4 text-sm sm:text-base font-medium ${activeTab === 'curriculum' ? 'text-white bg-green-500' : 'text-[#256670] hover:bg-gray-100'}`}
                onClick={() => setActiveTab('curriculum')}
              >
                Curriculum
              </button>
              <button 
                className={`px-3 sm:px-5 md:px-10 py-3 whitespace-nowrap w-1/4 text-sm sm:text-base font-medium ${activeTab === 'review' ? 'text-white bg-green-500' : 'text-[#256670] hover:bg-gray-100'}`}
                onClick={() => setActiveTab('review')}
              >
                Review
              </button>
              <button 
                className={`px-3 sm:px-5 md:px-10 py-3 whitespace-nowrap w-1/4 text-sm sm:text-base font-medium ${activeTab === 'instructor' ? 'text-white bg-green-500' : 'text-[#256670] hover:bg-gray-100'}`}
                onClick={() => setActiveTab('instructor')}
              >
                Instructor
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="mb-12">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">About the Course</h2>
                  <p className="text-sm md:text-base text-gray-700 mb-6">{courseData.description}</p>
                  
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-sm md:text-base">
                    {courseData.benefits.slice(0, 4).map((benefit, index) => (
                      <li key={index} className="text-gray-700">{benefit}</li>
                    ))}
                  </ul>
                  
                  <p className="text-sm md:text-base text-gray-700 mb-8">{courseData.courseOutro}</p>
                  
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">Skills you'll gain</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {courseData.skillsGained.map((skill, index) => (
                      <div key={index} className="bg-gray-100 px-4 py-3 rounded-md text-black text-sm md:text-base">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'curriculum' && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">Course Curriculum</h2>
                  <p className="text-sm md:text-base text-gray-600 mb-6">This curriculum is currently being developed.</p>
                </div>
              )}
              
              {activeTab === 'review' && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">Student Reviews</h2>
                  <p className="text-sm md:text-base text-gray-600 mb-6">Reviews will be available once students complete the course.</p>
                </div>
              )}
              
              {activeTab === 'instructor' && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">About the Instructor</h2>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                      <Image 
                        src="/images/intructor.png"
                        alt={courseData.instructor}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-medium text-black">{courseData.instructor}</h3>
                      <p className="text-gray-600">{courseData.instructorRole}</p>
                      <p className="mt-3 text-sm md:text-base text-gray-700">
                        An experienced instructor passionate about teaching renewable energy concepts to beginners.
                        With over 10 years in the field, they bring practical knowledge and clear explanations to
                        complex topics.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right column - Course details card */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 order-first lg:order-last mb-8 lg:mb-0">
            <div className="rounded-lg overflow-hidden sticky top-4">
              <div className="p-4 sm:p-6">
                <div className="bg-[#F5F5F5] p-4 sm:p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-xl sm:text-2xl font-bold text-black">₦{courseData.price.toLocaleString()}</div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm font-medium">
                      {courseData.discount}
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#2E646F] text-white py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium mb-3 sm:mb-4 hover:bg-[#245058] transition">
                    Buy Now
                  </button>
                  
                  <button className="w-full bg-green-500 text-white py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium mb-4 sm:mb-6 hover:bg-green-600 transition">
                    Add to cart
                  </button>
                </div>
                
                <div className="space-y-4 mt-6 sm:mt-10 p-3 sm:p-6">
                  <div className="flex text-yellow-400 justify-start mb-2">
                    {renderStars(courseData.rating)}
                  </div>
                  
                  <h3 className="font-bold text-start mb-2 sm:mb-3 text-black py-2 sm:py-3 text-sm sm:text-base">{courseData.title}</h3>
                  
                  <div className="flex flex-wrap items-center justify-start text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center mr-4 mb-2 sm:mb-0">
                      <FaUsers className="text-green-500 mr-1" />
                      <span className="text-gray-600 mr-1">{courseData.students}</span>
                      <span>Students</span>
                    </div>
                    
                    <div className="flex items-center">
                      <FaBook className="text-green-500 mr-1" />
                      <span className="text-gray-600 mr-1">{courseData.lessons}</span>
                      <span>Lessons</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-start items-center text-xs sm:text-sm text-gray-600">
                    <FaClock className="text-green-500 mr-1" />
                    <span className="text-gray-600 mr-1">{courseData.hours}</span>
                    <span>hours</span>
                  </div>
                  
                  <button className="w-full border border-black text-black py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-50 transition flex justify-center items-center">
                    <FaShare className="mr-2" />
                    <span>Share this course</span>
                  </button>
                </div>
              </div>
              
              {/* divider */}
              <div className="h-px bg-gray-300 my-4 sm:my-6"></div>
              
              <div className="px-4 sm:px-6 py-4 sm:py-6">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-black">What you'll learn</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {courseData.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-black mt-1 mr-2 flex-shrink-0 text-xs sm:text-sm" />
                      <span className="text-black text-xs sm:text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-t">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-black">Course benefits</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {courseData.courseBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div className="flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-gray-600 text-sm">{benefit.icon}</span>
                      </div>
                      <span className="text-black text-xs sm:text-sm">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-t">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-black">Requirements</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {courseData.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center">
                      <div className="flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-gray-600 text-sm">{requirement.icon}</span>
                      </div>
                      <span className="text-black text-xs sm:text-sm">{requirement.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Courses - Full width section */}
        <div className="mt-10 sm:mt-16 mb-8 sm:mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-5 sm:mb-8 text-black text-start">Similar Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {relatedCourses.map((course) => (
              <div key={course.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-40 sm:h-44">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex mb-2">
                    {renderStars(course.rating)}
                  </div>
                  <h3 className="font-medium mb-2 text-black text-sm sm:text-base line-clamp-2">{course.title}</h3>
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-black">
                    <div className="flex items-center mr-3 mb-1 sm:mb-0">
                      <FaUsers className="mr-1 text-green-500" />
                      <span className="mr-1 text-green-500">{course.students}</span>
                      <span className="mr-3">Students</span>
                    </div>
                    
                    <div className="flex items-center">
                      <FaBook className="mr-1 text-green-500" />
                      <span className="mr-1 text-green-500">{course.lessons}</span>
                      <span>Lessons</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600 mt-1">
                    <FaClock className="mr-1 text-green-500" />
                    <span className="mr-1 text-green-500">{course.hours}</span>
                    <span>hours</span>
                  </div>
                  <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t flex items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-2">
                      <FaUser size={10} />
                    </div>
                    <span className="text-xs sm:text-sm text-black">{course.instructor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 