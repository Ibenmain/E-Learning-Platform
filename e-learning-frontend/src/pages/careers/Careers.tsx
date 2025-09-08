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

const CourseTitle = [
  "3D Modeling ",
  "Robotics specialization",
  "Introduction to Programming",
  "Web Development Basics",
  "Data Structures and Algorithms",
  "Database Management Systems",
  "Software Engineering Principles",
  "Machine Learning Fundamentals",
  "Cloud Computing Essentials",
  "Cybersecurity Awareness"
]

const timelineData = [
  {
    quarter: "Q1",
    items: ["Motion Planning", "Robotics", "Quadcopter"],
  },
  {
    quarter: "Q2",
    items: ["Python Programming", "Robotics", "Raspberry Pi", "Matlab"],
  },
  {
    quarter: "Q3",
    items: ["Particle Filter", "Estimation", "Mapping"],
  },
  {
    quarter: "Q4",
    items: ["Computer Vision", "Estimation", "Ransac", "Geometry"],
  },
  {
    quarter: "Q5",
    items: ["Computer", "Estimation", "Ransac", "Geometry"],
  },
];

const TitleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const getVisibleTitles = () => {
    const leftIndex = (currentIndex - 1 + CourseTitle.length) % CourseTitle.length;
    const rightIndex = (currentIndex + 1) % CourseTitle.length;

    return [
      { title: CourseTitle[leftIndex], position: "left" },
      { title: CourseTitle[currentIndex], position: "center" },
      { title: CourseTitle[rightIndex], position: "right" },
    ];
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? CourseTitle.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === CourseTitle.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex items-center  justify-between space-x-4 w-full">
      <button
        className="bg-[#9FEF00] rounded-full p-1"
        onClick={prevSlide}
      >
        <Icon icon="mdi:chevron-left" width={30} height={30} />
      </button>

      <div className="flex items-center justify-evenly w-full">
        {getVisibleTitles().map((item, index) => (
          <h3
            key={index}
            className={`text-[#9FEF00]  transition-all duration-300 ${item.position === "center"
              ? "text-4xl  opacity-100 leading-[2.5rem] "
              : "text-2xl font-medium  opacity-50 leading-[1.5rem]"
              }`}
            style={
              item.position === "center"
                ? { textShadow: "0 0 40px #9FEF00, 0 0 2px #9FEF00, 0 0 2px #9FEF00" }
                : {}
            }
          >
            {item.position === "center"
              ? item.title
              : item.title.length > 20
                ? item.title.slice(0, 20) + "..."
                : item.title}
          </h3>
        ))}
      </div>

      <button
        className="bg-[#9FEF00] rounded-full p-1"
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

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [circlePositions, setCirclePositions] = useState<{ x: number; y: number }[]>([]);

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
  }, []);

  return (
    <div
      ref={containerRef}
      className=" min-h-[75vh] overflow-x-auto w-full flex-1 flex justify-center items-center overflow-y-scroll hide-scrollbar relative"
    >
      <DrawLines circlePositions={circlePositions} />

      <div className="flex items-center justify-between w-full relative" style={{ zIndex: 2 }}>
        {timelineData.map((point, idx) => {
          const isEven = idx % 2 === 0; // alternate positions

          return (
            <div
              key={idx}
              className={`relative flex flex-col items-center mx-8 ${isEven ? "mt-56" : "mb-52"} `}
            >
              {/* Circle for Q */}
              <div
                ref={el => circleRefs.current[idx] = el}
                className="w-28 h-28 rounded-full border-2 border-[#9FEF00] flex items-center justify-center text-black dark:text-white shadow-[0_0_10px_#9FEF00] z-10 bg-white dark:bg-black"
              >
                {point.quarter}
              </div>

              {/* Vertical dotted line */}
              <div className=" border-l-2 border-dotted border-[#9FEF00] h-44"></div>

              {/* List items */}
              <ul className="text-black dark:text-white space-y-2 text-sm text-start justify-start pt-3">
                {point.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-start space-x-1 ">
                    <div className="w-4 h-4 rounded-full border-2 border-[#9FEF00]"></div>
                    <span className="text-black dark:text-white">{item}</span>
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
  return (
    <div className='flex flex-col justify-center items-start text-black dark:text-white w-full space-y-10 px-14'>
      <div className='w-full'>
        <TitleCarousel />
      </div>
      <div className='w-full '>
        <Timeline />
      </div>
    </div>
  )
}

export default Careers;