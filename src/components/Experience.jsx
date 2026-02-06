import { motion } from 'framer-motion'

const workData = [
  {
    role: 'Software Engineering Intern',
    company: 'Tech Company',
    duration: '2024 - Present',
    description:
      'Contributing to full-stack features, fixing bugs, and collaborating with senior engineers to deliver production-ready code.',
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    duration: '2022 - 2024',
    description:
      'Designed and built responsive websites and small web apps for clients using React, Tailwind CSS, and modern tooling.',
  },
]

const Experience = ({ darkMode }) => {
  return (
    <section
      id='experience'
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
      }}
      className='py-20 overflow-hidden'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2
            className='text-3xl sm:text-4xl font-bold text-center mb-4'
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Work{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Experience
            </span>
          </h2>
          <p
            className='text-lg max-w-2xl mx-auto text-center mb-12 leading-relaxed'
            style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
          >
            A quick look at my professional journey so far.
          </p>
        </motion.div>

        <div className='relative max-w-3xl mx-auto'>
          <div className='space-y-10'>
            {workData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative pl-10 sm:pl-12 cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                {/* Vertical line */}
                <div className='absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-orange-500/50' />

                {/* Timeline dot */}
                <div className='absolute left-1.5 sm:left-2.5 top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.7)]' />

                {/* Card */}
                <div
                  className='rounded-2xl p-5 sm:p-6 border shadow-lg'
                  style={{
                    background: darkMode
                      ? 'linear-gradient(to right, #1f2937, #020617)'
                      : 'linear-gradient(to right, #ffffff, #f3f4f6)',
                    borderColor: darkMode ? '#374151' : '#e5e7eb',
                  }}
                >
                  <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2'>
                    <h3
                      className='text-lg sm:text-xl font-semibold'
                      style={{ color: darkMode ? 'white' : '#111827' }}
                    >
                      {data.role}
                    </h3>
                    <span className='px-3 py-1 bg-orange-500/15 text-orange-400 rounded-full text-xs sm:text-sm font-medium'>
                      {data.duration}
                    </span>
                  </div>
                  <p
                    className='text-sm sm:text-base mb-2'
                    style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                  >
                    {data.company}
                  </p>
                  <p
                    className='text-sm sm:text-base leading-relaxed'
                    style={{ color: darkMode ? '#e5e7eb' : '#374151' }}
                  >
                    {data.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

