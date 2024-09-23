import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Content above the video */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1> */}
      </div>
      {/* Optional: Add an overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  )
}

export default Hero