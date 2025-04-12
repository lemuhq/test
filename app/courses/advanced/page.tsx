import Image from 'next/image';
import Footer from '../../src/components/footer';
import CourseCard, { CourseData } from '../../src/components/CourseCard';

// Sample advanced course data
const advancedCoursesData: CourseData[] = [
  {
    id: 101,
    title: "Advanced Sustainable Architecture",
    image: "/images/cardthree.png",
    rating: 4.9,
    students: 782,
    lessons: 18,
    hours: 36,
    instructor: "Prof. Ricardo Alvarez"
  },
  {
    id: 102,
    title: "Corporate Sustainability Leadership",
    image: "/images/card1.png",
    rating: 4.7,
    students: 943,
    lessons: 15,
    hours: 30,
    instructor: "Dr. Emily Winters"
  },
  {
    id: 103,
    title: "Circular Economy Implementation",
    image: "/images/cardtwo.png",
    rating: 4.8,
    students: 1105,
    lessons: 20,
    hours: 40,
    instructor: "John Peterson, PhD"
  },
  {
    id: 104,
    title: "Sustainable Supply Chain Management",
    image: "/images/cardthree.png",
    rating: 4.6,
    students: 876,
    lessons: 16,
    hours: 32,
    instructor: "Maria Garcia, MBA"
  },
  {
    id: 105,
    title: "Environmental Impact Assessment",
    image: "/images/card1.png",
    rating: 4.7,
    students: 654,
    lessons: 14,
    hours: 28,
    instructor: "Dr. Thomas Wright"
  },
  {
    id: 106,
    title: "Renewable Energy Systems Design",
    image: "/images/cardtwo.png",
    rating: 4.9,
    students: 927,
    lessons: 22,
    hours: 44,
    instructor: "Prof. Samantha Lee"
  }
];

export default function AdvancedCourses() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Course Header with Dark Background Pattern */}
      <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden bg-[#072A24]">
        {/* Background pattern */}
        <Image 
          src="/images/coursepattern.png"
          alt="Course Pattern Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        
        {/* Course Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">
          Advanced Courses
        </h1>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 py-12 bg-white">
        {/* Course filters - can be expanded later */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Advanced Specializations</h2>
          <div className="flex items-center space-x-4">
            <select className="border rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>All Categories</option>
              <option>Architecture</option>
              <option>Corporate</option>
              <option>Circular Economy</option>
              <option>Supply Chain</option>
            </select>
          </div>
        </div>
        
        {/* Course cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advancedCoursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 