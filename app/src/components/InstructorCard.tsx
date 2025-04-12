'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Instructor data type definition
export interface InstructorData {
  id: number;
  name: string;
  profession: string;
  image: string;
}

interface InstructorCardProps {
  instructor: InstructorData;
}

const InstructorCard = ({ instructor }: InstructorCardProps) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-lg border border-gray-200 py-12 px-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300 h-full"
    >
      {/* Instructor Image */}
      <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-100 mb-8 relative">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Instructor Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {instructor.name}
      </h3>
      
      {/* Instructor Profession */}
      <p className="text-gray-600 mb-4">
        {instructor.profession}
      </p>

      {/* Extra space at bottom (optional) */}
      <div className="mt-auto pt-6"></div>
    </motion.div>
  );
};

export default InstructorCard; 