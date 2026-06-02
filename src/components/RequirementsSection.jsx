

const leftItems = [
  'Projects built using free tools and resources.',
  'A complete team with 3 to 4 members.',
  'Teams that work collaboratively thorughout both days of the event.',
]

const rightItems = [
  'Complete descriptions of your project.',
  'Proper Documentation of your project.',
  'Your slides for presenting your project live.',
  'Complete project at the end of the event.',
]

const CheckItem = ({ children }) => {
  return (
    <li className="flex items-start gap-3 sm:gap-4">
      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#005c8f]/20 text-[#005c8f] shadow-[0_0_0_1px_rgba(0,92,143,0.08)]">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span className="text-xs leading-5 text-slate-600 sm:text-sm md:text-base md:leading-6">{children}</span>
    </li>
  )
}

const RequirementsSection = () => {
  return (
    <section className="relative w-full bg-transparent px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-4xl border border-[#005c8f]/10 bg-white/85 px-5 py-10 shadow-[0_16px_50px_rgba(0,92,143,0.08)] backdrop-blur-md md:px-10 md:py-14">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#005c8f]">Eligibility & Submission</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">Requirements</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h3 className="text-lg font-medium text-slate-900 sm:text-xl">What we&apos;re looking for:</h3>
            <ul className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              {leftItems.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-900 sm:text-xl">What you&apos;ll need to submit:</h3>
            <ul className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              {rightItems.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RequirementsSection
