import Image from 'next/image';
import Footer from '../src/components/footer';
import CourseCard, { CourseData } from '../src/components/CourseCard';

// Sample course data
const coursesData: CourseData[] = [
  {
    id: 1,
    title: "Renewable Energy Transformation for Beginners",
    image: "/images/cardtwo.png",
    rating: 4.8,
    students: 1234,
    lessons: 12,
    hours: 24,
    instructor: "Dr. Sarah Green"
  },
  {
    id: 2,
    title: "Advanced Sustainable Practices",
    image: "/images/card1.png",
    rating: 4.5,
    students: 987,
    lessons: 15,
    hours: 30,
    instructor: "Prof. James Wilson"
  },
  {
    id: 3,
    title: "Green Building Fundamentals",
    image: "/images/cardthree.png",
    rating: 4.7,
    students: 1543,
    lessons: 10,
    hours: 20,
    instructor: "Emma Brown, MBA"
  },
  {
    id: 4,
    title: "Renewable Energy Transformation for Beginners",
    image: "/images/cardtwo.png",
    rating: 4.8,
    students: 1234,
    lessons: 12,
    hours: 24,
    instructor: "Dr. Sarah Green"
  },
  {
    id: 5,
    title: "Advanced Sustainable Practices",
    image: "/images/card1.png",
    rating: 4.5,
    students: 987,
    lessons: 15,
    hours: 30,
    instructor: "Prof. James Wilson"
  },
  {
    id: 6,
    title: "Green Building Fundamentals",
    image: "/images/cardthree.png",
    rating: 4.7,
    students: 1543,
    lessons: 10,
    hours: 20,
    instructor: "Emma Brown, MBA"
  },
  {
    id: 7,
    title: "Renewable Energy Transformation for Beginners",
    image: "/images/cardtwo.png",
    rating: 4.8,
    students: 1234,
    lessons: 12,
    hours: 24,
    instructor: "Dr. Sarah Green"
  },
  {
    id: 8,
    title: "Advanced Sustainable Practices",
    image: "/images/card1.png",
    rating: 4.5,
    students: 987,
    lessons: 15,
    hours: 30,
    instructor: "Prof. James Wilson"
  },
  {
    id: 9,
    title: "Green Building Fundamentals",
    image: "/images/cardthree.png",
    rating: 4.7,
    students: 1543,
    lessons: 10,
    hours: 20,
    instructor: "Emma Brown, MBA"
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="relative w-full h-[200px] sm:h-[300px] flex items-center justify-center overflow-hidden bg-[#2E646F]">
        {/* Background pattern */}
        <Image 
          src="/images/coursepattern.png"
          alt="Course Pattern Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Courses</h1>
         
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}