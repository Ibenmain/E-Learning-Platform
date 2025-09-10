import React, { useState } from "react";

interface Course {
  title: string;
  description: string;
  image: string;
  progress: number;
}

const courses: Course[] = [
  { title: "Sample Course", description: "This is a sample course description that provides an overview of the course content and objectives.", image: "/images/image.jpeg", progress: 50 },
  { title: "Sample Course 2", description: "This is a sample course description that provides an overview of the course content and objectives.", image: "/images/image.jpeg", progress: 75 },
  { title: "Sample Course 3", description: "This is a sample course description that provides an overview of the course content and objectives.", image: "/images/image.jpeg", progress: 100 },
  { title: "Sample Course 4", description: "This is a sample course description that provides an overview of the course content and objectives.", image: "/images/image.jpeg", progress: 0 },
  { title: "Sample Course 5", description: "This is a sample course description that provides an overview of the course content and objectives.", image: "/images/image.jpeg", progress: 30 },
  { title: "Sample Course 6", description: "This is a sample course description that provides an overview of the course content and objectives.", image: "/images/image.jpeg", progress: 90 },
  { title: "Sample Course 7", description: "This is a sample course description that provides an overview of the course content and objectives.", image: "/images/image.jpeg", progress: 20 },
  { title: "Sample Course 8", description: "This is a sample course description that provides an overview of the course content and objectives.", image: "/images/image.jpeg", progress: 100 },
];

const CourseCard = ({ course }: { course: Course }) => (
  <div className="border-b border-gray-300 pb-2 flex mb-16 w-full rounded-lg">
    <img src={course.image} alt={`Course image for ${course.title}`} className="w-44 h-44 object-cover rounded-full mx-8" loading="lazy" />
    <div className="flex-1 flex flex-col justify-evenly space-y-4 h-44">
      <div>
        <h3 className="text-lg font-semibold text-[#9FEF00]">{course.title}</h3>
        <p className="text-gray-600">{course.description}</p>
      </div>
      <div className="w-3/4 space-y-1">
        <label className="text-sm text-gray-500">Progress</label>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#9FEF00] rounded-full" style={{ width: `${course.progress}%` }} />
        </div>
      </div>
    </div>
    <div className="flex items-end justify-end">
      <button className="bg-[#9FEF00] text-white py-2 px-4 rounded-md h-11 w-26">
        Go to Course
      </button>
    </div>
  </div>
);

const MyLearning = () => {
  const [filter, setFilter] = useState("in-progress");
  const [visibleCount, setVisibleCount] = useState(4);

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
          <CourseCard key={index} course={course} />
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
