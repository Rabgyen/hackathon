import React from 'react'

const hours = ['9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM']

const ScheduleSection = () => {
  return (
    <section className='w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='text-center mb-6'>
          <p className='text-xs font-medium uppercase tracking-[0.45em] text-white/35'>Schedule</p>
          <h3 className='mt-2 text-2xl font-semibold text-white sm:text-3xl'>Event Schedule (9 AM — 5 PM)</h3>
        </div>

        {/* Desktop timeline */}
        <div className='hidden sm:block'>
          <div className='relative mx-auto max-w-6xl py-16 px-4'>
            {/* continuous line - centered precisely */}
            <div className='absolute left-4 right-4 top-1/2 transform -translate-y-1/2 h-px bg-white/10 z-0' />

            <div className='relative z-10 flex items-start justify-between'>
              {hours.map((h, idx) => (
                <div key={h} className='flex-1 relative flex flex-col items-center group'>
                  {/* absolutely place the dot at 50% so it sits on the line */}
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='h-3 w-3 rounded-full bg-white/90 ring-2 ring-white/10 transform transition duration-300 group-hover:scale-125 group-hover:ring-4 group-hover:ring-[#5227FF]/30' />

                    {/* tooltip (desktop) */}
                    <div className='hidden md:block absolute left-1/2 -top-12 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-2'>
                      <div className='whitespace-nowrap rounded-md bg-white/8 px-3 py-1 text-xs text-white/90 backdrop-blur-sm'>
                        {idx === 0 ? 'Registration — 9:00' : idx === 1 ? 'Opening — 10:00' : idx === 2 ? 'Sessions — 11:00' : idx === 3 ? 'Lunch — 12:00' : idx === 4 ? 'Workshops — 13:00' : idx === 5 ? 'Entertainment — 14:00' : idx === 6 ? 'Presentations — 15:00' : idx === 7 ? 'Judging — 16:00' : 'Awards — 17:00'}
                      </div>
                    </div>
                  </div>

                  <div className='mt-20 text-[13px] font-medium text-white group-hover:text-white'>{h}</div>
                  <div className='mt-3 text-xs text-white/60'>
                    {idx === 0 && 'Registration'}
                    {idx === 1 && 'Opening'}
                    {idx === 2 && 'Sessions'}
                    {idx === 3 && 'Lunch'}
                    {idx === 4 && 'Workshops'}
                    {idx === 5 && 'Entertainment'}
                    {idx === 6 && 'Presentations'}
                    {idx === 7 && 'Judging'}
                    {idx === 8 && 'Awards'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stacked timeline */}
        <div className='sm:hidden space-y-6'>
          {hours.map((h, idx) => (
            <div key={h} className='flex items-start gap-6'>
              <div className='mt-2 h-3 w-3 rounded-full bg-white/90 transform transition active:scale-125' />
              <div>
                <div className='text-sm font-semibold text-white mb-2'>{h}</div>
                <div className='text-xs text-white/60'>
                  {idx === 0 && 'Registration'}
                  {idx === 1 && 'Opening'}
                  {idx === 2 && 'Sessions'}
                  {idx === 3 && 'Lunch'}
                  {idx === 4 && 'Workshops'}
                  {idx === 5 && 'Hacking'}
                  {idx === 6 && 'Presentations'}
                  {idx === 7 && 'Judging'}
                  {idx === 8 && 'Awards'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
