
import { TfiLocationPin } from "react-icons/tfi";
import { FiNavigation } from "react-icons/fi";

const mapQuery = 'Uniglobe College, New Baneshwor, Kathmandu, Nepal'
const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`
const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`

const addressLines = [
  'Uniglobe College',
  'New Baneshwor, Kalimarga-34',
  'P.O. Box No. 7953',
  'Kathmandu 44600, Nepal',
]

const LocationSection = () => {
  return (
    <section id='location' className='relative w-full scroll-mt-24 px-4 py-12 text-slate-800 sm:px-6 sm:py-16 lg:px-8'>
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute right-1/2 top-0 h-56 w-56 translate-x-1/2 rounded-full bg-[#005c8f]/8 blur-2xl' />
        <div className='absolute left-0 bottom-10 h-64 w-64 rounded-full bg-[#7fbfdf]/10 blur-2xl' />
      </div>

      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-xs font-medium uppercase tracking-[0.45em] text-[#005c8f]'>Find Us</p>
          <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl'>Event Location</h2>
          <p className='mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base'>
            The Hackathon and Code Fest will be hosted at Uniglobe College, New Baneshwor. Use the map below to find your way to the venue.
          </p>
        </div>

        <div className='mt-10 grid gap-6 lg:grid-cols-5'>
          {/* Address / details card */}
          <div className='relative overflow-hidden rounded-3xl border border-[#005c8f]/10 bg-white p-6 shadow-[0_10px_24px_rgba(0,92,143,0.06)] sm:p-8 lg:col-span-2'>
            <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(0,92,143,0.05),transparent_40%)] opacity-70' />
            <div className='relative flex h-full flex-col'>
              <div className='mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#005c8f]/10 bg-[#005c8f]/8 text-xl font-semibold text-[#005c8f]'>
                <TfiLocationPin />
              </div>
              <p className='text-xs font-medium uppercase tracking-[0.35em] text-[#005c8f]'>Venue Address</p>
              <address className='mt-3 not-italic'>
                {addressLines.map((line, index) => (
                  <p
                    key={line}
                    className={index === 0 ? 'text-lg font-semibold text-slate-900' : 'text-sm leading-7 text-slate-600'}
                  >
                    {line}
                  </p>
                ))}
              </address>

              <a
                href={mapDirectionsUrl}
                target='_blank'
                rel='noreferrer'
                className='mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-[#005c8f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#004d78]'
              >
                <FiNavigation className='text-base' />
                Get Directions
              </a>

              <p className='mt-6 text-sm leading-6 text-slate-600'>
                Centrally located in New Baneshwor with easy access by public transport, taxi and ride-sharing services.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className='relative overflow-hidden rounded-3xl border border-[#005c8f]/10 bg-white shadow-[0_10px_24px_rgba(0,92,143,0.06)] lg:col-span-3'>
            <iframe
              title='Map showing Uniglobe College, New Baneshwor, Kathmandu'
              src={mapEmbedSrc}
              className='h-[320px] w-full border-0 sm:h-[400px] lg:h-full'
              loading='lazy'
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
