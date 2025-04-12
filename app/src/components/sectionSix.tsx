'use client'

import { motion } from 'framer-motion';
import InstructorCard, { InstructorData } from './InstructorCard';

// Instructor data
const instructors: InstructorData[] = [
  {
    id: 1,
    name: 'Instructor Name',
    profession: 'Instructor Profession',
    image: '/images/intructor.png',
  },
  {
    id: 2,
    name: 'Instructor Name',
    profession: 'Instructor Profession',
    image: '/images/intructor.png',
  },
  {
    id: 3,
    name: 'Instructor Name',
    profession: 'Instructor Profession',
    image: '/images/intructor.png',
  },
  {
    id: 4,
    name: 'Instructor Name',
    profession: 'Instructor Profession',
    image: '/images/intructor.png',
  }
];

export default function SectionSix() {
  // Animation variants for container
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="w-full py-24 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Instructors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts who are passionate about teaching and sustainability.
          </p>
        </div>
        
        {/* Instructors Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}