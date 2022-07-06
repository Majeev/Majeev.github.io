import css from './Contact.module.css'
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

const Contact = () => {
    return (
        <section id='contact' className='flex__center column'>
            <header className={css.contact__header}>
                <h2>Let's talk!</h2>
                <h3>Contact me</h3>
            </header>
            <p className={css.pe}>Leave a message here!</p>
            <form className={css.contact__form}>
                <input type='text' placeholder='Your name'/>
                <input type='email' placeholder='Your e-mail'/>
                <textarea placeholder='Message'/>
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