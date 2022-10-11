import React from 'react'
import Resume from '../../assets/Software Resume.docx.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} className='btn' target='_blank'>Download Resume</a>
      <a href="" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA