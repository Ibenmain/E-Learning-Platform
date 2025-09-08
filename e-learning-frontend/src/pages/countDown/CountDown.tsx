import { useEffect, useState } from "react"

const CountDown = () => {

    const [count, setCount] = useState<number>(5 * 60)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000);

        return () => clearInterval(interval)
    },[])

    return (
        <div className="flex flex-col justify-center items-center  space-y-8 w-full h-full">
            <div className="h-48 w-48 rounded-full flex justify-center items-center border-2 text-5xl">
                {count}
            </div>
            <div className="flex justify-between items-center w-56 space-x-11 text-black font-medium">
                <button className="border w-24 p-2 bg-[#9FEF00]  rounded-xl">Start</button>
                <button className="border w-24 p-2 bg-red-500 rounded-xl">Restart</button>
            </div>
        </div>
    )
}

export default CountDown