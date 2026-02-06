import React from 'react'

const Footer = ({ darkMode }) => {
  return (
    <footer
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
      }}
      className='py-8 border-t border-orange-500'
    >
      <div className='w-full max-w-full px-6 md:px-8 text-center'>
        <p
          style={{
            color: darkMode ? '#9ca3af' : '#4b5563'
          }}
          className='text-sm md:text-base'
        >
          © 2026 Dilushgaran Sathasivam | Designed & Developed by Me
        </p>
      </div>
    </footer>
  )
}

export default Footer
