'use client'

import { motion } from 'framer-motion';
import CourseCard, { CourseData } from './CourseCard';

// Course data
const courses: CourseData[] = [
  {
    id: 1,
    title: 'Renewable Energy Transformation for Beginners',
    image: '/images/card1.png',
    rating: 4.5,
    students: 5,
    lessons: 5,
    hours: 4,
    instructor: 'Kakashi Hatake'
  },
  {
    id: 2,
    title: 'Renewable Energy Transformation for Beginners',
    image: '/images/cardtwo.png',
    rating: 4.5,
    students: 5,
    lessons: 5,
    hours: 4,
    instructor: 'Kakashi Hatake'
  },
  {
    id: 3,
    title: 'Renewable Energy Transformation for Beginners',
    image: '/images/cardthree.png',
    rating: 4.5,
    students: 5,
    lessons: 5,
    hours: 4,
    instructor: 'Kakashi Hatake'
  }
];

export default function SectionFive() {
  // Animation variants for container
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="w-full py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
