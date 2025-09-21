import RadarChart from "./echarts"

const Potential = () => {
    return (
        <section className=' w-full flex items-center justify-center flex-col py-11 '>
            <h1 className='font-extrabold ~text-[28px]/[48px] ~leading-[28px]/48px] text-[#1D293C] dark:text-[#F1F5F9] w-full text-center'>Unlock Your Potential</h1>
            <div className='relative  flex gap-10 mt-10 flex-col-reverse md:flex-row items-center justify-between w-full px-6 py-6 z-10'>
                <div className=' font-medium ~text-[12px]/[24px] ~leading-[16px]/[36px] text-[#1D293C] dark:text-[#F1F5F9] ~max-w-[370px]/[720px] z-10'>
                    <p>Every skill you develop is a step closer to your goals. Our skill graph shows you exactly where you shine and where there’s room to grow, making progress easy to track and celebrate. Embrace every achievement and keep pushing your boundaries—your potential is limitless.
                    </p>
                </div>
                <div>
                    <RadarChart />
                </div>
                <img src="images/icon04.svg" alt="icon not found" className='hidden xl:block absolute -z-0 bottom-0 right-[40%]' />
            </div>
        </section>
    )
}

export default Potential
