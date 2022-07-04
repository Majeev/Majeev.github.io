import css from './Header.module.css'
import WelcomePhoto from '../../assets/programming.jpg'
import hero from '../../assets/computers.png'

const Header = () => {
    return (
        <header className='flex__center'>
            <div className={`${css.welcome} flex__center`}>
                <div className={css.welcome__gradient}>
                    <img src={hero} className={css.hero} alt='hero'/>
                    <div className={css.welcome_description}>
                        <h1>Hi! I am Jakub,</h1>
                        <p> Frontend Developer you are looking for!</p>
                        <div className={css.contactMe}>Contact Me!</div>
                    </div>
                </div>
                <div className={css.welcome_traits}>
                    <span className={css.passion}> Passion </span>
                    <span className={css.desire}> Desire to learn </span>
                    <span className={css.patience}> Patience </span>
                    <span className={css.creativity}> Creativity </span>
                    <span className={css.discipline}> Discipline </span>
                </div>

                <img src={WelcomePhoto} alt='programming' className={css.welcome_photo}/>
            </div>

        </header>
    )
}

export default Header