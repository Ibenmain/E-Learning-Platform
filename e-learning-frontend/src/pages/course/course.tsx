import React from 'react';

const Course = () => {
    return (
        <div className="p-4 flex flex-col items-center text-red-400">
            {/* Course Information display video with description */}
            <h1>Course Title</h1>
            <p>This is a detailed description of the course.</p>
            <video controls>
                <source src="/image/bg_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Course;
