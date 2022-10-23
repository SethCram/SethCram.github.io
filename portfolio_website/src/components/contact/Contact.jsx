import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import emailjs from 'emailjs-com';
import {BiMessageCheck} from 'react-icons/bi'

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
  const form = useRef();

  const [isAlertVisible, setIsAlertVisible] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wexjbdc', 'template_va1z0iq', form.current, '1DNRiNOEGKnoarC5z')
      .then((result) => {
        e.target.reset(); /* only reset form if sent successfully */
        console.log(result.text);
        /* Set msg alert to visible for a time */
        setIsAlertVisible(true);
      }, (error) => {
        console.log(error.text);
      });
  };

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
          {/* Alert included in the contact options container */ }
          <div
            className={`contact__alert-container alert-success ${isAlertVisible ? 'alert-shown' : 'alert-hidden'}`}
            onTransitionEnd={() => setIsAlertVisible(false)}
          >
            <BiMessageCheck className='contact__alert-icon' />
            <h5>Message Sent</h5>
          </div>
        </div>
        {/* END OF CONTACT OPTIONS */ }
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact