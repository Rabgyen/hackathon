import { useState } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 px-4 pt-4'>
      <div className='mx-auto w-full max-w-6xl'>
        <nav className='relative overflow-hidden rounded-2xl border border-white/55 bg-white/35 px-4 py-2.5 text-slate-800 shadow-[0_16px_45px_rgba(0,92,143,0.12)] backdrop-blur-2xl sm:px-6'>
          <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.75),rgba(255,255,255,0.18)_45%,rgba(0,92,143,0.08)_100%)]' />
          <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80' />
          <div className='pointer-events-none absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-white/35 blur-2xl' />
          <div className='pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-[#005c8f]/10 blur-2xl' />

          <div className='relative flex items-center'>
            <a href='/' className='flex items-center gap-2'>
              <span className='inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/60 bg-white/55 shadow-inner shadow-white/60'>
                <svg viewBox='0 0 24 24' className='h-4 w-4 text-[#005c8f]' fill='none' stroke='currentColor' strokeWidth='1.8'>
                  <path d='M4 12h16M12 4v16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7' />
                </svg>
              </span>
              <span className='text-sm font-semibold tracking-wide text-slate-900 sm:text-base'>Uniglobe College IT Club</span>
            </a>

            <div className='ml-auto hidden items-center gap-7 md:flex'>
              <ul className='flex items-center gap-7 text-sm text-slate-600'>
                <li><a href='#about' className='transition hover:text-[#005c8f]'>About</a></li>
                <li><a href='#contact' className='transition hover:text-[#005c8f]'>Contact</a></li>
              </ul>

              <a
                href='https://forms.gle/Fz9ay18V86axXXx58'
                target='_blank'
                rel='noreferrer'
                className='rounded-xl bg-[#005c8f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#004d78]'
              >
                Register now
              </a>
            </div>

            <button
              type='button'
              className='ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/55 bg-white/35 text-[#005c8f] shadow-sm md:hidden'
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label='Toggle navigation menu'
              aria-expanded={isMenuOpen}
            >
              <svg viewBox='0 0 24 24' className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='1.8'>
                {isMenuOpen ? (
                  <path d='M6 6l12 12M18 6L6 18' />
                ) : (
                  <path d='M4 7h16M4 12h16M4 17h16' />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className='relative mt-3 space-y-2 border-t border-white/35 pt-3 md:hidden'>
              <a href='#about' className='block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-white/45 hover:text-[#005c8f]'>
                About
              </a>
              <a href='#contact' className='block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-white/45 hover:text-[#005c8f]'>
                Contact
              </a>
              <a
                href='https://forms.gle/Fz9ay18V86axXXx58'
                target='_blank'
                rel='noreferrer'
                className='mt-1 block w-full rounded-lg bg-[#005c8f] px-4 py-2 text-center text-sm font-semibold text-white shadow-sm'
              >
                Register now
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default NavBar
