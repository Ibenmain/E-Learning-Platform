import { Icon } from '@iconify/react'
import React, { useEffect, useRef, useState } from 'react'

type LineBetweenPointsProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
};

// Each course now has its own timeline data
const CoursesData = [
  {
    title: "3D Modeling",
    timeline: [
      {
        quarter: "Q1",
        items: ["3D Modeling Basics", "Blender Fundamentals", "Mesh Modeling"],
      },
      {
        quarter: "Q2",
        items: ["Texturing & UV Mapping", "Lighting Techniques", "Rendering"],
      },
      {
        quarter: "Q3",
        items: ["Character Modeling", "Sculpting", "Rigging Basics"],
      },
      {
        quarter: "Q4",
        items: ["Animation Principles", "3D Printing Prep", "Portfolio Project"],
      },
      {
        quarter: "Q5",
        items: ["Advanced Modeling", "Environment Design", "Capstone Project"],
      }
    ]
  },
  {
    title: "Robotics specialization",
    timeline: [
      {
        quarter: "Q1",
        items: ["Robotics Fundamentals", "Motion Planning", "Sensor Integration"],
      },
      {
        quarter: "Q2",
        items: ["Control Systems", "PID Controllers", "Quadcopter Dynamics"],
      },
      {
        quarter: "Q3",
        items: ["Computer Vision", "SLAM Algorithms", "Path Planning"],
      },
      {
        quarter: "Q4",
        items: ["AI in Robotics", "Swarm Robotics", "Capstone Project"],
      },
    ]
  },
  {
    title: "Introduction to Programming",
    timeline: [
      {
        quarter: "Q1",
        items: ["Python Basics", "Data Types", "Control Structures"],
      },
      {
        quarter: "Q2",
        items: ["Functions", "File Handling", "Error Handling"],
      },
      {
        quarter: "Q3",
        items: ["OOP Concepts", "Libraries", "APIs"],
      },
      {
        quarter: "Q4",
        items: ["Final Project", "Code Review", "Best Practices"],
      },
    ]
  },
  {
    title: "Web Development Basics",
    timeline: [
      {
        quarter: "Q1",
        items: ["HTML5 & CSS3", "Responsive Design", "Git Basics"],
      },
      {
        quarter: "Q2",
        items: ["JavaScript ES6+", "DOM Manipulation", "Async Programming"],
      },
      {
        quarter: "Q3",
        items: ["React Fundamentals", "State Management", "Component Lifecycle"],
      },
      {
        quarter: "Q4",
        items: ["Full Stack Project", "Deployment", "Performance Optimization"],
      },
    ]
  },
  {
    title: "Data Structures and Algorithms",
    timeline: [
      {
        quarter: "Q1",
        items: ["Arrays & Lists", "Stacks & Queues", "Big O Notation"],
      },
      {
        quarter: "Q2",
        items: ["Trees & Graphs", "Hash Tables", "Recursion"],
      },
      {
        quarter: "Q3",
        items: ["Sorting Algorithms", "Search Algorithms", "Dynamic Programming"],
      },
      {
        quarter: "Q4",
        items: ["System Design", "Interview Prep", "Competitive Programming"],
      },
    ]
  },
  {
    title: "Database Management Systems",
    timeline: [
      {
        quarter: "Q1",
        items: ["SQL Fundamentals", "Normalization", "ER Diagrams"],
      },
      {
        quarter: "Q2",
        items: ["Advanced SQL", "Indexing", "Transactions"],
      },
      {
        quarter: "Q3",
        items: ["NoSQL Databases", "Data Warehousing", "ETL Processes"],
      },
      {
        quarter: "Q4",
        items: ["Database Security", "Performance Tuning", "Cloud Databases"],
      },
    ]
  },
  {
    title: "Software Engineering Principles",
    timeline: [
      {
        quarter: "Q1",
        items: ["Agile Methodology", "Scrum Framework", "Version Control"],
      },
      {
        quarter: "Q2",
        items: ["Design Patterns", "Clean Code", "Testing Strategies"],
      },
      {
        quarter: "Q3",
        items: ["CI/CD Pipelines", "Microservices", "System Architecture"],
      },
      {
        quarter: "Q4",
        items: ["DevOps Practices", "Monitoring", "Project Management"],
      },
      {
        quarter: "Q5",
        items: ["Final Capstone Project", "Peer Reviews", "Industry Best Practices"],
      }
    ]
  },
  {
    title: "Machine Learning Fundamentals",
    timeline: [
      {
        quarter: "Q1",
        items: ["Linear Algebra", "Statistics", "Python for ML"],
      },
      {
        quarter: "Q2",
        items: ["Supervised Learning", "Regression", "Classification"],
      },
      {
        quarter: "Q3",
        items: ["Unsupervised Learning", "Neural Networks", "Deep Learning"],
      },
      {
        quarter: "Q4",
        items: ["MLOps", "Model Deployment", "Real-world Projects"],
      },
    ]
  },
  {
    title: "Cloud Computing Essentials",
    timeline: [
      {
        quarter: "Q1",
        items: ["Cloud Concepts", "AWS Fundamentals", "Virtualization"],
      },
      {
        quarter: "Q2",
        items: ["Storage Services", "Networking", "Security Groups"],
      },
      {
        quarter: "Q3",
        items: ["Serverless Computing", "Containers", "Kubernetes"],
      },
      {
        quarter: "Q4",
        items: ["Multi-cloud Strategy", "Cost Optimization", "Disaster Recovery"],
      },
      {
        quarter: "Q5",
        items: ["Cloud Certification Prep", "Practice Exams", "Capstone Project"],
      }
    ]
  },
  {
    title: "Cybersecurity Awareness",
    timeline: [
      {
        quarter: "Q1",
        items: ["Security Fundamentals", "Threat Landscape", "Cryptography"],
      },
      {
        quarter: "Q2",
        items: ["Network Security", "Firewalls", "VPNs"],
      },
      {
        quarter: "Q3",
        items: ["Web Security", "Penetration Testing", "Vulnerability Assessment"],
      },
      {
        quarter: "Q4",
        items: ["Security Operations", "Incident Response", "Compliance"],
      },
      {
        quarter: "Q5",
        items: ["Ethical Hacking", "Security Certifications", "Final Project"],
      }
    ]
  },
];

const TitleCarousel = ({ currentIndex, onCourseChange }: {
  currentIndex: number;
  onCourseChange: (index: number) => void;
}) => {
  const getVisibleTitles = () => {
    const leftIndex = (currentIndex - 1 + CoursesData.length) % CoursesData.length;
    const rightIndex = (currentIndex + 1) % CoursesData.length;

    return [
      { title: CoursesData[leftIndex].title, position: "left", index: leftIndex },
      { title: CoursesData[currentIndex].title, position: "center", index: currentIndex },
      { title: CoursesData[rightIndex].title, position: "right", index: rightIndex },
    ];
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? CoursesData.length - 1 : currentIndex - 1;
    onCourseChange(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === CoursesData.length - 1 ? 0 : currentIndex + 1;
    onCourseChange(newIndex);
  };

  const visibleTitles = getVisibleTitles();

  return (
    <div className="flex items-center justify-between space-x-4 w-full">
      <button
        className="bg-[#9FEF00] rounded-full p-1 hover:bg-[#8cd500] transition-colors"
        onClick={prevSlide}
      >
        <Icon icon="mdi:chevron-left" width={30} height={30} />
      </button>

      <div className="flex items-center justify-evenly w-full">
        {visibleTitles.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3
              className={`text-[#9FEF00] transition-all duration-300 cursor-pointer ${item.position === "center"
                  ? "text-4xl opacity-100 leading-[2.5rem] font-bold"
                  : "text-2xl font-medium opacity-50 leading-[1.5rem]"
                }`}
              style={
                item.position === "center"
                  ? { textShadow: "0 0 40px #9FEF00, 0 0 2px #9FEF00, 0 0 2px #9FEF00" }
                  : {}
              }
              onClick={() => onCourseChange(item.index)}
            >
              {item.position === "center"
                ? item.title
                : item.title.length > 20
                  ? item.title.slice(0, 20) + "..."
                  : item.title}
            </h3>
          </div>
        ))}
      </div>

      <button
        className="bg-[#9FEF00] rounded-full p-1 hover:bg-[#8cd500] transition-colors"
        onClick={nextSlide}
      >
        <Icon icon="mdi:chevron-right" width={30} height={30} />
      </button>
    </div>
  );
};

// Function to draw segmented lines
const drawSegmentedLine = (
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  segmentLength: number = 10,
  gapLength: number = 5
) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const segments = Math.floor(distance / (segmentLength + gapLength));

  const unitX = dx / distance;
  const unitY = dy / distance;

  ctx.beginPath();

  for (let i = 0; i < segments; i++) {
    const start = i * (segmentLength + gapLength);
    const end = start + segmentLength;

    if (end > distance) break;

    const segStartX = x1 + unitX * start;
    const segStartY = y1 + unitY * start;
    const segEndX = x1 + unitX * end;
    const segEndY = y1 + unitY * end;

    ctx.moveTo(segStartX, segStartY);
    ctx.lineTo(segEndX, segEndY);
  }

  ctx.stroke();
};

const DrawLines = ({ circlePositions }: { circlePositions: { x: number; y: number }[] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (circlePositions.length < 2 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set line style
    ctx.strokeStyle = '#9FEF00';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 5]);

    // Draw segmented lines between consecutive circles
    for (let i = 0; i < circlePositions.length - 1; i++) {
      const startPos = circlePositions[i];
      const endPos = circlePositions[i + 1];
      drawSegmentedLine(ctx, startPos.x, startPos.y, endPos.x, endPos.y, 10, 5);
    }
  }, [circlePositions]);

  if (circlePositions.length < 2) return null;

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      className="absolute top-0 left-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const Timeline = ({ currentCourseIndex }: { currentCourseIndex: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [circlePositions, setCirclePositions] = useState<{ x: number; y: number }[]>([]);

  // Get current course timeline data
  const currentCourse = CoursesData[currentCourseIndex];
  const timelineData = currentCourse.timeline;

  useEffect(() => {
    // Initialize refs array
    circleRefs.current = circleRefs.current.slice(0, timelineData.length);

    const updatePositions = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newPositions: { x: number; y: number }[] = [];

      circleRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // Calculate position relative to container
          const x = rect.left + rect.width / 2 - containerRect.left;
          const y = rect.top + rect.height / 2 - containerRect.top;
          newPositions.push({ x, y });
        }
      });

      setCirclePositions(newPositions);
    };

    // Initial update
    updatePositions();

    // Update on window resize
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, [timelineData.length, currentCourseIndex]); // Re-run when timeline changes

  return (
    <div
      ref={containerRef}
      className="min-h-[75vh] overflow-x-auto w-full flex-1 flex justify-center items-center overflow-y-scroll hide-scrollbar relative shrink-0"
    >
      <DrawLines circlePositions={circlePositions} />

      <div className="flex items-center justify-between w-full relative shrink-0" style={{ zIndex: 2 }}>
        {timelineData.map((point, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`relative flex flex-col items-center mx-8 shrink-0 transition-all duration-500 ${isEven ? "mt-56" : "mb-52"
                }`}
            >
              {/* Circle for Quarter */}
              <div
                ref={el => circleRefs.current[idx] = el}
                className="w-28 h-28 rounded-full border-2 border-[#9FEF00] shrink-0 flex items-center justify-center text-black dark:text-white shadow-[0_0_15px_#9FEF00] z-10 bg-white dark:bg-black transition-transform duration-300 hover:scale-110"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">{point.quarter}</div>
                </div>
              </div>

              {/* Vertical dotted line */}
              <div className="border-l-2 border-dotted border-[#9FEF00] h-44"></div>

              {/* List items */}
              <ul className="text-black dark:text-white space-y-3 text-sm text-start justify-start pt-3 min-w-[150px]">
                {point.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-start space-x-2 animate-fadeIn">
                    <div className="w-3 h-3 rounded-full border border-[#9FEF00] flex-shrink-0"></div>
                    <span className="text-black dark:text-white leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Careers = () => {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const handleCourseChange = (index: number) => {
    setCurrentCourseIndex(index);
  };

  const currentCourse = CoursesData[currentCourseIndex];

  return (
    <div className='flex flex-col justify-center items-start text-black dark:text-white w-full space-y-10 px-14'>
      <div className='w-full pt-4'>
        <TitleCarousel
          currentIndex={currentCourseIndex}
          onCourseChange={handleCourseChange}
        />
      </div>
      <div className='w-full'>
        <Timeline currentCourseIndex={currentCourseIndex} />
      </div>
    </div>
  )
}

export default Careers;