import css from './Contact.module.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [isSent, setIsSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();
        setIsSent(true);

        emailjs
            .sendForm(
                'service_8t4cy3g',
                'template_l8i3asf',
                form.current,
                'ySb27JrFCveegI3Ge'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section
            id='contact'
            className={`flex flex-col justify-center items-center mb-0`}>
            <header className='text-center m-10'>
                <h2>Let's talk!</h2>
                <h3>Contact me</h3>
            </header>
            <p>Leave a message here!</p>
            <form
                ref={form}
                onSubmit={sendEmail}
                className='flex flex-col items-center w-full p-8 lg:w-1/2'>
                <input
                    required
                    type='text'
                    name='name'
                    placeholder='Your name'
                />
                <input
                    required
                    type='email'
                    name='email'
                    placeholder='Your e-mail'
                />
                <textarea required name='message' placeholder='Message' />
                <button
                    className={`${css.message__submit} w-full mb-10 p-6 lg:w-4/5`}>
                    {isSent ? 'Message Sent!' : 'Send Message!'}
                </button>
            </form>
            <div className={`${css.contact__alternatives} text-center`}>
                <p>Or find me on:</p>
                <a
                    href='https://www.linkedin.com/in/jakub-majewski-528553203/'
                    target='_blank' rel='noreferrer' aria-label="Linkedin link">
                    <AiFillLinkedin />
                </a>
                <a href='https://github.com/Majeev' target='_blank' rel='noreferrer' aria-label="Github link">
                    <AiFillGithub />
                </a>
            </div>
            <footer>
                <p>Copyright ©2022 by Jakub Majewski. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
