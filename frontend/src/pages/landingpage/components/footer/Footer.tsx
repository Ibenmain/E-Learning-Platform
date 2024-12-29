const Footer = () => {
  const company = ['Careers', 'Support', 'Contact']
  const product = ['Courses', 'Blog']
  const legal = ['Term & Conditions', 'Privacy policy']

  const contactIcon = [
    {
      id: 0,
      icon: "/images/youtube.svg"
    },
    {
      id: 1,
      icon: "/images/instagram.svg"
    },
    {
      id: 2,
      icon: "/images/linkedin.svg"
    },
    {
      id: 3,
      icon: "/images/twitter.svg"
    },
  ]
  return (
    <section className=' bg-[#212A34] h-[348px] flex '>
      <div className='relative container mx-auto '>
        <div className='absolute bottom-5 right-4 sm:bottom-10 sm:right-0 flex flex-row gap-2 sm:gap-7'>
          {contactIcon.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.icon} alt="icon not found" className='w-6 h-6 sm:w-8 sm:h-8' />
              </div>
            )
          })

          }
        </div>
        <div className='flex items-end justify-center h-full w-full flex-col sm:flex-row '>
          <div className='w-full sm:w-1/2 flex items-start justify-center flex-col h-full px-2'>
            <div className='flex flex-col items-start justify-center  h-full py-4 space-y-4 sm:py-20 sm:space-y-12'>
              <img src="/images/logo-dark.png" alt="" className='w-24 lg:w-44' />
              <p className='text-[#94A3B8] max-w-[411px] text-sm md:text-md'>Headquarters boulevard al abtal , casablanca . 20200 +212657410405</p>
            </div>
          </div>
          <div className='w-full sm:w-1/2  flex flex-row h-full  items-start px-2'>
            <div className='flex items-start space-x-5 lg:space-x-[20%] w-full h-full py-4 sm:py-24 text-[#94A3B8]'>

              <div className='space-y-3 sm:space-y-6'>
                <h1 className='text-[#CBD5E1] font-sans text-sm md:leading-[20px] font-semibold'>Company</h1>
                {company.map((item) => {
                  return (
                    <div key={item}>
                      <p className="font-normal font-sans text-sm md:leading-[24px] ">{item}</p>
                    </div>
                  )
                })}
              </div>
              <div className='space-y-3 sm:space-y-6'>
                <h1 className='text-[#CBD5E1] font-sans text-sm md:leading-[20px] font-semibold'>Product</h1>
                {product.map((item) => {
                  return (
                    <div key={item}>
                      <p className="font-normal font-sans text-sm md:leading-[24px] ">{item}</p>
                    </div>
                  )
                })}
              </div>
              <div className='space-y-3 sm:space-y-6'>
                <h1 className='text-[#CBD5E1] font-sans text-sm md:leading-[20px] font-semibold'>Legal</h1>
                {legal.map((item) => {
                  return (
                    <div key={item}>
                      <p className="font-normal font-sans text-sm md:leading-[24px] ">{item}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
