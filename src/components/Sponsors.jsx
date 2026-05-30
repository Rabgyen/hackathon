
import alpha from '../assets/sponsors/alpha.svg'
import nova from '../assets/sponsors/nova.svg'
import orbit from '../assets/sponsors/orbit.svg'
import pulse from '../assets/sponsors/pulse.svg'
import zenith from '../assets/sponsors/zenith.svg'
import vertex from '../assets/sponsors/vertex.svg'

const sponsors = [
  { name: 'Alpha', src: alpha },
  { name: 'Nova', src: nova },
  { name: 'Orbit', src: orbit },
  { name: 'Pulse', src: pulse },
  { name: 'Zenith', src: zenith },
  { name: 'Vertex', src: vertex },
]

const SponsorCard = ({ sponsor }) => (
  <div className="shrink-0 w-45 sm:w-55 md:w-60 lg:w-65">
    <img
      src={sponsor.src}
      alt={sponsor.name}
      className="h-20 sm:h-24 md:h-28 w-full object-contain select-none"
      draggable="false"
    />
  </div>
)

const Sponsors = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-white/45">Partners & Support</p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Sponsors</h2>
        </div>

        <div className="relative overflow-hidden rounded-4xl bg-transparent py-6 sm:py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-linear-to-r from-[#120f17] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-linear-to-l from-[#120f17] to-transparent z-10" />

          <div className="sponsor-marquee-track flex w-max items-center gap-4 sm:gap-6 px-4">
            <div className="flex items-center gap-4 sm:gap-6">
              {sponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} />
              ))}
            </div>
            <div className="flex items-center gap-4 sm:gap-6" aria-hidden="true">
              {sponsors.map((sponsor) => (
                <SponsorCard key={`${sponsor.name}-clone`} sponsor={sponsor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
