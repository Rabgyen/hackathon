
import { FiArrowUpRight } from "react-icons/fi";

const REGISTER_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeay5Ed-U48i1Xk5K0zmMjJzUkjaW4Z-GmBbESPpQRcm4Yflg/viewform?usp=dialog'

const includedItems = [
  'Entry for your full team of 3 to 4 members',
  'Access to both days of the Code Fest and Hackathon',
  'Mentorship, workspace and refreshments during the event',
  'A chance to win cash prizes, trophies and gift hampers',
]

const RegistrationSection = () => {
  return (
    <section id='register' className='relative w-full scroll-mt-24 px-4 py-12 text-slate-800 sm:px-6 sm:py-16 lg:px-8'>
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#005c8f]/8 blur-2xl' />
        <div className='absolute right-10 bottom-0 h-64 w-64 rounded-full bg-[#7fbfdf]/10 blur-2xl' />
      </div>

      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-xs font-medium uppercase tracking-[0.45em] text-[#005c8f]'>Join The Event</p>
          <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl'>Registration</h2>
          <p className='mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base'>
            Secure your team&apos;s spot at the Uniglobe College Code Fest and Hackathon. Complete the registration form to confirm your participation.
          </p>
        </div>

        <div className='mt-10 grid gap-6 lg:grid-cols-5'>
          {/* Fee card */}
          <div className='relative overflow-hidden rounded-3xl border border-[#005c8f]/10 bg-[#005c8f] p-6 text-white shadow-[0_18px_40px_rgba(0,92,143,0.25)] sm:p-8 lg:col-span-2'>
            <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_45%)]' />
            <div className='relative flex h-full flex-col'>
              <p className='text-xs font-medium uppercase tracking-[0.35em] text-white/80'>Registration Fee</p>
              <div className='mt-3 flex items-baseline gap-2'>
                <span className='text-4xl font-semibold sm:text-5xl'>Rs. 8,000</span>
              </div>
              <p className='mt-2 text-sm text-white/80'>per team &middot; one-time payment</p>

              <a
                href={REGISTER_URL}
                target='_blank'
                rel='noreferrer'
                className='mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#005c8f] transition hover:bg-[#eaf5fb]'
              >
                Register Now
                <FiArrowUpRight className='text-base' />
              </a>

              <p className='mt-6 text-xs leading-6 text-white/75'>
                Payment details will be shared by the organizing team after you submit the form.
              </p>
            </div>
          </div>

          {/* What's included card */}
          <div className='relative overflow-hidden rounded-3xl border border-[#005c8f]/10 bg-white p-6 shadow-[0_10px_24px_rgba(0,92,143,0.06)] sm:p-8 lg:col-span-3'>
            <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(0,92,143,0.05),transparent_40%)] opacity-70' />
            <div className='relative'>
              <p className='text-xs font-medium uppercase tracking-[0.35em] text-[#005c8f]'>What&apos;s Included</p>
              <h3 className='mt-2 text-xl font-semibold text-slate-900 sm:text-2xl'>Your registration covers</h3>
              <ul className='mt-6 space-y-4'>
                {includedItems.map((item) => (
                  <li key={item} className='flex items-start gap-3 sm:gap-4'>
                    <span className='mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#005c8f]/20 text-[#005c8f] shadow-[0_0_0_1px_rgba(0,92,143,0.08)]'>
                      <svg viewBox='0 0 24 24' className='h-4 w-4' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                        <path d='M20 6L9 17l-5-5' />
                      </svg>
                    </span>
                    <span className='text-sm leading-6 text-slate-600 sm:text-base'>{item}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-8 rounded-2xl border border-[#005c8f]/10 bg-[#f4fbff] px-5 py-4 text-sm text-slate-600'>
                Registrations are open to bachelors-level students from colleges. Register your team of 3 to 4 members using the form.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationSection
