import React from 'react'

const images = [
  // large left image (IT / coding related)
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80',
  // top right
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  // bottom right
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
]

const MosaicGallery = () => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 md:items-stretch">
          <div className="md:col-span-2 rounded-2xl overflow-hidden bg-white/5">
            <img
              src={images[0]}
              alt="Event crowd"
              loading="lazy"
              className="w-full h-64 object-cover sm:h-80 md:h-100"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden bg-white/5">
              <img
                src={images[1]}
                alt="Workspace"
                loading="lazy"
                className="w-full h-32 object-cover sm:h-40 md:h-50"
              />
            </div>

            <div className="rounded-2xl overflow-hidden bg-white/5">
              <img
                src={images[2]}
                alt="Person on phone"
                loading="lazy"
                className="w-full h-32 object-cover sm:h-40 md:h-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MosaicGallery
