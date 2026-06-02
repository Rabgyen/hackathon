
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
  <div className="shrink-0 w-45 sm:w-55 md:w-60 lg:w-65 rounded-2xl border border-[#005c8f]/8 bg-white/70 px-4 py-3 shadow-[0_10px_30px_rgba(0,92,143,0.06)] backdrop-blur-sm">
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
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#005c8f]">Partners & Support</p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">Sponsors</h2>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-[#005c8f]/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_100%)] py-6 shadow-[0_16px_40px_rgba(0,92,143,0.06)] sm:py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-linear-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-linear-to-l from-white to-transparent z-10" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-[#005c8f]/8 blur-3xl" />

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
