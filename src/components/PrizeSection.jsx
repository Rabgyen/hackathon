import React from 'react'

const prizes = [
  {
    title: 'Winner',
    subtitle: '1st place',
    value: 'Trophy + Rs. 30k',
    accent: 'from-[#FFE08A] via-[#FFB347] to-[#FF7A18]',
    ring: 'border-[#FFD56A]/20',
    bg: 'from-[#FFD56A]/15 via-white/5 to-transparent',
    orb: 'bg-[#FFD56A]/35',
    glow: 'shadow-[0_30px_90px_rgba(255,196,61,0.18)]',
  },
  {
    title: 'Runner Up',
    subtitle: '2nd place',
    value: 'Trophy + Rs. 25k',
    accent: 'from-[#8AE6FF] via-[#57C8FF] to-[#2E8BFF]',
    ring: 'border-sky-300/20',
    bg: 'from-sky-300/15 via-white/5 to-transparent',
    orb: 'bg-sky-300/35',
    glow: 'shadow-[0_30px_90px_rgba(68,156,255,0.16)]',
  },
]

const PrizeCard = ({ prize, index }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-4xl border ${prize.ring} bg-linear-to-br ${prize.bg} p-6 sm:p-8 ${prize.glow}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl ${prize.orb}" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full blur-3xl ${prize.orb}" />

      <div className="relative flex h-full flex-col gap-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
              <span className={`h-2 w-2 rounded-full bg-linear-to-r ${prize.accent}`} />
              {prize.subtitle}
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{prize.title}</h3>
          </div>

          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${prize.accent} text-base font-black text-black shadow-lg shadow-black/20 ring-1 ring-white/20`}>
            0{index + 1}
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Prize</p>
            <p className="text-xl font-semibold text-white sm:text-2xl">{prize.value}</p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <div className={`h-3 w-3 rounded-full bg-linear-to-r ${prize.accent}`} />
            <div className={`h-24 w-24 rounded-full border border-white/15 bg-linear-to-br ${prize.accent} opacity-85`} />
          </div>
        </div>
      </div>
    </div>
  )
}

const PrizeSection = () => {
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
            Celebrate the top teams with a premium prize presentation designed to feel bold, modern, and event-ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-7">
          {prizes.map((prize, index) => (
            <PrizeCard key={prize.title} prize={prize} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrizeSection
