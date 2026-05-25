import React, { useState } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 px-4 pt-4'>
      <div className='mx-auto w-full max-w-6xl'>
        <nav className='rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-xl sm:px-6'>
          <div className='flex items-center'>
            <a href='/' className='flex items-center gap-2'>
              <span className='inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10'>
                <svg viewBox='0 0 24 24' className='h-4 w-4 text-white' fill='none' stroke='currentColor' strokeWidth='1.8'>
                  <path d='M4 12h16M12 4v16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7' />
                </svg>
              </span>
              <span className='text-sm font-semibold tracking-wide text-white sm:text-base'>Uniglobe College IT Club</span>
            </a>

            <div className='ml-auto hidden items-center gap-7 md:flex'>
              <ul className='flex items-center gap-7 text-sm text-white/80'>
                <li><a href='#about' className='transition hover:text-white'>About</a></li>
                <li><a href='#contact' className='transition hover:text-white'>Contact</a></li>
              </ul>

              <a
                href='https://forms.gle/Fz9ay18V86axXXx58'
                target='_blank'
                rel='noreferrer'
                className='rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90'
              >
                Register now
              </a>
            </div>

            <button
              type='button'
              className='ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white md:hidden'
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
            <div className='mt-3 space-y-2 border-t border-white/15 pt-3 md:hidden'>
              <a href='#about' className='block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white'>
                About
              </a>
              <a href='#contact' className='block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white'>
                Contact
              </a>
              <a
                href='https://forms.gle/Fz9ay18V86axXXx58'
                target='_blank'
                rel='noreferrer'
                className='mt-1 block w-full rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-black'
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
