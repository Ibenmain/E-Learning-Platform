import { Icon } from "@iconify/react";
import { useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";

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
        
    ]

    const [level, setLevel] = useState<{ name: string; xp: string }>(LevelArray[0])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className=" grid grid-rows-2 gap-2">
                <div className="dark:bg-[#212a34] bg-[#f5f5f5] rounded-sm p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="font-medium text-[22px] " >About me</h1>
                        <button>
                            <Icon icon="mdi:pencil" />
                        </button>
                    </div>
                    <p className="text-sm">Details about the user</p>
                </div>
                <div className="dark:bg-[#212a34] bg-[#f5f5f5] rounded-sm p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="font-medium text-[22px] " >Certifications</h1>
                        <button>
                            <Icon icon="mdi:pencil" />
                        </button>
                    </div>
                    <p className="text-sm">Details about the user's certifications</p>
                </div>
                <div className="dark:bg-[#212a34] bg-[#f5f5f5] rounded-sm p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="font-medium text-[22px] " >Programming languages</h1>
                        <button>
                            <Icon icon="mdi:pencil" />
                        </button>
                    </div>
                    <p className="text-sm">Details about the user's programming languages</p>
                </div>
                <div className="dark:bg-[#212a34] bg-[#f5f5f5] rounded-sm p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="font-medium text-[22px] " >Skills </h1>
                        <button>
                            <Icon icon="mdi:pencil" />
                        </button>
                    </div>
                    <p className="text-sm">Details about the user's skills</p>
                </div>

            </div>
            <div className=" grid grid-rows-2 gap-2 ">
                <div className=" space-y-2 dark:bg-[#212a34] bg-[#f5f5f5] flex justify-between flex-col p-5 rounded-sm">
                    <h1 className="font-medium text-[22px] " >Progression</h1>
                    <div className="w-full flex justify-center items-center flex-col">
                        <img src="/images/achievement.svg" alt="Progression" width={76} height={76} className="rounded-full border" />
                        <span className="text-sm">Level 1</span>
                    </div>
                    <div className="w-full flex justify-between items-center gap-6 text-sm">
                        <span>
                            Next level
                        </span>
                        <span className="dark:text-[#9fef00] text-black">
                            50XP
                        </span>
                    </div>
                    <div className="w-full rounded-sm space-y-2 dark:bg-black bg-white">
                        <div className=" h-2 bg-[#9fef00] rounded-sm transition-all duration-300" style={{ width: "50%" }}></div>
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
                        <div className="w-full flex justify-between items-center ">
                            <span>
                                {level.name}
                            </span>
                            <span className="dark:text-[#9fef00] text-black ">
                                {level.xp}/60
                            </span>
                        </div>
                        <div className="w-full dark:bg-black bg-white rounded-sm overflow-hidden">
                            <div className="h-2 bg-[#9fef00] rounded-sm transition-all duration-300" style={{ width: `${level.xp}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInformation;
