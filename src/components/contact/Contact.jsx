import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import emailjs from 'emailjs-com'
import { useRef } from 'react';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8b8hwb2', 'template_expodnl', form.current, '1kKKlmNGClOC2J4d9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

  return (
    <section id="contact">
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className="container contact__container">
       <div className="contact__options">
         <article className="contact__option">
         <AiOutlineMail className="contact__option-icon"/>
           <h4>Email</h4>
           <h5>riteshgupta3249@gmail.com</h5>
           <a href="mailto:riteshgupta3249@gmail.com">Send a message</a>
         </article>
         <article className="contact__option">
         
         <RiMessengerLine className="contact__option-icon"/>
           <h4>Messenger</h4>
           <h5>Ritesh gupta</h5>
           <a href="https://m.me/profile.php?id=100009222132633">Send a message</a>
         </article>
         <article className="contact__option">
         <ImWhatsapp className="contact__option-icon"/>
           <h4>Whatsapp</h4>
           <h5>+91 9899119405</h5>
           <a href="https://api.whatsapp.com/send?phone=9899119405">Send a message</a>
         </article>
       </div>
     <form ref={form} onSubmit={sendEmail}>
       <input type="text" name="name" placeholder="Your Full Name" required />
       <input type="email" name="email" placeholder="Your Email" required />
       <textarea name="message" rows="7" placeholder="Your Message"></textarea>
       <button type="submit" className="btn btn-primary">Send message</button>
     </form>
     </div>
    </section>
  )
}

export default Contact
