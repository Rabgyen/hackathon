
// Judging rubric — one integrated scorecard. Criteria are ordered by weight so
// the point value itself communicates priority; no criterion is listed twice.
const criteria = [
  {
    title: 'Innovation & Creativity',
    description: 'How original and unexpected the idea is.',
    marks: 20,
  },
  {
    title: 'Technical Execution',
    description: 'How well the solution is built, structured, and implemented.',
    marks: 20,
  },
  {
    title: 'Problem Identification & Relevance',
    description: 'How clearly the problem is framed and how real the need is.',
    marks: 15,
  },
  {
    title: 'Feasibility & Practicality',
    description: 'How realistic and achievable the proposed solution is.',
    marks: 15,
  },
  {
    title: 'UI / UX',
    description: 'How polished, usable, and visually considered the experience is.',
    marks: 10,
  },
  {
    title: 'Presentation & Communication',
    description: 'How clearly the team pitches the idea and its value.',
    marks: 10,
  },
  {
    title: 'Impact & Usefulness',
    description: 'How much the project actually helps the people it targets.',
    marks: 10,
  },
]

const TOP_WEIGHT = Math.max(...criteria.map((c) => c.marks))

// Weight → colour intensity within the brand family (heavier = deeper blue).
const tint = (marks) => {
  if (marks >= 20) return '#005c8f'
  if (marks >= 15) return '#2a83ab'
  return '#5aa6c6'
}

const RubricRow = ({ item }) => {
  const color = tint(item.marks)
  return (
    <li className='group grid grid-cols-[3.25rem_1fr] gap-4 border-t border-[#005c8f]/10 py-5 first:border-t-0 sm:grid-cols-[4rem_1fr] sm:gap-6'>
      <div className='flex flex-col items-center pt-0.5'>
        <span className='text-2xl font-semibold leading-none tabular-nums text-[#005c8f] sm:text-3xl' style={{ color }}>
          {item.marks}
        </span>
        <span className='mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400'>pts</span>
      </div>

      <div className='min-w-0'>
        <div className='flex items-baseline justify-between gap-3'>
          <h3 className='text-sm font-semibold text-slate-900 sm:text-base'>{item.title}</h3>
        </div>
        <p className='mt-1 text-xs leading-6 text-slate-600 sm:text-sm'>{item.description}</p>

        {/* Weight bar, relative to the heaviest criterion — a visual sense of priority. */}
        <div className='mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#005c8f]/8'>
          <div
            className='h-full origin-left rounded-full transition-[width] duration-500 group-hover:brightness-105'
            style={{ width: `${(item.marks / TOP_WEIGHT) * 100}%`, backgroundColor: color }}
          />
        </div>
      </div>
    </li>
  )
}

const EvaluationSection = () => {
  return (
    <section className='w-full px-4 py-16 text-slate-800 sm:px-6 sm:py-20 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-12 max-w-2xl'>
          <p className='text-[10px] font-medium uppercase tracking-[0.45em] text-[#005c8f]'>How Judging Works</p>
          <h2 className='mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl'>
            The judging scorecard
          </h2>
          <p className='mt-4 text-sm leading-7 text-slate-600 sm:text-base'>
            Every project is scored out of 100 against the same seven criteria. The point value beside each one is its weight — the criteria that matter most carry the most points.
          </p>
        </div>

        <div className='grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16'>
          {/* How scoring works — genuine context, not a repeat of the rubric */}
          <aside className='lg:sticky lg:top-24 lg:self-start'>
            <div className='rounded-3xl border border-[#005c8f]/10 bg-white p-7 shadow-[0_16px_40px_rgba(0,92,143,0.08)]'>
              <div className='flex items-end gap-3'>
                <span className='text-6xl font-semibold leading-none tabular-nums text-[#005c8f]'>100</span>
                <span className='pb-1.5 text-sm font-medium text-slate-500'>points<br />in total</span>
              </div>

              <dl className='mt-8 space-y-5'>
                <div className='flex items-start justify-between gap-4 border-t border-[#005c8f]/10 pt-4'>
                  <dt className='text-sm text-slate-600'>Criteria</dt>
                  <dd className='text-sm font-semibold text-slate-900'>7 weighted</dd>
                </div>
                <div className='flex items-start justify-between gap-4 border-t border-[#005c8f]/10 pt-4'>
                  <dt className='text-sm text-slate-600'>Judged</dt>
                  <dd className='text-sm font-semibold text-slate-900'>Live on Day 2</dd>
                </div>
                <div className='flex items-start justify-between gap-4 border-t border-[#005c8f]/10 pt-4'>
                  <dt className='text-sm text-slate-600'>Final score</dt>
                  <dd className='text-sm font-semibold text-slate-900'>Panel average</dd>
                </div>
              </dl>

              <p className='mt-7 text-xs leading-6 text-slate-500'>
                Each judge scores every team independently across all seven criteria. We average the panel&apos;s totals to rank the projects — so a balanced build beats one that&apos;s strong in only a single area.
              </p>
            </div>
          </aside>

          {/* The rubric itself */}
          <div>
            <ul>
              {criteria.map((item) => (
                <RubricRow key={item.title} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EvaluationSection
