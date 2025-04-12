'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiUser, FiBook } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Hero() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const slideRight = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const scaleAnimation = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      {/* Background overlay elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={scaleAnimation}
          className="absolute top-0 left-0 w-[40%] h-[40%] bg-[#E8F5F0] rounded-full opacity-30 blur-3xl transform -translate-x-1/4 -translate-y-1/4"
        ></motion.div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={floatAnimation}
          className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-[#E8F5F0] rounded-full opacity-20 blur-3xl"
        ></motion.div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute top-[10%] right-[10%] w-8 h-8 text-[#15B67A]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>
        
        {/* Background image in top left corner */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute top-[-9%] right-0 lg:left-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] z-0 pointer-events-none opacity-30 lg:opacity-80"
        >
          <Image 
            src="/images/bge.png" 
            alt="Background element" 
            fill 
            className="object-contain" 
            priority
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-0 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 flex flex-col lg:flex-row items-center">
        {/* Left column: Text and buttons */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="lg:w-1/2 z-10 px-4 sm:px-6 lg:px-0"
        >
          <motion.h1 
            variants={slideUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-black leading-tight"
          >
            Sustainable<br className="hidden sm:block" /> Education for<br className="hidden sm:block" />
            <motion.span 
              variants={slideRight}
              className="font-script text-[#2C7D6E] text-[1.1em] tracking-wide"
            >
              everyone
            </motion.span>
          </motion.h1>

          <motion.div 
            variants={slideUp}
            className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/courses" 
                className="bg-[#15B67A] hover:bg-[#0EA76A] text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-colors text-sm sm:text-base"
              >
                Explore courses
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="bg-[#2F6B7C] hover:bg-[#265A69] text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-colors text-sm sm:text-base"
              >
                Contact us
              </Link>
            </motion.div>
          </motion.div>

          {/* Avatars */}
          <motion.div 
            variants={slideUp}
            className="flex items-center mt-8 sm:mt-12"
          >
            <div className="flex -space-x-2 sm:-space-x-3">
              {/* Placeholder avatar circles */}
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-[#F0F9F6] flex items-center justify-center overflow-hidden"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#15B67A] opacity-20"></div>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#15B67A] border-2 border-white flex items-center justify-center text-white text-xs font-medium"
              >
                +100
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column: Image and stats */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full lg:w-1/2 relative mt-10 lg:mt-0 z-10"
        >
          <div className="relative h-full">
            {/* Hero image with blob effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-full lg:max-w-[700px] w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[calc(100vh-8rem)]"
            >
              <div className="w-full h-full relative overflow-hidden">
                <Image 
                  src="/images/hero.png" 
                  alt="Student learning about sustainability" 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw" 
                  priority
                  className="object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Stats cards */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute border-1 border-[#15B67A] top-10 sm:top-20 md:top-70 -left-2 sm:-left-4 md:left-0 bg-white rounded-lg shadow-lg p-2 sm:p-3 flex items-center gap-1 sm:gap-2 z-20 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] text-sm sm:text-base"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#15B67A] rounded-full flex items-center justify-center">
                <FiUser size={16} className="sm:hidden text-white" />
                <FiUser size={20} className="hidden sm:block text-white" />
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg text-[#000000] font-semibold">28k</div>
                <div className="text-[10px] sm:text-xs text-[#000000] font-semibold">Total Students</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute border-1 border-[#15B67A] bottom-10 sm:bottom-20 md:bottom-40 -right-2 sm:-right-4 md:right-0 bg-white rounded-lg shadow-lg p-2 sm:p-3 flex items-center gap-1 sm:gap-2 z-20 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] text-sm sm:text-base"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#15B67A] rounded-full flex items-center justify-center">
                <FiBook size={16} className="sm:hidden text-white" />
                <FiBook size={20} className="hidden sm:block text-white" />
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg text-[#000000] font-semibold">28k</div>
                <div className="text-[10px] sm:text-xs text-[#000000] font-semibold">Total Courses</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
