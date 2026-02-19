import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

// Updated HomeCard with modules data
const HomeCard = [
    {
        image: "/images/introduction_informatica.jpeg",
        title: "Introduction to Informatica",
        description:
            "Learn the fundamentals of Informatica PowerCenter, its architecture, and core concepts such as repositories, domains, nodes, and integration services. This module provides a strong foundation for beginners.",
        duration: "2 hours 20 minutes",
        level: "Beginner",
        modules: [
            "Informatica PowerCenter Overview",
            "Repository & Domain Setup",
            "Basic Transformations",
            "Workflow Management",
            "Hands-on Lab: First Mapping"
        ]
    },
    {
        image: "/images/etl-process.png",
        title: "ETL Development with Informatica",
        description:
            "Dive into Extract, Transform, and Load (ETL) processes using Informatica. Learn to design mappings, workflows, and sessions for handling enterprise-level data integration.",
        duration: "3 hours 10 minutes",
        level: "Intermediate",
        modules: [
            "ETL Concepts & Best Practices",
            "Source Qualifier Transformations",
            "Expression Transformations",
            "Workflow Configurations",
            "Session Management",
            "Error Handling Strategies"
        ]
    },
    {
        image: "/images/advanced-mappings.png",
        title: "Transformations and Advanced Mappings",
        description:
            "Explore Informatica transformations in depth, including Lookup, Joiner, Aggregator, Update Strategy, and Router. Build advanced mappings to solve real-world business challenges.",
        duration: "3 hours 40 minutes",
        level: "Intermediate",
        modules: [
            "Lookup Transformations",
            "Joiner & Aggregator",
            "Update Strategy",
            "Router Transformation",
            "Advanced Mapping Techniques",
            "Performance Optimization"
        ]
    },
    {
        image: "/images/informatica_admin.jpg",
        title: "Informatica Administration",
        description:
            "Learn how to manage repositories, security, user roles, and monitor workflows. This module is designed for those looking to understand administrative responsibilities.",
        duration: "2 hours 55 minutes",
        level: "Professional",
        modules: [
            "Repository Administration",
            "User & Security Management",
            "Workflow Monitoring",
            "Backup & Recovery",
            "Performance Tuning",
            "Troubleshooting Common Issues"
        ]
    },
    {
        image: "/images/robotic.jpeg",
        title: "Robotic Process Automation",
        description:
            "Explore the integration of Informatica with robotic process automation (RPA) tools to streamline data workflows and enhance automation capabilities.",
        duration: "3 hours 15 minutes",
        level: "Advanced",
        modules: [
            "RPA Fundamentals",
            "Informatica & RPA Integration",
            "Automated Data Processing",
            "Workflow Automation",
            "Case Studies & Best Practices"
        ]
    },
    {
        image: "/images/cloud-integration-hub.png",
        title: "Informatica Cloud Data Integration",
        description:
            "Get hands-on with Informatica Cloud. Learn to integrate cloud and on-premise applications, configure connectors, and manage cloud-based workflows.",
        duration: "3 hours 25 minutes",
        level: "Specialization",
        modules: [
            "Cloud Data Integration Overview",
            "Connectors Configuration",
            "Cloud Mapping Designer",
            "Data Synchronization",
            "Cloud Workflow Management",
            "Security in Cloud Environment"
        ]
    },
    {
        image: "/images/real-time-data-procesessing.jpeg",
        title: "Real-Time Data Processing with Informatica",
        description:
            "Learn real-time integration using Informatica with CDC (Change Data Capture), message queues, and event-driven data flows for high availability systems and applications requiring immediate data updates and processing capabilities.",
        duration: "2 hours 45 minutes",
        level: "Expert",
        modules: [
            "Real-Time Data Concepts",
            "Change Data Capture (CDC)",
            "Message Queue Integration",
            "Event-Driven Architecture",
            "High Availability Setup",
            "Performance Monitoring"
        ]
    },
    {
        image: "/images/certified-professional.jpeg",
        title: "Informatica Certification Preparation",
        description:
            "Prepare for Informatica PowerCenter or Cloud certification exams with practice questions, exam strategies, and hands-on labs designed to ensure success.",
        duration: "4 hours 00 minutes",
        level: "Certification",
        modules: [
            "Exam Structure & Syllabus",
            "Practice Tests & Quizzes",
            "Hands-on Lab Exercises",
            "Exam Strategies & Tips",
            "Common Pitfalls to Avoid",
            "Final Review & Preparation"
        ]
    },
];

interface Course {
    image: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    modules: string[];
}

// Popup Component
const CourseModulesPopup = ({ course, isOpen, onClose }: { course: Course; isOpen: boolean; onClose: () => void; }) => {
    useEffect(() => {
        if (isOpen) {
            // Add multiple methods to prevent scrolling
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.width = '100%';
        } else {
            // Restore scrolling
            const scrollY = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        return () => {
            // Cleanup - ensure scrolling is restored
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [isOpen]);

    // Close popup when clicking on backdrop or pressing Escape key
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-hidden"
            onClick={handleBackdropClick}
        >
            <div className="bg-white dark:bg-[#212a34] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-[#9FEF00]">{course.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {course.modules.length} modules • {course.duration} • {course.level}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                        <Icon icon="mdi:close" width="24" height="24" />
                    </button>
                </div>

                {/* Modules List - This part should scroll */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-4">
                        {course.modules.map((module, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                <div className="flex-shrink-0 w-8 h-8 bg-[#9FEF00] bg-opacity-20 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-semibold text-[#9FEF00]">
                                        {index + 1}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-black dark:text-white">
                                        {module}
                                    </h3>
                                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-600 dark:text-gray-400">
                                        <span className="flex items-center space-x-1">
                                            <Icon icon="mdi:clock-outline" width="14" height="14" />
                                            <span>~30 min</span>
                                        </span>
                                        <span className="flex items-center space-x-1">
                                            <Icon icon="mdi:book-outline" width="14" height="14" />
                                            <span>Video + Exercise</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="flex-shrink-0 text-[#9FEF00] hover:text-[#8cd500] transition-colors">
                                    <Icon icon="mdi:play-circle-outline" width="20" height="20" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex-shrink-0">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Complete all modules to finish the course
                            </p>
                        </div>
                        <button className="bg-[#9FEF00] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#8cd500] transition-colors">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const filteredCards = HomeCard.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.level.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleViewModules = (course: Course) => {
        setSelectedCourse(course);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedCourse(null);
    };

    return (
        <div className={`${isPopupOpen ? 'overflow-hidden' : ''}`}>
            <div className='container mx-auto flex flex-col justify-center items-center text-black dark:text-white w-full space-y-10 px-10 xl:px-0 '>
                <div className='relative flex items-center w-full text-black dark:text-white'>
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none outline-none bg-[#e9e9e9] dark:bg-[#212a34] text-black dark:text-white"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9eec02]">
                        <Icon icon="ic:baseline-search" width="20" height="20" />
                    </span>
                </div>

                {filteredCards.length === 0 ? (
                    <div className="text-center py-8 ">
                        <p className="text-black dark:text-white text-lg">
                            No courses found matching your search.
                            {searchTerm && <span className="font-semibold"> "{searchTerm}"</span>}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ~gap-[20px]/[80px] pb-4">
                        {filteredCards.map((card, index) => (
                            <div key={index} className='rounded-lg shadow-md bg-white dark:bg-[#212a34] w-[250px] h-[450px] sm:w-full relative group hover:shadow-lg transition-shadow duration-300 '>
                                {/* Cart Icon */}
                                {/* <button
                                    onClick={() => handleViewModules(card)}
                                    className="absolute top-3 right-3 z-10 bg-[#9FEF00] bg-opacity-90 hover:bg-opacity-100 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    title="View Course Modules"
                                >
                                    <Icon
                                        icon="mdi:play-circle-outline"
                                        width="20"
                                        height="20"
                                        className="text-black"
                                    />
                                </button> */}

                                <button onClick={() => handleViewModules(card)} className='w-full h-40 object-cover rounded-t-md mb-2 p-2 rounded-lg'>
                                    <img src={card.image} alt={card.title} className='w-full h-40 object-cover rounded-lg' />
                                </button>
                                <div className='p-4 space-y-4'>
                                    <h3 className='text-lg font-semibold text-[#9FEF00]'>
                                        {card.title.length > 25 ? card.title.slice(0, 25) + "..." : card.title}
                                    </h3>
                                    <div className=''>
                                        <p className='text-sm text-black dark:text-white min-h-36'>
                                            {card.description.length > 250 ? card.description.slice(0, 250) + "..." : card.description}
                                        </p>
                                        <div className="flex justify-between items-center mt-4">
                                            <div>
                                                <p className='text-xs text-black dark:text-white opacity-70'>{card.duration}</p>
                                                <p className='text-sm font-medium text-[#9FEF00]'>{card.level}</p>
                                            </div>
                                            <div className="text-xs text-gray-600 dark:text-gray-400">
                                                {card.modules.length} modules
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Course Modules Popup */}
                {selectedCourse && (
                    <CourseModulesPopup
                        course={selectedCourse}
                        isOpen={isPopupOpen}
                        onClose={handleClosePopup}
                    />
                )}
            </div>
        </div>
    )
}

export default Home