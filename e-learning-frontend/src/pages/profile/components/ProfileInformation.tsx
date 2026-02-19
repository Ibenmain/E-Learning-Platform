import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

// Popup Component
const EditPopup = ({
    isOpen,
    onClose,
    title,
    content,
    onSave,
    type
}: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
    onSave: (content: string) => void;
    type: string;
}) => {
    const [editContent, setEditContent] = useState(content);

    useEffect(() => {
        if (isOpen) {
            setEditContent(content);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, content]);

    const handleSave = () => {
        onSave(editContent);
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white dark:bg-[#212a34] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-[#9FEF00]">Edit {title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                        <Icon icon="mdi:close" width="24" height="24" />
                    </button>
                </div>

                <div className="p-6">
                    {type === 'about' ? (
                        <textarea
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            className="w-full h-48 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#2a3642] text-black dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
                            placeholder={`Enter your ${title.toLowerCase()}...`}
                        />
                    ) : type === 'list' ? (
                        <div className="space-y-3">
                            <textarea
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#2a3642] text-black dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
                                placeholder={`Enter items separated by commas...`}
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Separate items with commas (e.g., JavaScript, Python, React)
                            </p>
                        </div>
                    ) : null}
                </div>

                <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-[#9FEF00] text-black rounded-md font-semibold hover:bg-[#8cd500] transition-colors"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProfileInformation = () => {
    const LevelArray = [
        {
            name: 'Bronze',
            xp: '20',
        },
        {
            name: 'Silver',
            xp: '90',
        },
        {
            name: 'Gold',
            xp: '50',
        },
        {
            name: 'Legend',
            xp: '35',
        },
    ];

    const [level, setLevel] = useState<{ name: string; xp: string }>(LevelArray[0]);

    // State for each section
    const [aboutMe, setAboutMe] = useState("I'm a passionate developer with experience in web development and data science. I love learning new technologies and building innovative solutions.");
    const [certifications, setCertifications] = useState("AWS Certified Developer, Google Cloud Associate, Informatica Certified Professional");
    const [programmingLanguages, setProgrammingLanguages] = useState("JavaScript, Python, TypeScript, Java, C++");
    const [skills, setSkills] = useState("React, Node.js, MongoDB, PostgreSQL, Docker, Kubernetes, CI/CD");

    // State for popups
    const [popupOpen, setPopupOpen] = useState({
        about: false,
        certifications: false,
        languages: false,
        skills: false
    });

    const openPopup = (type: keyof typeof popupOpen) => {
        setPopupOpen(prev => ({ ...prev, [type]: true }));
    };

    const closePopup = (type: keyof typeof popupOpen) => {
        setPopupOpen(prev => ({ ...prev, [type]: false }));
    };

    // Format list items for display
    const formatList = (items: string) => {
        return items.split(',').map(item => item.trim()).filter(item => item);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-5 ">
            <div className="grid grid-rows-2 gap-2">
                {/* About Me Section */}
                <div className="dark:bg-[#212a34] bg-[#f5f5f5] rounded-sm p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="font-medium text-[22px]">About me</h1>
                        <button
                            onClick={() => openPopup('about')}
                            className="text-gray-600 dark:text-gray-400 hover:text-[#9FEF00] dark:hover:text-[#9FEF00] transition-colors"
                        >
                            <Icon icon="mdi:pencil" width="20" height="20" />
                        </button>
                    </div>
                    <p className="text-sm">{aboutMe}</p>
                </div>

                {/* Certifications Section */}
                <div className="dark:bg-[#212a34] bg-[#f5f5f5] rounded-sm p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="font-medium text-[22px]">Certifications</h1>
                        <button
                            onClick={() => openPopup('certifications')}
                            className="text-gray-600 dark:text-gray-400 hover:text-[#9FEF00] dark:hover:text-[#9FEF00] transition-colors"
                        >
                            <Icon icon="mdi:pencil" width="20" height="20" />
                        </button>
                    </div>
                    <div className="space-y-2">
                        {formatList(certifications).map((cert, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                                <Icon icon="mdi:certificate" className="text-[#9FEF00]" width="16" height="16" />
                                <span>{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Programming Languages Section */}
                <div className="dark:bg-[#212a34] bg-[#f5f5f5] rounded-sm p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="font-medium text-[22px]">Programming languages</h1>
                        <button
                            onClick={() => openPopup('languages')}
                            className="text-gray-600 dark:text-gray-400 hover:text-[#9FEF00] dark:hover:text-[#9FEF00] transition-colors"
                        >
                            <Icon icon="mdi:pencil" width="20" height="20" />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {formatList(programmingLanguages).map((lang, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-[#9FEF00] bg-opacity-20 text-[#9FEF00] rounded-full text-sm"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className="dark:bg-[#212a34] bg-[#f5f5f5] rounded-sm p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="font-medium text-[22px]">Skills</h1>
                        <button
                            onClick={() => openPopup('skills')}
                            className="text-gray-600 dark:text-gray-400 hover:text-[#9FEF00] dark:hover:text-[#9FEF00] transition-colors"
                        >
                            <Icon icon="mdi:pencil" width="20" height="20" />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {formatList(skills).map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-[#9FEF00] bg-opacity-20 text-[#9FEF00] rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-rows-2 gap-2">
                <div className="space-y-2 dark:bg-[#212a34] bg-[#f5f5f5] flex justify-between flex-col p-5 rounded-sm">
                    <h1 className="font-medium text-[22px]">Progression</h1>
                    <div className="w-full flex justify-center items-center flex-col">
                        <img src="/images/achievement.svg" alt="Progression" width={76} height={76} className="rounded-full border" />
                        <span className="text-sm">Level 1</span>
                    </div>
                    <div className="w-full flex justify-between items-center gap-6 text-sm">
                        <span>Next level</span>
                        <span className="dark:text-[#9fef00] text-black">50XP</span>
                    </div>
                    <div className="w-full rounded-sm space-y-2 dark:bg-black bg-white">
                        <div className="h-2 bg-[#9fef00] rounded-sm transition-all duration-300" style={{ width: "50%" }}></div>
                    </div>
                </div>

                <div className="dark:bg-[#212a34] bg-[#f5f5f5] flex justify-between flex-col p-5 rounded-sm">
                    <h1 className="font-medium text-[22px]">Achievements</h1>
                    <div className="flex justify-center gap-4 dark:text-black font-medium text-sm">
                        <button onClick={() => setLevel(LevelArray[0])} className="flex items-center justify-center p-1 gap-3 w-24 rounded-sm bg-[#9fef00]">Bronze</button>
                        <button onClick={() => setLevel(LevelArray[1])} className="flex items-center justify-center p-1 gap-3 w-24 rounded-sm bg-[#9fef00]">Silver</button>
                        <button onClick={() => setLevel(LevelArray[2])} className="flex items-center justify-center p-1 gap-3 w-24 rounded-sm bg-[#9fef00]">Gold</button>
                        <button onClick={() => setLevel(LevelArray[3])} className="flex items-center justify-center p-1 gap-3 w-24 rounded-sm bg-[#9fef00]">Legend</button>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="w-full flex justify-between items-center">
                            <span>{level.name}</span>
                            <span className="dark:text-[#9fef00] text-black">{level.xp}/60</span>
                        </div>
                        <div className="w-full dark:bg-black bg-white rounded-sm overflow-hidden">
                            <div className="h-2 bg-[#9fef00] rounded-sm transition-all duration-300" style={{ width: `${level.xp}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popups */}
            <EditPopup
                isOpen={popupOpen.about}
                onClose={() => closePopup('about')}
                title="About Me"
                content={aboutMe}
                onSave={setAboutMe}
                type="about"
            />

            <EditPopup
                isOpen={popupOpen.certifications}
                onClose={() => closePopup('certifications')}
                title="Certifications"
                content={certifications}
                onSave={setCertifications}
                type="list"
            />

            <EditPopup
                isOpen={popupOpen.languages}
                onClose={() => closePopup('languages')}
                title="Programming Languages"
                content={programmingLanguages}
                onSave={setProgrammingLanguages}
                type="list"
            />

            <EditPopup
                isOpen={popupOpen.skills}
                onClose={() => closePopup('skills')}
                title="Skills"
                content={skills}
                onSave={setSkills}
                type="list"
            />
        </div>
    );
}

export default ProfileInformation;