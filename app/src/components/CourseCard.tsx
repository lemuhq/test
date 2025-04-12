'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiBook, FiStar, FiUser } from 'react-icons/fi';

// Course data type definition
export interface CourseData {
  id: number;
  title: string;
  image: string;
  rating: number;
  students: number;
  lessons: number;
  hours: number;
  instructor: string;
}

interface CourseCardProps {
  course: CourseData;
}

const CourseCard = ({ course }: CourseCardProps) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Function to render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < fullStars ? "text-yellow-400" : (i === fullStars && hasHalfStar ? "text-yellow-400" : "text-yellow-200")}>
            {i < fullStars ? (
              <FiStar className="w-4 h-4 fill-current" />
            ) : i === fullStars && hasHalfStar ? (
              <FiStar className="w-4 h-4 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
            ) : (
              <FiStar className="w-4 h-4" />
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={`/courses/${course.id}`} className="block">
        {/* Course Image */}
        <div className="relative h-48 sm:h-56 md:h-60">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Rating Stars */}
        <div className="px-6 pt-5">
          {renderStars(course.rating)}
        </div>
        
        {/* Course Title */}
        <h3 className="px-6 mt-3 text-lg font-bold text-gray-900">
          {course.title}
        </h3>
        
        {/* Course Meta */}
        <div className="px-6 pt-4 pb-6">
          <div className="space-y-4">
            {/* Students and Lessons on same line */}
            <div className="flex items-center gap-8">
              {/* Students */}
              <div className="flex items-center gap-1.5 text-sm">
                <div className="flex items-center">
                  <FiUsers className="text-green-500 mr-1" />
                  <span className="text-green-500">{course.students}</span>
                </div>
                <span className="text-gray-500">Students</span>
              </div>
              
              {/* Lessons */}
              <div className="flex items-center gap-1.5 text-sm">
                <div className="flex items-center">
                  <FiBook className="text-green-500 mr-1" />
                  <span className="text-green-500">{course.lessons}</span>
                </div>
                <span className="text-gray-500">Lessons</span>
              </div>
            </div>
            
            {/* Hours on separate line */}
            <div className="flex items-center gap-1.5 text-sm">
              <div className="flex items-center">
                <FiClock className="text-green-500 mr-1" />
                <span className="text-green-500">{course.hours}</span>
              </div>
              <span className="text-gray-500">hours</span>
            </div>
          </div>
          
          {/* Instructor */}
          <div className="mt-5 pt-5 border-t border-gray-100 flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
              <FiUser size={16} />
            </div>
            <span className="ml-2.5 text-sm font-medium text-gray-800">
              {course.instructor}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard; 