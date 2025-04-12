'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DynamicSection() {
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

    return (
        <div className="bg-[#256670] py-10 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                <motion.div 
                    className="w-full lg:w-1/2 relative flex justify-center order-2 lg:order-1 mt-6 sm:mt-8 lg:mt-0"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <div className="relative w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-[280px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
                        <Image 
                            src="/images/dy.png" 
                            alt="Student reading with gear pattern background" 
                            fill
                            sizes="(max-width: 480px) 280px, (max-width: 640px) 300px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                            className="object-contain" 
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div 
                    className="w-full lg:w-1/2 text-white order-1 lg:order-2"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <motion.h2 
                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white text-center lg:text-left"
                        variants={slideUp}
                    >
                        A Dynamic<br className="hidden sm:block" />Curriculum
                    </motion.h2>
                    
                    <motion.p 
                        className="text-sm xs:text-base sm:text-lg mb-5 sm:mb-6 md:mb-8 max-w-[550px] mx-auto lg:mx-0 leading-relaxed text-white/90 text-center lg:text-left"
                        variants={slideRight}
                    >
                        A platform that offers a dynamic curriculum which covers 
                        the basics of climate science, renewable energy 
                        technologies, sustainable practices, and the socio-
                        economic implications of the energy transition
                    </motion.p>
                    
                    <motion.div 
                        variants={slideUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 flex justify-center lg:justify-start"
                    >
                        <Link 
                            href="/curriculum" 
                            className="inline-block bg-[#4EC492] hover:bg-[#3EB489] text-white font-medium py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base min-w-[140px] text-center"
                        >
                            Learn more
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}