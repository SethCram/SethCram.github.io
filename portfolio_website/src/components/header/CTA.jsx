import React from 'react'
import Resume from '../../assets/Seth Cram Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} className='btn' download='SethCram_Resume' target='_blank' rel="noreferrer">Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA