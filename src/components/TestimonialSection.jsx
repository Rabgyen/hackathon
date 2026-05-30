

const TestimonialSection = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 bg-[#0f0c13]">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-2xl px-6 py-12 text-center overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 h-40 w-40 rounded-full bg-[#5227FF]/20 blur-3xl" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 h-40 w-40 rounded-full bg-[#FF9FFC]/18 blur-3xl" />

          <blockquote className="mx-auto max-w-3xl text-white">
            <p className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">“It’s fun. It’s simple, and overall, it all about learning new things.”</p>
            <footer className="mt-4 text-sm text-white/60">— Developer</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
