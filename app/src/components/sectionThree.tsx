'use client';
import { motion } from "framer-motion";

import { FaPlay, FaDollarSign, FaBook } from "react-icons/fa";

export default function SectionThree() {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    };

    const cardVariant = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            } 
        }
    };

    const statsVariant = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                duration: 0.6,
                delay: 0.3 
            } 
        }
    };

    const features = [
        {
            icon: <FaPlay className="text-[#4EC492] text-lg xs:text-xl sm:text-2xl" />,
            title: "Video Tutorials",
            description: "Typing stuff that may be needed in this content"
        },
        {
            icon: <FaDollarSign className="text-[#4EC492] text-lg xs:text-xl sm:text-2xl" />,
            title: "Affordable Pricing",
            description: "Typing stuff that may be needed in this content"
        },
        {
            icon: <FaBook className="text-[#4EC492] text-lg xs:text-xl sm:text-2xl" />,
            title: "A Dynamic Curriculum",
            description: "Typing stuff that may be needed in this content"
        }
    ];

    const stats = [
        { value: "10M", label: "Students" },
        { value: "20+", label: "Languages" },
        { value: "1M", label: "Enrollments" },
        { value: "100+", label: "Countries" },
        { value: "100%", label: "Satisfaction Rate" }
    ];

    return (
        <div className="w-full bg-white py-10 xs:py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6">
                {/* Feature Cards */}
                <div className="flex justify-center mb-10 xs:mb-12 sm:mb-16 md:mb-20">
                    <motion.div 
                        className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 xs:gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-[1200px]"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#256670] h-full min-h-[280px] rounded-lg p-5 xs:p-6 sm:p-8 flex flex-col items-center justify-center my-2 sm:my-0"
                                variants={cardVariant}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center mb-5 xs:mb-6 sm:mb-8">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg xs:text-xl font-bold mb-3 xs:mb-4 sm:mb-6 text-white text-center">{feature.title}</h3>
                                <p className="text-xs xs:text-sm sm:text-base text-white/80 text-center max-w-[240px] mx-auto">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Statistics Section */}
                <motion.div
                    className="bg-[#256670] py-6 xs:py-8 sm:py-10 md:py-12 px-3 xs:px-4 sm:px-6 rounded-lg"
                    initial="hidden"
                    animate="visible"
                    variants={statsVariant}
                >
                    <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center text-white p-1 xs:p-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index + 0.5 }}
                            >
                                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                                <div className="text-xs xs:text-sm md:text-base text-white/80">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
    