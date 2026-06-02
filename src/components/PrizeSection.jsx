import firstPlaceImage from '../assets/1st-place.png'
import secondPlaceImage from '../assets/2nd-place.png'
import giftBoxImage from '../assets/gift-box.png'
import creditsImage from '../assets/increase.png'

const runnerUp = {
  title: 'Runner Up',
  subtitle: '2nd place',
  value: 'Trophy + Rs. 30k',
  amountLabel: 'Prize amount',
  amountValue: 'Rs. 30k',
  description:
    'The runner-up team will be recognized for an impressive project, strong teamwork, and a polished final delivery.',
  accent: 'from-[#cfe5f2] via-[#7fbfdf] to-[#005c8f]',
  ring: 'border-[#005c8f]/12',
  bg: 'bg-linear-to-br from-white via-[#f7fbfd] to-[#eaf4f9]',
  orb: 'bg-[#005c8f]/12',
  image: secondPlaceImage,
  imageAlt: '2nd place award',
  scale: 'sm:scale-[0.96]',
}

const winner = {
  title: 'Winner',
  subtitle: '1st place',
  value: 'Trophy + Rs. 50k',
  amountLabel: 'Prize amount',
  amountValue: 'Rs. 50k',
  description:
    'The winning team will be celebrated for the strongest overall solution, presentation, and execution across the event.',
  accent: 'from-[#005c8f] via-[#2f89b8] to-[#cce7f4]',
  ring: 'border-[#005c8f]/15',
  bg: 'bg-linear-to-br from-white via-[#f4fbff] to-[#dff0f8]',
  orb: 'bg-[#005c8f]/16',
  image: firstPlaceImage,
  imageAlt: '1st place award',
  scale: 'scale-100',
}

const giftAndHamper = {
  title: 'Gift & Hampers',
  subtitle: 'Special rewards',
  value: 'Gift hamper + Event credits',
  amountLabel: 'Prize amount',
  amountValue: 'Bonus rewards',
  description:
    'Selected teams will receive a special gift hamper and event credits as a bonus recognition for their effort and creativity.',
  accent: 'from-[#8fd1e8] via-[#4fa6cf] to-[#005c8f]',
  ring: 'border-[#005c8f]/12',
  bg: 'bg-linear-to-br from-white via-[#f7fbfd] to-[#eef7fb]',
  orb: 'bg-[#005c8f]/12',
  image: giftBoxImage,
  imageAlt: 'Gift award',
  secondImage: creditsImage,
}

const PrizeSection = () => {
  return (
    <section className="relative w-full px-4 py-16 text-slate-800 sm:px-6 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#005c8f]/8 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[#7fbfdf]/12 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center sm:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-[0.45em] text-[#005c8f]">Awards</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Winner and Runner Up
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            Celebrating Excellence: Honoring Our Winners and Runner-Ups.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr_0.92fr] lg:items-stretch">
          <PrizeCard prize={runnerUp} position="left" />
          <PrizeCard prize={winner} position="center" />
          <GiftHamperCard prize={giftAndHamper} />
        </div>
      </div>
    </section>
  )
}

const PrizeCard = ({ prize, position }) => {
  const isCenter = position === 'center'

  return (
    <div
      className={`group relative overflow-hidden rounded-4xl border ${prize.ring} ${prize.bg} ${
        isCenter ? 'min-h-136 scale-100 shadow-[0_30px_90px_rgba(0,92,143,0.14)] lg:-mt-10' : 'min-h-124 shadow-[0_18px_50px_rgba(0,92,143,0.08)]'
      } ${prize.scale}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,92,143,0.08),transparent_35%)]" />
      <div className={`absolute -left-10 top-16 h-36 w-36 rounded-full blur-3xl ${prize.orb}`} />
      <div className={`absolute -right-12 bottom-10 h-44 w-44 rounded-full blur-3xl ${prize.orb}`} />

      <div className={`relative flex h-full flex-col justify-between p-6 sm:p-8 ${isCenter ? 'lg:p-10' : ''}`}>
        <div className="space-y-5 text-center">
          <div className="mx-auto inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#005c8f]">
            {prize.subtitle}
          </div>

          <h3 className={`font-semibold tracking-tight text-slate-900 ${isCenter ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'}`}>
            {prize.title}
          </h3>

          <p className="mx-auto max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
            {prize.description}
          </p>
        </div>

        <div className="relative my-8 flex flex-1 items-center justify-center">
          <div className={`absolute inset-x-6 top-1/2 h-48 -translate-y-1/2 rounded-4xl bg-linear-to-br ${prize.accent} opacity-20 blur-2xl`} />
          <div className="relative flex items-center justify-center">
            <div className={`absolute inset-0 rounded-full bg-white/30 blur-2xl ${isCenter ? 'scale-150' : 'scale-125'}`} />
            <div className={`relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-linear-to-br ${prize.accent} text-white shadow-[0_24px_60px_rgba(0,92,143,0.2)] ring-1 ring-white/70 sm:h-44 sm:w-44 ${isCenter ? 'sm:h-48 sm:w-48' : ''}`}>
              <img src={prize.image} alt={prize.imageAlt} className="h-24 w-24 object-contain sm:h-28 sm:w-28" />
            </div>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#005c8f]/70">{prize.amountLabel}</p>
            <p className={`mt-2 font-semibold tracking-tight text-slate-900 ${isCenter ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'}`}>
              {prize.amountValue}
            </p>
          </div>

          <div className="mx-auto max-w-xs text-sm text-slate-600">
            <p className="font-semibold text-slate-900">{prize.value}</p>
            <p className="mt-1">{prize.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const GiftHamperCard = ({ prize }) => {
  return (
    <div className="group relative overflow-hidden rounded-4xl border border-[#005c8f]/12 bg-linear-to-br from-white via-[#f7fbfd] to-[#eef7fb] min-h-124 shadow-[0_18px_50px_rgba(0,92,143,0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,92,143,0.08),transparent_36%)]" />
      <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[#005c8f]/10 blur-3xl" />
      <div className="absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-[#7fbfdf]/12 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="space-y-5 text-center">
          <div className="mx-auto inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#005c8f]">
            {prize.subtitle}
          </div>
          <h3 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{prize.title}</h3>
          <p className="mx-auto max-w-sm text-sm leading-7 text-slate-600 sm:text-base">{prize.description}</p>
        </div>

        <div className="relative my-8 flex flex-1 items-center justify-center">
          <div className="absolute inset-x-6 top-1/2 h-44 -translate-y-1/2 rounded-4xl bg-linear-to-br from-[#005c8f]/10 via-[#7fbfdf]/10 to-transparent blur-2xl" />
          <div className="relative flex items-center justify-center">
            <div className="absolute left-0 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#005c8f]/16 blur-2xl" />
            <div className="absolute right-0 top-1/2 h-24 w-24 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7fbfdf]/16 blur-2xl" />

            <div className="relative flex items-center gap-4 rounded-4xl border border-[#005c8f]/10 bg-white/90 px-5 py-4 shadow-[0_24px_60px_rgba(0,92,143,0.12)] backdrop-blur-sm sm:px-6 sm:py-5">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-[#005c8f] via-[#4fa6cf] to-[#8fd1e8] shadow-lg shadow-[#005c8f]/20 ring-1 ring-white/70 sm:h-24 sm:w-24">
                <img src={prize.image} alt={prize.imageAlt} className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
              </div>
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-white via-[#f4fbff] to-[#dff0f8] shadow-lg shadow-[#005c8f]/10 ring-1 ring-[#005c8f]/10 sm:h-24 sm:w-24">
                <img src={creditsImage} alt="Credits award" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#005c8f]/70">{prize.amountLabel}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{prize.amountValue}</p>
          </div>

          <div className="mx-auto max-w-xs text-sm text-slate-600">
            <p className="font-semibold text-slate-900">{prize.value}</p>
            <p className="mt-1">Gift hamper and event credits together</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrizeSection
