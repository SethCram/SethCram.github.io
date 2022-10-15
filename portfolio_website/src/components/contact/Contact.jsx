import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

function ContactOption(props) {
  return (
    <article className='contact__option'>
      {props.icon}
      <h4>{props.contact_type}</h4>
      <h5>{props.contact_point}</h5>
      <a href={props.link} target="_blank" rel="noreferrer">Send a message</a>
    </article>
  )
}

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <ContactOption
          icon=<MdOutlineEmail className='contact__option-icon' />
            contact_type='Email'
            contact_point='sethcram@gmail.com'
            link='mailto:sethcram@gmail.com'
          />
          <ContactOption
          icon=<BsLinkedin className='contact__option-icon' />
            contact_type='LinkedIn'
            contact_point='Seth Cram'
            link='https://www.linkedin.com/in/seth-cram/'
          />
        </div>
        {/* END OF CONTACT OPTIONS */ }
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact