import React from 'react'

const Hero = () => {
  return (
    <div className='bg-yellow-300 '>
      <div className='container  mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div className='w-full p-4 md:w-2/5' style={{ backgroundColor: '#f06' }}>
            <h2 className='text-2xl font-bold mb-4'>CasaSwift</h2>
            <p className='mb-4'>Where Comfort meets convenience</p>
          </div>
          <div className='w-full p-4 md:w-2/5' style={{ backgroundColor: '#6f0' }}>
            <h2 className='text-2xl font-bold mb-4'>Section 2</h2>
            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a volutpat laoreet, velit velit venenatis nisl, vel aliquet lorem nisi et sapien.</p>
          </div>
          <div className='w-full p-4 md:w-2/5' style={{ backgroundColor: '#06f' }}>
            <h2 className='text-2xl font-bold mb-4'>Section 3</h2>
            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a volutpat laoreet, velit velit venenatis nisl, vel aliquet lorem nisi et sapien.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero