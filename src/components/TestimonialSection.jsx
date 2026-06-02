

const TestimonialSection = () => {
  return (
    <section className="w-full px-4 py-12 text-slate-800 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#005c8f]/10 bg-white px-6 py-12 text-center shadow-[0_10px_24px_rgba(0,92,143,0.06)]">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 h-28 w-28 rounded-full bg-[#005c8f]/10 blur-2xl" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 h-28 w-28 rounded-full bg-[#7fbfdf]/10 blur-2xl" />

          <blockquote className="relative mx-auto max-w-3xl text-slate-900">
            <p className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">“It’s fun. It’s simple, and overall, it all about learning new things.”</p>
            <footer className="mt-4 text-sm text-slate-500">— Developer</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
