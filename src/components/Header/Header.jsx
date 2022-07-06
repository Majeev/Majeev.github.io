import css from './Header.module.css'
import WelcomePhoto from '../../assets/programming.jpg'
import hero from '../../assets/computers.png'

const Header = () => {
    return (
        <header className='flex__center'>
            <div className={`${css.welcome} flex__center`}>
                <div className={css.welcome__gradient}>
                    <img src={hero} className={css.welcome__hero} alt='hero'/>
                    <div className={css.welcome__description}>
                        <h1>Hi! I am Jakub,</h1>
                        <p> Frontend Developer you are looking for!</p>
                        <a href='#contact'><button className={css.welcome__contact}>Contact Me!</button></a>
                    </div>
                </div>
                <div className={css.welcome__traits}>
                    <span className={css.traits__passion}> Passion </span>
                    <span className={css.traits__desire}> Desire to learn </span>
                    <span className={css.traits__patience}> Patience </span>
                    <span className={css.traits__creativity}> Creativity </span>
                    <span className={css.traits__discipline}> Discipline </span>
                </div>

                <img src={WelcomePhoto} alt='programming' className={css.welcome__photo}/>
            </div>

        </header>
    )
}

export default Header