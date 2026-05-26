import React from 'react'
import Img1 from "../assets/img-1.jpeg"
import Img2 from "../assets/img-1.jpeg"
import Img3 from "../assets/img-6.jpeg"
import Img4 from "../assets/img-4.jpeg"
import Img5 from "../assets/img-5.jpeg"

const items = [
  { id: 1, value: '25', label: 'hackathons', bg: Img1 },
  { id: 2, value: '500k+', label: 'total active users', bg: Img2 },
  { id: 3, value: '$500k', label: 'given away', bg: Img3 },
  { id: 4, value: '', label: '', bg: Img4 },
  { id: 5, value: '', label: '', bg: Img5 }
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
            <div className="rounded-2xl overflow-hidden h-72 md:h-96">
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
