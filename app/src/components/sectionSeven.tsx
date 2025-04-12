'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiSearch, FiCreditCard, FiBookOpen, FiAward } from 'react-icons/fi';

// Process step data
const processSteps = [
  {
    id: 1,
    icon: <FiSearch size={28} className="text-white" />,
    title: 'Find a course',
    description: 'Browse our extensive catalog of sustainability courses'
  },
  {
    id: 2,
    icon: <FiCreditCard size={28} className="text-white" />,
    title: 'Purchase Course',
    description: 'Secure payment options for all our educational content'
  },
  {
    id: 3,
    icon: <FiBookOpen size={28} className="text-white" />,
    title: 'Start learning',
    description: 'Access course materials anytime, anywhere at your own pace'
  },
  {
    id: 4,
    icon: <FiAward size={28} className="text-white" />,
    title: 'Get Certified',
    description: 'Earn recognized credentials to boost your career prospects'
  }
];

// Partner logos data with adjusted widths to match design
const partners = [
  { id: 1, name: 'Maliverse', logo: '/images/brand1.png', width: 120, height: 32 },
  { id: 2, name: 'Coursera', logo: '/images/brand2.png', width: 120, height: 28 },
  { id: 3, name: 'HubSpot', logo: '/images/brand3.png', width: 120, height: 28 },
  { id: 4, name: 'Udemy', logo: '/images/brand4.png', width: 120, height: 26 },
  { id: 5, name: 'British Council', logo: '/images/brand5.png', width: 120, height: 32 }
];

export default function SectionSeven() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
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

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-70 -translate-x-1/3 -translate-y-1/4 z-0 pointer-events-none">
        <Image 
          src="/images/bge.png" 
          alt="Background element" 
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-70 translate-x-1/4 translate-y-1/4 z-0 pointer-events-none">
        <Image 
          src="/images/bge.png" 
          alt="Background element" 
          fill
          className="object-contain scale-x-[-1] scale-y-[-1] rotate-45"
        />
      </div>
      <div className="absolute top-1/2 right-[5%] w-12 h-12 bg-[#E8F5F0] rounded-full opacity-25 blur-xl z-0"></div>
      <div className="absolute bottom-[15%] left-[10%] w-16 h-16 bg-[#E8F5F0] rounded-full opacity-20 blur-lg z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 sm:py-28 relative z-10">
        {/* Learning Process Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-20 sm:mb-32"
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our simple four-step process makes learning about sustainability accessible to everyone
            </p>
          </div>
          
          {/* Process Steps */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6 xl:gap-8"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[4.5rem] h-[4.5rem] sm:w-24 sm:h-24 rounded-full bg-[#4EC492] flex items-center justify-center mb-5 sm:mb-6 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-[14rem] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Partners Section - Redesigned to match the image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="w-full max-w-[1024px] mx-auto"
        >
          <div className="bg-black rounded-2xl py-8 px-10 sm:py-10 sm:px-16">
            <div className="flex justify-between items-center flex-wrap gap-y-8">
              {partners.map((partner) => (
                <div 
                  key={partner.id}
                  className="flex-shrink-0 mx-2 sm:mx-0"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

