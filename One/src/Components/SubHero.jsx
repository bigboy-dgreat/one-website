import React from 'react'

const SubHero = () => {
  return (
    <section className='bg-[#004b63] text-white py-16 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
            {/* Heading */}
            <div>
                  <h2 className='text-3xl md:text-4xl font-bold leading-snug'>
                        Where Your Nursing Journey<br />Begins &mdash;<span className='text-[#00b0ea]'>Accelerated</span>
                  </h2>
            </div>

            {/* Paragraph */}
            <div className='text-sm md:text-base text-white/90 leading-relaxed'>
            At Omoze Nursing Educator (ONE), we specialize in accelerated nursing education designed to fast-track your journey into healthcare. Our mission is to empower aspiring nurses with skills, support, and confidence needed to achieve their goals and transform lives through compassionate care.
            </div>
      </div>
      
    </section>
  )
}

export default SubHero
