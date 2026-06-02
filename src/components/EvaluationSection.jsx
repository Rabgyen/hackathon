

const criteria = [
    {
    title: 'Innovation and Creativity',
    description: 'How original, creative, and unique the idea is.',
    marks: 20,
  },
  {
    title: 'Technical execution',
    description: 'How well the solution is built, structured, and implemented.',
    marks: 20,
  },
  {
    title: 'Problem Identification and Relevance',
    description: 'How clearly the problem is identified and how relevant it is to real-world needs.',
    marks: 15,
  },
  {
    title: 'Feasibility and Practicality',
    description: 'How realistic, achievable, and practical the proposed solution is.',
    marks: 15,
  },
  {
    title: 'UI / UX',
    description: 'How polished, usable, and visually appealing the experience is.',
    marks: 10,
  },
  {
    title: 'Presentation amd Communication',
    description: 'How clearly the team presents the idea and communicates value.',
    marks: 10,
  },
  {
    title: 'Impact & usefulness',
    description: 'How practical the project is and the problem it solves.',
    marks: 10,
  },
]

const distribution = [
  { label: 'Innovation and Creativity', marks: 20, color: 'from-[#8AE6FF] to-[#2E8BFF]' },
  { label: 'Technical execution', marks: 20, color: 'from-[#FFE08A] to-[#FF7A18]' },
  { label: 'Problem Identification and Relevance', marks: 15, color: 'from-[#A7F3D0] to-[#34D399]' },
  { label: 'Feasibility and Practicality', marks: 15, color: 'from-[#FDE68A] to-[#FCA5A5]' },
  { label: 'UI / UX', marks: 10, color: 'from-[#F9A8D4] to-[#C084FC]' },
  { label: 'Presentation and Communication', marks: 10, color: 'from-[#C4B5FD] to-[#60A5FA]' },
  { label: 'Impact & usefulness', marks: 10, color: 'from-[#A7F3D0] to-[#34D399]' },
]

const CriteriaRow = ({ item }) => {
  return (
    <li className="flex items-start gap-6 rounded-2xl border border-[#005c8f]/10 bg-white p-6 shadow-[0_12px_30px_rgba(0,92,143,0.06)] backdrop-blur-md transition-transform duration-200 hover:-translate-y-1">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#005c8f]/15 bg-[#005c8f]/6 text-lg font-bold text-[#005c8f]">
        {item.marks}
      </div>

      <div className="min-w-0">
        <h3 className="text-base font-semibold text-slate-900 leading-tight">{item.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{item.description}</p>
      </div>
    </li>
  )
}

const DistributionRow = ({ item }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-900">{item.label}</span>
        <span className="text-sm font-semibold text-slate-500">{item.marks}%</span>
      </div>

      <div className="relative h-2 w-full rounded-full bg-slate-100 overflow-hidden">
        <div className={`absolute left-0 top-0 h-full rounded-full bg-linear-to-r ${item.color} transition-all`} style={{ width: `${item.marks}%` }} />
      </div>
    </div>
  )
}

const EvaluationSection = () => {
  return (
    <section className="w-full px-4 py-16 text-slate-800 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#005c8f]">Judging Process</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Evaluation Criteria &amp; Mark Distribution
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[10px] text-slate-600 sm:text-xs">
            A clear judging rubric to keep scoring transparent, balanced, and easy to follow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="rounded-3xl border border-[#005c8f]/10 bg-white p-8 shadow-[0_16px_40px_rgba(0,92,143,0.08)] backdrop-blur-md">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Evaluation Criteria</h3>
              <div className="text-sm font-semibold text-slate-500">100</div>
            </div>

            <ul className="space-y-4">
              {criteria.map((item) => (
                <CriteriaRow key={item.title} item={item} />
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[#005c8f]/10 bg-white p-8 shadow-[0_16px_40px_rgba(0,92,143,0.08)] backdrop-blur-md">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Mark Distribution</h3>
              <div className="text-sm font-semibold text-slate-500">Weighting</div>
            </div>

            <div className="space-y-4">
              {distribution.map((item) => (
                <DistributionRow key={item.label} item={item} />
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#005c8f]/10 bg-[#f7fbfd] p-4 text-slate-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#005c8f]">Total</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">100 Marks</p>
                </div>
                <div className="text-right text-sm text-slate-500">
                  Balanced across idea, build quality, and presentation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EvaluationSection
