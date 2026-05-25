import React from 'react'
import LiquidEther from './LiquidEther'

const Hero = () => {
  return (
    <div className='relative'>
      <div style={{ width: '100%', height: 600, position: 'relative' }}>
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B497CF"
        />
      </div>

      <div className='pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center'>
        <div className='max-w-4xl space-y-4'>
          <h1 className='text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl'>
            <span className='bg-linear-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent'>
              We are
            </span>{' '}
            the Hackathon everyone&apos;s been{' '}
            <span className='bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent'>
              waiting for.
            </span>
          </h1>

          <p className='mx-auto max-w-2xl text-sm font-medium text-white/75 sm:text-base md:text-lg'>
            Experience the first edition Uniglobe Hackathon and CodeFest now.
          </p>

          <button className='pointer-events-auto rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90 sm:px-7 sm:py-3.5 sm:text-base'>
            Register now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
