import { MdOutlineOndemandVideo, MdOutlineAllInclusive, MdOutlineDesktopWindows, MdOutlineInsertDriveFile, MdOutlineComputer, MdOutlineSmartphone, MdOutlineWifi } from 'react-icons/md';
import type { CourseData } from '../../src/components/CourseCard';
import CourseDetailClient from '../../src/components/CourseDetailClient';

// Sample course data for the current course
const courseData = {
  id: 2,
  title: "Renewable Energy Transformation for Beginners",
  image: "/images/cardtwo.png",
  videoUrl: "#",
  rating: 4.5,
  students: 987,
  lessons: 15,
  hours: 4,
  instructor: "Akwande Amail",
  instructorRole: "Data Science",
  price: 5000,
  discount: "30% off",
  dateUpdated: "April 20th, 2024",
  description: `
    Are you curious about renewable energy and its potential to transform our world? This beginner-friendly course is designed to introduce you to the fundamentals of renewable energy systems, making complex concepts accessible to everyone—whether an aspiring environmentalist, a professional looking to expand your knowledge, or simply someone interested in green energy solutions, this course offers an engaging starting point.

    Through practical examples and simple explanations, you'll explore:
  `,
  benefits: [
    "The basics of renewable energy: solar, wind, hydro, biomass, and geothermal.",
    "The environmental and economic benefits of clean energy solutions.",
    "How renewable energy technologies work and their real-world applications.",
    "The global shift toward sustainability and your role in the transition."
  ],
  courseOutro: `
    This course employs a mix of engaging instructional methods and real-world examples to accommodate learners from diverse backgrounds. By the end, you'll gain a solid foundation in sustainable renewable energy systems and their impact, empowering you to make informed decisions and contribute to a greener planet.

    Join us as we unlock the power of renewable energy and build a sustainable future—together.
  `,
  skillsGained: [
    "Project Management",
    "Project Management",
    "Project Management",
    "Project Management",
    "Project Management"
  ],
  learningOutcomes: [
    "The basics of songwriting",
    "How to find inspiration",
    "Theological songwriting",
    "How to sell your songs"
  ],
  courseBenefits: [
    { text: "38 hours, 20 minute on-demand video", icon: <MdOutlineOndemandVideo color="black" size={25} /> },
    { text: "Full lifetime access", icon: <MdOutlineAllInclusive color="black" size={25} /> },
    { text: "Access on mobile, desktop & TV", icon: <MdOutlineDesktopWindows color="black" size={25} /> },
    { text: "Certificate of completion", icon: <MdOutlineInsertDriveFile color="black" size={25} /> }
  ],
  requirements: [
    { text: "A working computer", icon: <MdOutlineComputer color="black" size={25} /> },
    { text: "Or a smartphone", icon: <MdOutlineSmartphone color="black" size={25} /> },
    { text: "& internet", icon: <MdOutlineWifi color="black" size={25} /> }
  ]
};

// Sample related courses
const relatedCourses: CourseData[] = [
  {
    id: 101,
    title: "Renewable Energy Transformation for Beginners",
    image: "/images/cardthree.png",
    rating: 4.9,
    students: 782,
    lessons: 5,
    hours: 4,
    instructor: "Kawahi Hekate"
  },
  {
    id: 102,
    title: "Renewable Energy Transformation for Beginners",
    image: "/images/card1.png",
    rating: 4.7,
    students: 943,
    lessons: 5,
    hours: 4,
    instructor: "Kawahi Hekate"
  },
  {
    id: 103,
    title: "Renewable Energy Transformation for Beginners",
    image: "/images/cardtwo.png",
    rating: 4.8,
    students: 1105,
    lessons: 5,
    hours: 4,
    instructor: "Kawahi Hekate"
  }
];

export default function Page() {
  return (
    <CourseDetailClient 
      courseData={courseData} 
      relatedCourses={relatedCourses}
    />
  );
} 