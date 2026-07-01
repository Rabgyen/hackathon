

import { useState } from 'react'

const scheduleDays = {
  'Day 1': [
    { time: '9:00 AM', title: 'Arrival & Registration', detail: 'Check-in' },
    { time: '9:30 AM', title: 'Event Starts', detail: 'Opening Ceremony' },
    { time: '10:00 AM', title: 'Welcome Session', detail: 'Kickoff' },
    { time: '11:00 AM', title: 'Core Sessions', detail: 'Talks & activities' },
    { time: '12:00 PM', title: 'Lunch Break', detail: 'Refresh & recharge' },
    { time: '1:00 PM', title: 'Workshops', detail: 'Hands-on sessions' },
    { time: '2:00 PM', title: 'Networking', detail: 'Connect with others' },
    { time: '3:00 PM', title: 'Presentations', detail: 'Project showcases' },
    { time: '4:00 PM', title: 'Judging', detail: 'Review & scoring' },
    { time: '5:00 PM', title: 'Closing', detail: 'Wrap-up and send-off' },
  ],
  'Day 2': [
    { time: '9:00 AM', title: 'Check-in & Coffee', detail: 'Morning arrival' },
    { time: '9:30 AM', title: 'Day 2 Kickoff', detail: 'Agenda overview' },
    { time: '10:00 AM', title: 'Main Sessions', detail: 'Learning blocks' },
    { time: '11:00 AM', title: 'Project Time', detail: 'Build & refine' },
    { time: '12:00 PM', title: 'Lunch Break', detail: 'Take a pause' },
    { time: '1:00 PM', title: 'Demos', detail: 'Showcase progress' },
    { time: '2:00 PM', title: 'Awards Prep', detail: 'Final touches' },
    { time: '3:00 PM', title: 'Final Demos', detail: 'Team presentations' },
    { time: '4:00 PM', title: 'Awards Review', detail: 'Judge deliberation' },
    { time: '5:00 PM', title: 'Awards & Closing', detail: 'Final announcements' },
  ],
}

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState('Day 1')
  const activeSchedule = scheduleDays[activeDay]
  const isDayOne = activeDay === 'Day 1'

  return (
    <section className='w-full px-4 py-16 text-slate-800 sm:px-6 sm:py-20 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='text-center mb-6'>
          <p className='text-xs font-medium uppercase tracking-[0.45em] text-[#005c8f]'>Schedule</p>
          <h3 className='mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl'>Event Schedule</h3>
        </div>

        <div className='mb-10 flex justify-center'>
          <div className='relative inline-flex rounded-2xl border border-[#005c8f]/15 bg-white p-1.5 shadow-[0_10px_30px_rgba(0,92,143,0.08)]'>
            <span
              className={`absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-xl bg-[#005c8f] transition-transform duration-300 ease-out ${
                isDayOne ? 'translate-x-0' : 'translate-x-full'
              }`}
              aria-hidden='true'
            />
            <button
              type='button'
              onClick={() => setActiveDay('Day 1')}
              className={`relative z-10 min-w-28 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                isDayOne ? 'text-white' : 'text-slate-600 hover:text-[#005c8f]'
              }`}
              aria-pressed={isDayOne}
            >
              Day 1
            </button>
            <button
              type='button'
              onClick={() => setActiveDay('Day 2')}
              className={`relative z-10 min-w-28 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                isDayOne ? 'text-slate-600 hover:text-[#005c8f]' : 'text-white'
              }`}
              aria-pressed={!isDayOne}
            >
              Day 2
            </button>
          </div>
        </div>

        {/* Desktop timeline */}
        <div className='hidden sm:block'>
          <div className='relative mx-auto max-w-6xl py-16 px-4'>
            {/* continuous line - centered precisely */}
            <div className='absolute left-4 right-4 top-1/2 transform -translate-y-1/2 h-px bg-[#005c8f]/12 z-0' />

            <div className='relative z-10 flex items-start justify-between'>
              {activeSchedule.map((item) => (
                <div key={`${item.time}-${item.title}`} className='flex-1 relative flex flex-col items-center group'>
                  {/* absolutely place the dot at 50% so it sits on the line */}
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='h-3 w-3 rounded-full bg-[#005c8f] ring-2 ring-[#005c8f]/15 transform transition duration-300 group-hover:scale-125 group-hover:ring-4 group-hover:ring-[#005c8f]/25' />

                    {/* tooltip (desktop) */}
                    <div className='hidden md:block absolute left-1/2 -top-12 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-2'>
                      <div className='whitespace-nowrap rounded-md border border-[#005c8f]/10 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur-sm'>
                        {item.title} — {item.time}
                      </div>
                    </div>
                  </div>

                  <div className='mt-20 text-[13px] font-medium text-slate-900 group-hover:text-[#005c8f]'>{item.time}</div>
                  <div className='mt-3 text-xs text-slate-500'>
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stacked timeline */}
        <div className='sm:hidden space-y-6'>
          {activeSchedule.map((item) => (
            <div key={`${item.time}-${item.title}`} className='flex items-start gap-6'>
              <div className='mt-2 h-3 w-3 rounded-full bg-[#005c8f] transform transition active:scale-125' />
              <div>
                <div className='text-sm font-semibold text-slate-900 mb-2'>{item.time}</div>
                <div className='text-xs text-slate-500'>
                  {item.title}
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
