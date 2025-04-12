import Image from 'next/image';
import Footer from '../src/components/footer';
import CourseCard, { CourseData } from '../src/components/CourseCard';

// Sample course data
const coursesData: CourseData[] = [
  {
    id: 1,
    title: "Intro to Sustainability Practices",
    image: "/images/card1.png",
    rating: 4.8,
    students: 1234,
    lessons: 12,
    hours: 24,
    instructor: "Dr. Sarah Green"
  },
  {
    id: 2,
    title: "Renewable Energy Fundamentals",
    image: "/images/cardtwo.png",
    rating: 4.5,
    students: 987,
    lessons: 15,
    hours: 30,
    instructor: "Prof. James Wilson"
  },
  {
    id: 3,
    title: "Sustainable Business Models",
    image: "/images/cardthree.png",
    rating: 4.7,
    students: 1543,
    lessons: 10,
    hours: 20,
    instructor: "Emma Brown, MBA"
  },
  {
    id: 4,
    title: "Climate Change & Adaptation",
    image: "/images/card1.png",
    rating: 4.9,
    students: 2154,
    lessons: 16,
    hours: 32,
    instructor: "Dr. Michael Chen"
  },
  {
    id: 5,
    title: "Eco-friendly Design Principles",
    image: "/images/cardtwo.png",
    rating: 4.6,
    students: 876,
    lessons: 14,
    hours: 28,
    instructor: "Lisa Rodriguez"
  },
  {
    id: 6,
    title: "Water Conservation Techniques",
    image: "/images/cardthree.png",
    rating: 4.4,
    students: 654,
    lessons: 8,
    hours: 16,
    instructor: "Prof. Robert Taylor"
  },
  {
    id: 7,
    title: "Climate Change & Adaptation",
    image: "/images/card1.png",
    rating: 4.9,
    students: 2154,
    lessons: 16,
    hours: 32,
    instructor: "Dr. Michael Chen"
  },
  {
    id: 8,
    title: "Eco-friendly Design Principles",
    image: "/images/cardtwo.png",
    rating: 4.6,
    students: 876,
    lessons: 14,
    hours: 28,
    instructor: "Lisa Rodriguez"
  },
  {
    id: 9,
    title: "Water Conservation Techniques",
    image: "/images/cardthree.png",
    rating: 4.4,
    students: 654,
    lessons: 8,
    hours: 16,
    instructor: "Prof. Robert Taylor"
  }
];

export default function Courses() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Course Header with Background Pattern */}
            <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden bg-[#2E646F]">
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
                    Courses
                </h1>
            </div>
            
            {/* Main Content */}
            <div className="bg-white">
                <div className="flex-grow container mx-auto px-20 py-12 bg-white mt-20 mb-20">
                {/* Course filters - can be expanded later */}
                <div className="mb-8 flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Available Courses</h2>
                    <div className="flex items-center space-x-4">
                        <select className="border rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400">
                            <option>All Categories</option>
                            <option>Sustainability</option>
                            <option>Renewable Energy</option>
                            <option>Business</option>
                            <option>Climate</option>
                        </select>
                    </div>
                </div>
                
                {/* Course cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div> 
            </div>
           
            
            {/* Footer */}
            <Footer />
        </div>
    )
}