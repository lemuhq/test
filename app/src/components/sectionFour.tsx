'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import { useState } from 'react';

export default function SectionFour() {
 
    
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };
    
    const scaleUp = {
        initial: { scale: 1 },
        hover: { scale: 1.02, transition: { duration: 0.3 } }
    };
    
    const pulseAnimation = {
        initial: { scale: 1 },
        animate: { 
            scale: [1, 1.05, 1],
            transition: { 
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse" as const
            }
        }
    };

    return (
        <div className="w-full py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 min-h-[80vh] xs:min-h-[90vh] md:min-h-[100vh] flex items-center justify-center">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6">
                <div className="relative w-full max-w-[300px] xs:max-w-[450px] sm:max-w-[600px] md:max-w-[768px] lg:max-w-[995px] mx-auto">
                    {/* Dotted border outline - visible on all screen sizes */}
                    <div className="absolute -right-4 xs:-right-6 sm:-right-8 md:-right-10 -bottom-4 xs:-bottom-6 sm:-bottom-8 md:-bottom-10 w-[70%] xs:w-[75%] h-[90%] border-[1px] xs:border-2 border-dashed border-[#000000] rounded-[16px] xs:rounded-[20px] md:rounded-[24px] pointer-events-none"></div>
                    
                    <motion.div
                        className="relative z-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                    >
                        <motion.div 
                            className="relative w-full aspect-video rounded-[8px] xs:rounded-[12px] sm:rounded-[16px] overflow-hidden shadow-md xs:shadow-lg"
                            initial="initial"
                            whileHover="hover"
                            variants={scaleUp}
                        >
                            {/* Video thumbnail */}
                            <Image
                                src="/images/four.png"
                                alt="Educational video thumbnail"
                                fill
                                sizes="(max-width: 480px) 300px, (max-width: 640px) 450px, (max-width: 768px) 600px, (max-width: 1024px) 768px, 995px"
                                className="object-cover"
                                priority
                            />
                            
                            {/* Darkened overlay */}
                            <div className="absolute inset-0 bg-black/15"></div>
                            
                            {/* Play button overlay */}
                            <motion.div 
                                className="absolute inset-0 flex items-center justify-center z-20"
                                initial="initial"
                                animate="animate"
                                variants={pulseAnimation}
                            >
                                <div className="relative w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full">
                                    {/* Outer circle with border */}
                                    <div className="absolute inset-0 rounded-full border-[1px] xs:border-2 border-cyan-200 bg-cyan-50/30 backdrop-blur-sm"></div>
                                    
                                    {/* Inner solid circle */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-cyan-400 flex items-center justify-center">
                                            <svg 
                                                width="16" 
                                                height="16"
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                            >
                                                <path 
                                                    d="M8 5V19L19 12L8 5Z" 
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}   
        

