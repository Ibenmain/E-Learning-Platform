import { Icon } from "@iconify/react"

const Settings = () => {

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 z-0 px-10 lg:px-0">
                <div className=" grid grid-rows-2 gap-2 ">
                    <div className=" rounded-md dark:bg-[#212A34]  bg-[#f5f5f5] space-y-4">
                        <h1 className="p-4 flex justify-center items-center bg-[#d1d1d1] dark:bg-[#2f3a47] rounded-md">
                            Profile settings
                        </h1>
                        <div className="w-full flex justify-center items-center">
                            <div className="relative bg-[#9fef00] w-[120px] h-[120px] rounded-full flex justify-center items-center ">
                                <img src="/images/ibenmain.jpg" alt="not found" className="object-cover w-[94%] h-[94%] rounded-full" />
                                <button>
                                    <Icon icon="mdi:pencil" className="absolute right-0 top-2/3 rounded-full bg-[#9fef00] w-7 h-7 p-1" color="black" />
                                </button>
                            </div>
                        </div>
                        <div className="py-5 space-y-6">
                            <div className="relative flex flex-col justify-center items-center ">
                                <label className="w-3/4 sm:w-1/2 text-start pl-4" htmlFor="">full-name</label>
                                {/* <Icon icon="mdi:pencil" className="absolute" /> */}
                                <input type="text" placeholder="Issam Benmaina" className="bg-transparent h-12  border-2 rounded-2xl pl-4 border-[#9fef00] w-3/4 sm:w-1/2 " />
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="bg-gradient-to-tr from-[#AAED00] to-[#5CFD85] text-black p-3 w-28 rounded-md">
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-md">
                        hello 2
                    </div>
                </div>
                <div className=" grid grid-rows-2 gap-2">
                    <div className="border rounded-md">
                        hello 3
                    </div>
                    <div className="border">
                        hello 4
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings