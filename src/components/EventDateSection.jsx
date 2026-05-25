import React from 'react'

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const leadingEmptyDays = 3
const daysInMonth = 31
const highlightedDays = new Set([11, 12])
const highlightLabels = {
  11: 'CodeFest',
  12: 'Hackathon Event',
}

const EventDateSection = () => {
  return (
    <section className='relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-0 top-0 h-72 w-72 rounded-full bg-[#C084FC]/12 blur-3xl' />
        <div className='absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#60A5FA]/12 blur-3xl' />
      </div>

      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
          <div className='space-y-5'>
            <p className='text-xs font-medium uppercase tracking-[0.45em] text-white/40'>Event Date</p>
            <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl'>
              July 2026
            </h2>
            <p className='max-w-xl text-sm leading-7 text-white/65 sm:text-base'>
              Circle the date for this upcoming event. Be there to experience something amazing.
            </p>

            <div className='flex flex-wrap gap-3 text-sm'>
              <div className='rounded-full border border-white/10 bg-white/8 px-4 py-2 text-white/80'>
                11 July 2026
              </div>
              <div className='rounded-full border border-white/10 bg-white/8 px-4 py-2 text-white/80'>
                12 July 2026
              </div>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-6'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]' />

            <div className='relative'>
              <div className='mb-5 flex items-center justify-between gap-4'>
                <div>
                  <p className='text-xs font-medium uppercase tracking-[0.35em] text-white/35'>Calendar</p>
                  <h3 className='mt-2 text-2xl font-semibold text-white'>July 2026</h3>
                </div>
              </div>

              <div className='grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/35 sm:gap-3'>
                {weekDays.map((day) => (
                  <div key={day} className='py-2'>
                    {day}
                  </div>
                ))}
              </div>

              <div className='mt-3 grid grid-cols-7 gap-2 sm:gap-3'>
                {Array.from({ length: leadingEmptyDays }).map((_, index) => (
                  <div key={`empty-${index}`} className='aspect-square rounded-2xl border border-transparent' />
                ))}

                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const dayNumber = index + 1
                  const isHighlighted = highlightedDays.has(dayNumber)

                  return (
                    <div
                      key={dayNumber}
                      className={`group aspect-square rounded-2xl border p-2 transition-transform duration-300 hover:-translate-y-0.5 sm:p-3 ${
                        isHighlighted
                          ? 'border-[#C084FC]/50 bg-linear-to-br from-[#C084FC]/30 via-[#60A5FA]/15 to-transparent shadow-[0_16px_40px_rgba(96,165,250,0.22)]'
                          : 'border-white/10 bg-white/5 hover:bg-white/8'
                      }`}
                    >
                      <div className='flex h-full flex-col justify-between'>
                        <span className={`text-sm font-semibold sm:text-base ${isHighlighted ? 'text-white' : 'text-white/75'}`}>
                          {dayNumber}
                        </span>
                        {isHighlighted ? (
                          <span className='rounded-full bg-black/25 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85'>
                            {highlightLabels[dayNumber]}
                          </span>
                        ) : (
                          <span className='text-[10px] uppercase tracking-[0.25em] text-white/20'>
                            &nbsp;
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventDateSection