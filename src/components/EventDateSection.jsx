

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const leadingEmptyDays = 3
const daysInMonth = 31
const specialDays = {
  10: 'CodeFest',
  11: 'Hackathon',
}

const EventDateSection = () => {
  return (
    <section className='relative w-full px-4 py-16 text-slate-800 sm:px-6 sm:py-20 lg:px-8'>
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-0 top-0 h-72 w-72 rounded-full bg-[#005c8f]/10 blur-3xl' />
        <div className='absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#7fbfdf]/12 blur-3xl' />
      </div>

      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
          <div className='space-y-5'>
            <p className='text-xs font-medium uppercase tracking-[0.45em] text-[#005c8f]'>Event Date</p>
            <h2 className='text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl'>
              July 2026
            </h2>
            <p className='max-w-xl text-sm leading-7 text-slate-600 sm:text-base'>
              Circle the date for this upcoming event. Be there to experience something amazing.
            </p>

            <div className='flex flex-wrap gap-3 text-sm'>
              <div className='rounded-full border border-[#005c8f]/15 bg-white px-4 py-2 text-slate-700 shadow-sm'>
                10 July 2026
              </div>
              <div className='rounded-full border border-[#005c8f]/15 bg-white px-4 py-2 text-slate-700 shadow-sm'>
                11 July 2026
              </div>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-4xl border border-[#005c8f]/10 bg-white/90 p-5 shadow-[0_30px_90px_rgba(0,92,143,0.08)] backdrop-blur-xl sm:p-6'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,92,143,0.08),transparent_35%),linear-gradient(135deg,rgba(127,191,223,0.12),transparent_45%)]' />

            <div className='relative'>
              <div className='mb-5 flex items-center justify-between gap-4'>
                <div>
                  <p className='text-xs font-medium uppercase tracking-[0.35em] text-[#005c8f]'>Calendar</p>
                  <h3 className='mt-2 text-2xl font-semibold text-slate-900'>July 2026</h3>
                </div>
              </div>

              <div className='grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 sm:gap-3'>
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
                  const hoverLabel = specialDays[dayNumber]
                  const isHighlighted = Boolean(hoverLabel)

                  return (
                    <div
                      key={dayNumber}
                      className={`group aspect-square rounded-2xl border p-2 transition-transform duration-300 hover:-translate-y-0.5 sm:p-3 ${
                        isHighlighted
                          ? 'border-2 border-[#005c8f] bg-linear-to-br from-[#005c8f]/6 via-white to-[#7fbfdf]/8 shadow-[0_16px_40px_rgba(0,92,143,0.14)] hover:shadow-[0_20px_50px_rgba(0,92,143,0.2)]'
                          : 'border-slate-200 bg-white hover:bg-[#f4fbff]'
                      }`}
                    >
                      <div className='flex h-full flex-col justify-between'>
                        <span className={`text-sm font-semibold sm:text-base ${isHighlighted ? 'text-[#005c8f]' : 'text-slate-700'}`}>
                          {dayNumber}
                        </span>

                        {isHighlighted ? (
                          <span className='relative flex items-center justify-center text-[10px] font-semibold uppercase tracking-[0.28em] text-[#005c8f] sm:text-[11px]'>
                            <span className='opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 rounded-full border border-[#005c8f]/15 bg-white/95 px-2 py-1 shadow-sm'>
                              {hoverLabel}
                            </span>
                          </span>
                        ) : (
                          <span className='text-[10px] uppercase tracking-[0.25em] text-slate-300'>&nbsp;</span>
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