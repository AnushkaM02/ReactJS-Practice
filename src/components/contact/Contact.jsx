import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //NOT WORKING
    emailjs.sendForm('service_1rbwsai', 'template_45111uz', form.current, '2zvoPmDVpEJ6nUcsc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>anushka.nm05@gmail.com</h5>
            <a href="mailto:anushka.nm05@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>anushkamulik</h5>
            <a href="https://www.linkedin.com/in/anushkamulik/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Message</h4>
            <h5>1234567890</h5>
            <a href="google.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact