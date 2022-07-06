import css from './Contact.module.css'
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();

        emailjs.sendForm('service_8t4cy3g', 'template_l8i3asf', form.current, 'ySb27JrFCveegI3Ge')
               .then((result) => {
                   console.log(result.text);
               }, (error) => {
                   console.log(error.text);
               });
    };

    return (
        <section id='contact' className='flex__center column'>
            <header className={css.contact__header}>
                <h2>Let's talk!</h2>
                <h3>Contact me</h3>
            </header>
            <p className={css.pe}>Leave a message here!</p>
            <form ref={form} onSubmit={sendEmail} className={css.contact__form}>
                <input required type='text' name='name' placeholder='Your name'/>
                <input required type='email' name='email' placeholder='Your e-mail'/>
                <textarea required name='message' placeholder='Message'/>
                <button className={css.message__submit}>Send Message</button>
            </form>
            <div className={css.contact__alternatives}>
                <p className={css.pe}>Or find me on:</p>
                <a href='https://www.linkedin.com/in/jakub-majewski-528553203/' target='_blank'><AiFillLinkedin/></a>
                <a href='https://github.com/Majeev' target='_blank'><AiFillGithub/></a>
            </div>
        </section>
    )
}

export default Contact