import React from 'react';

const EventTitleSection = () => {
  return (
    <section className='w-full bg-transparent px-4 py-6 sm:px-6 sm:py-8 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='px-6 py-10 text-center sm:px-10 sm:py-12'>
          <div>
            <p className='text-xs font-medium uppercase tracking-[0.45em] text-[#005c8f]'>Event Title</p>
            <h2 className='mx-auto mt-4 max-w-5xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl'>
              Innovation for Nepal, Local Problems and Smart Solution
            </h2>
            <p className='mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base md:text-lg'>
              A focused theme centered on practical ideas that solve local challenges with intelligent, impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventTitleSection