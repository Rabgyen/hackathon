import CardSwap, { Card } from './CardSwap'
import imageOne from '../assets/never_give_up.jpg'
import imageTwo from '../assets/ctrl.jpg'
import imageThree from '../assets/PC.jpg'

const PreviewSection = () => {
  return (
    <section className='relative w-full px-4 py-4 text-slate-800 sm:px-6 sm:py-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='relative overflow-hidden rounded-3xl border border-[#005c8f]/10 bg-white p-4 shadow-[0_18px_40px_rgba(0,92,143,0.12)] sm:p-6'>
          <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(0,92,143,0.04),transparent_40%)] opacity-70' />
          <div className='relative grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center'>
            <div className='space-y-3 lg:max-w-md lg:self-center'>
              <h3 className='text-xl font-semibold text-slate-900 sm:text-6xl'>The Hackathon Mindset</h3>
              <p className='max-w-2xl text-sm leading-6 text-slate-600 sm:text-base'>
                Discover the values that empower innovators to build impactful solutions, embrace emerging technologies, and turn bold ideas into reality.
              </p>
            </div>

            <div className='relative h-140 lg:justify-self-end'>
              <CardSwap width={640} height={500} cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
                <Card customClass='shadow-[0_14px_32px_rgba(0,92,143,0.14)]'>
                  <div className='flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white'>
                    <div className='border-b border-slate-200 px-4 py-3'>
                      <h3 className='text-lg font-semibold text-slate-900'>Persistence Powers Innovation</h3>
                    </div>
                    <div className='min-h-0 flex-1 w-full bg-cover bg-center' style={{ backgroundImage: `url(${imageOne})` }} />
                  </div>
                </Card>
                <Card customClass='shadow-[0_14px_32px_rgba(0,92,143,0.14)]'>
                  <div className='flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white'>
                    <div className='border-b border-slate-200 px-4 py-3'>
                      <h3 className='text-lg font-semibold text-slate-900'>Keep Coding, Keep Believing</h3>
                    </div>
                    <div className='min-h-0 flex-1 w-full bg-cover bg-center' style={{ backgroundImage: `url(${imageTwo})` }} />
                  </div>
                </Card>
                <Card customClass='shadow-[0_14px_32px_rgba(0,92,143,0.14)]'>
                  <div className='flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white'>
                    <div className='border-b border-slate-200 px-4 py-3'>
                      <h3 className='text-lg font-semibold text-slate-900'>Every Bug Is a Lesson</h3>
                    </div>
                    <div className='min-h-0 flex-1 w-full bg-cover bg-center' style={{ backgroundImage: `url(${imageThree})` }} />
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreviewSection