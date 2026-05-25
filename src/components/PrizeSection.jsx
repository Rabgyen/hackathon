import React, { useEffect, useState } from 'react'
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
    accent: 'from-[#FFE08A] via-[#FFB347] to-[#FF7A18]',
    ring: 'border-[#FFD56A]/20',
    bg: 'from-[#FFD56A]/15 via-white/5 to-transparent',
    orb: 'bg-[#FFD56A]/35',
    glow: 'shadow-[0_30px_90px_rgba(255,196,61,0.18)]',
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
    accent: 'from-[#F5F5F5] via-[#D4D4D4] to-[#A3A3A3]',
    ring: 'border-white/20',
    bg: 'from-white/12 via-white/6 to-transparent',
    orb: 'bg-white/35',
    glow: 'shadow-[0_30px_90px_rgba(255,255,255,0.12)]',
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
    accent: 'from-[#F7C6FF] via-[#E28CFF] to-[#B85CFF]',
    ring: 'border-fuchsia-300/20',
    bg: 'from-fuchsia-300/15 via-white/5 to-transparent',
    orb: 'bg-fuchsia-300/35',
    glow: 'shadow-[0_30px_90px_rgba(198,108,255,0.16)]',
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
    accent: 'from-[#9BF6FF] via-[#38D9D9] to-[#0EA5E9]',
    ring: 'border-cyan-300/20',
    bg: 'from-cyan-300/15 via-white/5 to-transparent',
    orb: 'bg-cyan-300/35',
    glow: 'shadow-[0_30px_90px_rgba(56,189,248,0.16)]',
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
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFD56A]/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.45em] text-white/40">Awards</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Winner and Runner Up
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/65 sm:text-base">
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
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
                        <span className={`h-2 w-2 rounded-full bg-linear-to-r ${prize.accent}`} />
                        {prize.subtitle}
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">{prize.title}</h3>
                        <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                          {prize.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={goToPreviousPrize}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-x-0.5 hover:bg-white/15"
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
                                index === activePrizeIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/50'
                              }`}
                              aria-label={`Show ${dotPrize.title} award`}
                              aria-pressed={index === activePrizeIndex}
                            />
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={goToNextPrize}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:translate-x-0.5 hover:bg-white/15"
                          aria-label="Show next award"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M9 6l6 6-6 6" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="relative flex min-h-70 items-center justify-center rounded-4xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl sm:min-h-85 sm:p-8">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)] opacity-80" />
                      <div className="relative flex w-full flex-col items-center gap-6 text-center">
                        <div className={`flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-linear-to-br ${prize.accent} text-black shadow-2xl shadow-black/25 ring-1 ring-white/25 sm:h-28 sm:w-28`}>
                          <img src={prize.image} alt={prize.imageAlt} className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/45">{prize.amountLabel}</p>
                          <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">{prize.amountValue}</p>
                        </div>

                        <div className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/65">
                          <p className="font-semibold text-white">{prize.value}</p>
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
