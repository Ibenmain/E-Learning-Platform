import React from 'react';

const Robotics = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <header className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Robotics & Automation
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Robotics Motion Planning
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    Master advanced motion planning algorithms for autonomous robots. Learn to implement
                    RRT*, A*, D* Lite, and optimization techniques for real-world robotic applications
                    in dynamic environments.
                </p>
            </header>

            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-12 border-4 border-gray-800">
                <video
                    controls
                    className="w-full aspect-video"
                    poster="/images/technology.mp4"
                    preload="metadata"
                >
                    <source src="/images/technology.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        What You'll Learn
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Path planning algorithms (A*, RRT, PRM)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Trajectory optimization techniques
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Collision avoidance systems
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            ROS 2 integration for motion planning
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Prerequisites
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Basic Python programming
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Linear algebra fundamentals
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Understanding of robotics basics
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Duration</h3>
                    <p className="text-blue-100">8 weeks intensive</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Level</h3>
                    <p className="text-green-100">Intermediate/Advanced</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Projects</h3>
                    <p className="text-purple-100">4 real-world robotics projects</p>
                </div>
            </div>
        </div>
    );
};

export default Robotics;