import { useEffect, useRef } from 'react'

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <video ref={videoRef} autoPlay loop muted playsInline className='absolute inset-0 bg-cover bg-center object-cover'>
      <source src='/images/bg_video.mp4' type='video/mp4' />
    </video>
  )
}
