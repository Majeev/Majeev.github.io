import css from './About.module.css'
import me from '../../assets/me.jpg'

const About = () => {
    return (
        <section id='about' className='container_large'>

            <div className={css.about_wrapper}>
                <div className={css.about_image}>
                    <img src={me} alt='This is me on a skijet'/>
                </div>
                <div className={css.about_text}>
                    <h2>Get to know</h2>
                    <h3>About me</h3>
                    <p>
                        My name is Jakub Majewski and I am 21 years old Computer Science student at University of Łódź.
                        Since childhood I've been interested in technology and finding out how things work.
                        My programming journey started with Python and bash scripting, but then I've felt in love with
                        Frontend development.
                    </p>
                    <p>
                        I am type of person who demonstrates an insatiable desire for knowledge.
                        The more I know, the more I want to learn.
                        Right now, I am focusing on my Frontend skills.
                        In the near future I would like to develop towards Blockchain developer.
                    </p>
                    <p>
                        Coding makes me feel very absorbed. Working on my projects is a fun for me, but the most
                        important
                        every project is a new piece of knowledge in my tech equipment.
                    </p>
                    <p>
                        Besides programming, I love every kind of physical activity.
                        I am also keen on astrophysics, economy and motorisation.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About