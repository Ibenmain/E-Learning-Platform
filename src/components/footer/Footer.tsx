import React from 'react'

const Footer = () => {
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
    <section className='relative bg-[#212A34] h-[348px] '>
      <div className='flex items-center justify-center gap-5 px-8 sm:px-16 md:px-32 lg:px-56 absolute bottom-0 right-0 py-10'>
        {contactIcon.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.icon} alt="icon not found" className='w-8 h-8' />
            </div>
          )
        })

        }
      </div>
      <div className='flex items-end justify-center '>
        <div className='w-1/2 flex items-end justify-center flex-col '>
          <div className='flex flex-col items-start justify-center w-3/4 h-full py-20 space-y-12'>
            <img src="/images/logo-dark.png" alt="" className=' w-44' />
            <p className='text-[#94A3B8] max-w-[411px]'>Headquarters boulevard al abtal , casablanca . 20200 +212657410405</p>
          </div>
        </div>
        <div className='w-1/2  '>

        </div>
      </div>


    </section>
  )
}

export default Footer