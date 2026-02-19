import React, { useState } from "react";
import { useNavigate } from "react-router";

interface Course {
  title: string;
  description: string;
  image: string;
  progress: number;
}

const courses: Course[] = [
  {
    image: "/images/introduction_informatica.jpeg",
    title: "Introduction to Informatica",
    description:
      "Learn the fundamentals of Informatica PowerCenter, its architecture, and core concepts such as repositories, domains, nodes, and integration services. This module provides a strong foundation for beginners.",
    progress: 45,
  },
  {
    image: "/images/etl-process.png",
    title: "ETL Development with Informatica",
    description:
      "Dive into Extract, Transform, and Load (ETL) processes using Informatica. Learn to design mappings, workflows, and sessions for handling enterprise-level data integration.",
    progress: 80,
  },
  {
    image: "/images/advanced-mappings.png",
    title: "Transformations and Advanced Mappings",
    description:
      "Explore Informatica transformations in depth, including Lookup, Joiner, Aggregator, Update Strategy, and Router. Build advanced mappings to solve real-world business challenges   .",
    progress: 100,
  },
  {
    image: "/images/informatica_admin.jpg",
    title: "Informatica Administration",
    description:
      "Learn how to manage repositories, security, user roles, and monitor workflows. This module is designed for those looking to understand administrative responsibilities.",
    progress: 20,
  },
  {
    image: "/images/robotic.jpeg",
    title: "Robotic Process Automation",
    description:
      "Explore the integration of Informatica with robotic process automation (RPA) tools to streamline data workflows and enhance automation capabilities.",
    progress: 100,
  },
  {
    image: "/images/cloud-integration-hub.png",
    title: "Informatica Cloud Data Integration",
    description:
      "Get hands-on with Informatica Cloud. Learn to integrate cloud and on-premise applications, configure connectors, and manage cloud-based workflows.",
    progress: 60,
  },
  {
    image: "/images/real-time-data-procesessing.jpeg",
    title: "Real-Time Data Processing with Informatica",
    description:
      "Learn real-time integration using Informatica with CDC (Change Data Capture), message queues, and event-driven data flows for high availability systems and applications requiring immediate data updates and processing capabilities.",
    progress: 10,
  },
  {
    image: "/images/certified-professional.jpeg",
    title: "Informatica Certification Preparation",
    description:
      "Prepare for Informatica PowerCenter or Cloud certification exams with practice questions, exam strategies, and hands-on labs designed to ensure success.",
    progress: 100,
  },
];

const CourseCard = ({ course, navigate }: { course: Course, navigate: any }) => (
  <div className="border-b border-gray-300 pb-2 flex mb-16 w-full rounded-lg">
    <img src={course.image} alt={`Course image for ${course.title}`} className="w-44 h-44 object-cover rounded-full mx-8 border " loading="lazy" />
    <div className="flex-1 flex flex-col justify-evenly space-y-4 h-44">
      <div>
        <h3 className="text-lg font-semibold text-[#9FEF00]">{course.title}</h3>
        <p className="text-gray-400">{course.description}</p>
      </div>
      <div className="w-3/4 space-y-1">
        <label className="text-sm text-[#9FEF00]">Progress</label>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#9FEF00] rounded-full" style={{ width: `${course.progress}%` }} />
        </div>
      </div>
    </div>
    <div className="flex items-end justify-end">
      <button onClick={() => {navigate("/course")}} className="bg-[#9FEF00] text-black font-normal py-2 px-4 rounded-md h-11 w-26">
        Go to Course
      </button>
    </div>
  </div>
);

const MyLearning = () => {
  const [filter, setFilter] = useState("in-progress");
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate  = useNavigate();

  const filteredCourses = courses.filter((course) =>
    filter === "in-progress" ? course.progress < 100 : course.progress === 100
  );

  const visibleCourses = filteredCourses.slice(0, visibleCount);

  return (
    <div className="container mx-auto flex flex-col justify-start items-start text-black dark:text-white w-full space-y-10 px-14 xl:px-0">
      <div className="space-x-4 relative mb-6">
        <button
          onClick={() => { setFilter("in-progress"); setVisibleCount(2); }}
          className={`py-2 px-4 rounded-md text-white ${filter === "in-progress" ? "bg-[#212a34]" : "bg-gray-400"}`}
        >
          In Progress
        </button>
        <button
          onClick={() => { setFilter("completed"); setVisibleCount(2); }}
          className={`py-2 px-4 rounded-md text-white ${filter === "completed" ? "bg-[#9FEF00]" : "bg-gray-400"}`}
        >
          Completed
        </button>
      </div>

      <div className="w-full h-[70vh] overflow-y-scroll hide-scrollbar">
        {visibleCourses.map((course, index) => (
          <CourseCard navigate={navigate} key={index} course={course} />
        ))}
        {visibleCount < filteredCourses.length && (
          <div className="w-full  flex justify-center items-center ">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="text-2xl font-medium text-[#9FEF00] py-2 px-4 rounded-md"
            >
              More Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;
