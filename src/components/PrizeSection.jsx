import firstPlaceImage from '../assets/1st-place.png'
import secondPlaceImage from '../assets/2nd-place.png'
import giftBoxImage from '../assets/gift-box.png'
import creditsImage from '../assets/increase.png'

// Prizes ordered so the winner sits in the middle of the row on desktop.
const prizes = [
  {
    place: '2nd',
    title: 'Runner Up',
    amount: 'Rs. 30k',
    reward: 'Trophy + cash prize',
    description:
      'Second place still walks away with a trophy and Rs. 30k. Not a bad haul for one weekend of building.',
    image: secondPlaceImage,
    imageAlt: '2nd place award',
    accent: { text: 'text-slate-500', ring: 'ring-slate-200', tint: 'bg-slate-50', badge: 'bg-slate-100 text-slate-600' },
    featured: false,
  },
  {
    place: '1st',
    title: 'Winner',
    amount: 'Rs. 50k',
    reward: 'Trophy + cash prize',
    description:
      'Top team takes home the trophy and Rs. 50k. Whoever ships the best project this weekend earns it.',
    image: firstPlaceImage,
    imageAlt: '1st place award',
    accent: { text: 'text-amber-600', ring: 'ring-amber-200', tint: 'bg-amber-50', badge: 'bg-amber-100 text-amber-700' },
    featured: true,
  },
  {
    place: 'Bonus',
    title: 'Gift & Hampers',
    amount: 'Bonus rewards',
    reward: 'Hamper + event credits',
    description:
      'A few teams that catch our eye also grab a gift hamper and some event credits. A little extra for the effort.',
    image: giftBoxImage,
    secondImage: creditsImage,
    imageAlt: 'Gift award',
    accent: { text: 'text-[#005c8f]', ring: 'ring-[#005c8f]/15', tint: 'bg-[#005c8f]/5', badge: 'bg-[#005c8f]/10 text-[#005c8f]' },
    featured: false,
  },
]

const PrizeCard = ({ prize }) => {
  const { featured, accent } = prize

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
        featured
          ? 'border border-amber-200/70 shadow-[0_24px_60px_rgba(180,120,20,0.14)] hover:shadow-[0_32px_70px_rgba(180,120,20,0.18)] lg:-mt-4'
          : 'border border-[#005c8f]/10 shadow-[0_16px_40px_rgba(0,92,143,0.06)] hover:shadow-[0_22px_50px_rgba(0,92,143,0.1)]'
      }`}
    >
      {/* Slim accent bar along the top edge. */}
      <span
        className={`absolute inset-x-0 top-0 h-1 ${
          featured ? 'bg-linear-to-r from-amber-300 via-amber-500 to-amber-300' : 'bg-[#005c8f]/15'
        }`}
      />

      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${accent.badge}`}
        >
          {prize.place}
        </span>
        <h3 className="text-lg font-semibold text-slate-900">{prize.title}</h3>
      </div>

      <div className="mt-9 flex items-center justify-center">
        {prize.secondImage ? (
          <div className="flex items-center gap-3">
            <div className={`flex h-20 w-20 items-center justify-center rounded-full ring-1 ${accent.ring} ${accent.tint}`}>
              <img src={prize.image} alt={prize.imageAlt} className="h-11 w-11 object-contain" />
            </div>
            <div className={`flex h-20 w-20 items-center justify-center rounded-full ring-1 ${accent.ring} ${accent.tint}`}>
              <img src={prize.secondImage} alt="Event credits" className="h-11 w-11 object-contain" />
            </div>
          </div>
        ) : (
          <div
            className={`flex items-center justify-center rounded-full ring-1 transition-transform duration-300 group-hover:scale-105 ${accent.ring} ${accent.tint} ${
              featured ? 'h-32 w-32' : 'h-28 w-28'
            }`}
          >
            <img
              src={prize.image}
              alt={prize.imageAlt}
              className={`object-contain ${featured ? 'h-20 w-20' : 'h-16 w-16'}`}
            />
          </div>
        )}
      </div>

      <div className="mt-9 border-t border-slate-100 pt-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-slate-400">Prize</p>
        <div className="mt-1.5 flex items-baseline gap-2">
          <p className={`text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl ${featured ? accent.text : 'text-slate-900'}`}>
            {prize.amount}
          </p>
        </div>
        <p className="mt-1 text-sm text-slate-500">{prize.reward}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{prize.description}</p>
      </div>
    </div>
  )
}

const PrizeSection = () => {
  return (
    <section className="w-full px-4 py-16 text-slate-800 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#005c8f]">Prizes</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            What&apos;s on the line
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Over Rs. 80k in cash, trophies, and a few surprises for the teams that stand out.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {prizes.map((prize) => (
            <PrizeCard key={prize.title} prize={prize} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrizeSection
