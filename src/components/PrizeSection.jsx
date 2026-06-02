import { useEffect, useState } from 'react'
import firstPlaceImage from '../assets/1st-place.png'
import secondPlaceImage from '../assets/2nd-place.png'
import giftBoxImage from '../assets/gift-box.png'
import creditsImage from '../assets/increase.png'

const prizes = [
  {
    title: 'Winner',
    subtitle: '1st place',
    value: 'Trophy + Rs. 30k',
    amountLabel: 'Prize amount',
    amountValue: 'Rs. 30k',
    description:
      'The winning team will be celebrated for the strongest overall solution, presentation, and execution across the event.',
    accent: 'from-[#005c8f] via-[#2f89b8] to-[#cce7f4]',
    ring: 'border-[#005c8f]/15',
    bg: 'from-white via-[#f4fbff] to-[#e6f3f9]',
    orb: 'bg-[#005c8f]/18',
    glow: 'shadow-[0_30px_90px_rgba(0,92,143,0.12)]',
    image: firstPlaceImage,
    imageAlt: '1st place award',
  },
  {
    title: 'Runner Up',
    subtitle: '2nd place',
    value: 'Trophy + Rs. 25k',
    amountLabel: 'Prize amount',
    amountValue: 'Rs. 25k',
    description:
      'The runner-up team will be recognized for an impressive project, strong teamwork, and a polished final delivery.',
    accent: 'from-[#dcecf4] via-[#a7cfe2] to-[#005c8f]',
    ring: 'border-[#005c8f]/12',
    bg: 'from-white via-[#f7fbfd] to-[#eef7fb]',
    orb: 'bg-[#005c8f]/14',
    glow: 'shadow-[0_30px_90px_rgba(0,92,143,0.08)]',
    image: secondPlaceImage,
    imageAlt: '2nd place award',
  },
  {
    title: 'Gift',
    subtitle: 'Special reward',
    value: 'Gift hamper',
    amountLabel: 'Prize amount',
    amountValue: 'Gift hamper',
    description:
      'Selected teams will receive a special gift reward as a bonus recognition for their effort and creativity.',
    accent: 'from-[#005c8f] via-[#3c98c2] to-[#bfe4f2]',
    ring: 'border-[#005c8f]/15',
    bg: 'from-white via-[#f7fbfd] to-[#eef7fb]',
    orb: 'bg-[#005c8f]/16',
    glow: 'shadow-[0_30px_90px_rgba(0,92,143,0.1)]',
    image: giftBoxImage,
    imageAlt: 'Gift award',
  },
  {
    title: 'Credits',
    subtitle: 'Participation perk',
    value: 'Event credits',
    amountLabel: 'Prize amount',
    amountValue: 'Event credits',
    description:
      'Participants will also receive credits as part of the event perks, making the experience more rewarding overall.',
    accent: 'from-[#cce7f4] via-[#7fbfdf] to-[#005c8f]',
    ring: 'border-[#005c8f]/15',
    bg: 'from-white via-[#f7fbfd] to-[#eef7fb]',
    orb: 'bg-[#005c8f]/16',
    glow: 'shadow-[0_30px_90px_rgba(0,92,143,0.1)]',
    image: creditsImage,
    imageAlt: 'Credits award',
  },
]

const AUTO_ROTATE_DELAY = 8000

const PrizeSection = () => {
  const [activePrizeIndex, setActivePrizeIndex] = useState(0)

  const activePrize = prizes[activePrizeIndex]

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActivePrizeIndex((currentIndex) => (currentIndex + 1) % prizes.length)
    }, AUTO_ROTATE_DELAY)

    return () => window.clearTimeout(timeoutId)
  }, [activePrizeIndex])

  const goToPreviousPrize = () => {
    setActivePrizeIndex((currentIndex) => (currentIndex - 1 + prizes.length) % prizes.length)
  }

  const goToNextPrize = () => {
    setActivePrizeIndex((currentIndex) => (currentIndex + 1) % prizes.length)
  }

  return (
    <section className="relative w-full px-4 py-16 text-slate-800 sm:px-6 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#005c8f]/8 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[#7fbfdf]/12 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.45em] text-[#005c8f]">Awards</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Winner and Runner Up
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            Celebrating Excellence: Honoring Our Winners and Runner-Ups.
          </p>
        </div>

        <div className={`group relative overflow-hidden rounded-4xl border ${activePrize.ring} bg-linear-to-br ${activePrize.bg} ${activePrize.glow}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl ${activePrize.orb}`} />
          <div className={`absolute -bottom-14 -left-14 h-44 w-44 rounded-full blur-3xl ${activePrize.orb}`} />

          <div className="overflow-hidden">
            <div
              className="flex w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activePrizeIndex * 100}%)` }}
            >
              {prizes.map((prize) => (
                <div key={prize.title} className="w-full shrink-0">
                  <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-10">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#005c8f]/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#005c8f] backdrop-blur">
                        <span className={`h-2 w-2 rounded-full bg-linear-to-r ${prize.accent}`} />
                        {prize.subtitle}
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">{prize.title}</h3>
                        <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:text-lg">
                          {prize.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={goToPreviousPrize}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#005c8f]/15 bg-white text-[#005c8f] transition hover:-translate-x-0.5 hover:bg-[#f4fbff]"
                          aria-label="Show previous award"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </button>
                        <div className="flex items-center gap-2">
                          {prizes.map((dotPrize, index) => (
                            <button
                              key={dotPrize.title}
                              type="button"
                              onClick={() => setActivePrizeIndex(index)}
                              className={`h-2.5 rounded-full transition-all ${
                                index === activePrizeIndex ? 'w-8 bg-[#005c8f]' : 'w-2.5 bg-[#005c8f]/25 hover:bg-[#005c8f]/40'
                              }`}
                              aria-label={`Show ${dotPrize.title} award`}
                              aria-pressed={index === activePrizeIndex}
                            />
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={goToNextPrize}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#005c8f]/15 bg-white text-[#005c8f] transition hover:translate-x-0.5 hover:bg-[#f4fbff]"
                          aria-label="Show next award"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M9 6l6 6-6 6" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="relative flex min-h-70 items-center justify-center rounded-4xl border border-[#005c8f]/10 bg-white/85 p-6 backdrop-blur-xl sm:min-h-85 sm:p-8">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,92,143,0.05),transparent_40%)] opacity-80" />
                      <div className="relative flex w-full flex-col items-center gap-6 text-center">
                        <div className={`flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-linear-to-br ${prize.accent} text-white shadow-2xl shadow-[#005c8f]/20 ring-1 ring-white/60 sm:h-28 sm:w-28`}>
                          <img src={prize.image} alt={prize.imageAlt} className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#005c8f]/70">{prize.amountLabel}</p>
                          <p className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{prize.amountValue}</p>
                        </div>

                        <div className="w-full max-w-xs rounded-2xl border border-[#005c8f]/10 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                          <p className="font-semibold text-slate-900">{prize.value}</p>
                          <p className="mt-1">{prize.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrizeSection
