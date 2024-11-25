import { ResponsiveRadar } from '@nivo/radar'

const data = [
    {
        "taste": "fruity",
        "chardonay": 52,
        "carmenere": 64,
        "syrah": 57
    },
    {
        "taste": "bitter",
        "chardonay": 45,
        "carmenere": 22,
        "syrah": 117
    },
    {
        "taste": "heavy",
        "chardonay": 63,
        "carmenere": 32,
        "syrah": 33
    },
    {
        "taste": "strong",
        "chardonay": 60,
        "carmenere": 22,
        "syrah": 33
    },
    {
        "taste": "sunny",
        "chardonay": 23,
        "carmenere": 110,
        "syrah": 49
    }
]


const Potential = () => {
    return (
        <section className=' w-full flex items-center justify-center flex-col py-11 '>
            <h1 className='font-extrabold ~text-[28px]/[48px] ~leading-[28px]/48px] text-[#1D293C] dark:text-[#F1F5F9] w-full text-center'>Unlock Your Potential</h1>
            <div className='relative flex gap-10 mt-10 flex-col-reverse md:flex-row items-center justify-center px-6 py-6 z-10'>
                <div className='font-medium ~text-[12px]/[30px] ~leading-[16px]/[36px] text-[#1D293C] dark:text-[#F1F5F9] ~max-w-[370px]/[720px] z-10'>
                    <p>Every skill you develop is a step closer to your goals. Our skill graph shows you exactly where you shine and where there’s room to grow, making progress easy to track and celebrate. Embrace every achievement and keep pushing your boundaries—your potential is limitless.
                    </p>
                </div>
                <div>
                    <ResponsiveRadar
                        data={data}
                        keys={['chardonay', 'carmenere', 'syrah']}
                        indexBy="taste"
                        valueFormat=">-.2f"
                        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                        borderColor={{ from: 'color' }}
                        gridLabelOffset={36}
                        dotSize={10}
                        dotColor={{ theme: 'background' }}
                        dotBorderWidth={2}
                        colors={{ scheme: 'nivo' }}
                        blendMode="multiply"
                        motionConfig="wobbly"
                        legends={[
                            {
                                anchor: 'top-left',
                                direction: 'column',
                                translateX: -50,
                                translateY: -40,
                                itemWidth: 80,
                                itemHeight: 20,
                                itemTextColor: '#999',
                                symbolSize: 12,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000'
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                    <img src="figure/figure00.svg" alt="figure not found" />
                </div>
                <img src="images/icon04.svg" alt="icon not found" className='hidden xl:block absolute -z-0 bottom-0 right-[40%]' />
            </div>
        </section>
    )
}

export default Potential