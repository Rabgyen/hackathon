
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

const contactItems = [
  {
    icon: <MdOutlineEmail />,
    label: 'Email',
    value: 'mail@uniglobe.edu.np | annukhanna@uniglobe.edu.np',
    hint: 'Use the event inbox for registrations and general questions.',
  },
  {
    icon: <MdOutlinePhone />,
    label: 'Phone',
    value: '977-1-4115690 | 4115569 | 9851311179',
    hint: 'Contact us direclty using these numbers.',
  },
  {
    icon: <TfiLocationPin />,
    label: 'Location',
    value: 'Uniglobe College',
    hint: 'New Baneshwor, Kathmandu',
  },
]

const ContactSection = () => {
  return (
    <section id='contact' className='relative w-full scroll-mt-24 px-4 py-12 text-slate-800 sm:px-6 sm:py-16 lg:px-8'>
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#005c8f]/8 blur-2xl' />
        <div className='absolute right-0 top-10 h-64 w-64 rounded-full bg-[#7fbfdf]/10 blur-2xl' />
        <div className='absolute bottom-0 left-10 h-44 w-44 rounded-full bg-[#005c8f]/6 blur-2xl' />
      </div>

      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-xs font-medium uppercase tracking-[0.45em] text-[#005c8f]'>Need Help</p>
          <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl'>Have Confusion?</h2>
          <p className='mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base'>
            If anything is unclear, reach out using the contact details below and the organizing team will guide you.
          </p>
        </div>

        <div className='mt-10 grid gap-5 md:grid-cols-3'>
          {contactItems.map((item) => (
            <div
              key={item.label}
                className='group relative overflow-hidden rounded-3xl border border-[#005c8f]/10 bg-white p-5 shadow-[0_10px_24px_rgba(0,92,143,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#f4fbff]'
            >
              <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(0,92,143,0.05),transparent_40%)] opacity-70' />
              <div className='relative'>
                <div className='mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#005c8f]/10 bg-[#005c8f]/8 text-xl font-semibold text-[#005c8f]'>
                  {item.icon}
                </div>
                <p className='text-xs font-medium uppercase tracking-[0.35em] text-[#005c8f]'>{item.label}</p>
                <p className='mt-2 wrap-break-word text-lg font-semibold text-slate-900'>{item.value}</p>
                <p className='mt-3 text-sm leading-6 text-slate-600'>{item.hint}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-8 px-5 py-4 text-center text-sm text-slate-600 sm:px-6'>
          Clear your confusion by contacting us from the above contact information.
        </div>
      </div>
    </section>
  )
}

export default ContactSection