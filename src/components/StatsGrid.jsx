import React from 'react'

const items = [
  { id: 1, value: '25', label: 'hackathons', bg: 'https://images.unsplash.com/photo-1520975911459-7f3a3b3f0d53?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f5a2f3b2f6b6b3e' },
  { id: 2, value: '500k+', label: 'total active users', bg: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b6b8a5f9d2df3b2' },
  { id: 3, value: '$500k', label: 'given away', bg: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c2f7f5b1d6a4f9a' },
  { id: 4, value: '', label: '', bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b7eebc5dd9a2b1c' },
  { id: 5, value: '', label: '', bg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0f4a3d6e4b5c1d2e' }
]

const StatsGrid = () => {
  return (
    <div className="w-full px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-stretch">

          {/* Left column: 25 card on top, small image below */}
          <div className="flex flex-col gap-6 md:w-1/4">
            <div className="rounded-2xl bg-[#0b1220] p-6 flex flex-col justify-center items-start flex-1">
              <span className="text-yellow-300 text-3xl sm:text-4xl md:text-5xl font-bold">15</span>
              <span className="text-white/75 mt-2 uppercase tracking-wider text-sm sm:text-base">Colleges</span>
            </div>

            <div className="rounded-2xl overflow-hidden h-36 md:h-40">
              <img src={items[3].bg} alt="workspace" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

          {/* Middle column: tall image + small card */}
          <div className="md:w-1/2 grid grid-cols-1 gap-6">
            <div className="rounded-2xl overflow-hidden flex-1">
              <img src={items[1].bg} alt="person" className="w-full h-full object-cover rounded-2xl" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden h-40 md:h-40">
                <img src={items[2].bg} alt="small" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="rounded-2xl bg-[#07121a] p-6 flex items-center justify-center h-40 md:h-40">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-indigo-300">100k+</div>
                  <div className="text-sm text-white/80 mt-1">Cash Price</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: large image */}
          <div className="flex flex-col gap-6 md:w-1/4">
            <div className="rounded-2xl overflow-hidden flex-1">
              <img src={items[4].bg} alt="office" className="w-full h-full object-cover rounded-2xl" />
            </div>

            <div className="md:block rounded-2xl bg-[#07121a] p-6 flex items-center justify-center h-28">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-teal-300">4</div>
                <div className="text-sm text-white/80 mt-1">Judges</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StatsGrid
