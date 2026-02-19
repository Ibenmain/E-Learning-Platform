import React from 'react';

const MotionPlanning = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-3">
                    Motion Planning Fundamentals
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Master the core concepts of robotic motion planning, including pathfinding algorithms,
                    trajectory optimization, and real-world implementation strategies for autonomous systems.
                </p>
            </header>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <video
                    controls
                    className="w-full aspect-video"
                    poster="/images/course-thumbnail.jpg"
                >
                    <source src="/images/bg_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2">Duration</h3>
                    <p className="text-gray-700">8 weeks</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-2">Level</h3>
                    <p className="text-gray-700">Intermediate</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold text-purple-700 mb-2">Projects</h3>
                    <p className="text-gray-700">4 hands-on</p>
                </div>
            </div>
        </div>
    );
};

export default MotionPlanning;