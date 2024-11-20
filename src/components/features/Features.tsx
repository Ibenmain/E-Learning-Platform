import { Icon } from '@iconify/react'
import React from 'react'

const Features = () => {
    const features = [
        {
            id: 1,
            title: "AI",
            description: "From basics to advanced concepts, learn AI and machine learning through interactive lessons",
            icon: "ix:ai",
        }
    ]
  return (
    <section className='h-[721px]'>
        <h1>Features</h1>
        <div className='flex flex-wrap'>
        <Icon icon="ix:ai" color={'gradient-to-tr from-[#9FEF00] to-[#03FF89]'} />
        </div>
    </section>
  )
}

export default Features