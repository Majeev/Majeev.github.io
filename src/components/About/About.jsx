import css from './About.module.css';
import { me } from '../../assets/assets';

const About = () => {
    return (
        <section id='about' className={`${css.about} flex justify-center`}>
            <img
                className='m-10'
                src={me}
                data-aos='fade-right'
                alt='This is me'
            />
            <div
                className=' m-10 px-8 py-4 w-4/5 lg:px-4 lg:w-3/5'
                data-aos='fade-left'>
                <h2>Get to know</h2>
                <h3>About me</h3>
                <p>
                    Hi! My name is Jakub Majewski, I am 22 years old self-taught
                    <strong> Javascript Developer</strong> and future student of
                    <strong> Łódź University of Technology</strong>. Since
                    childhood I've been interested in technology and finding out
                    how things work. My programming journey started with Python
                    and bash scripting, but then I've felt in love with
                    <strong> Frontend development</strong>.
                </p>
                <p>
                    I am type of person who demonstrates an insatiable
                    <strong> desire for knowledge</strong>. The more I know, the
                    more I want to learn. Right now, I am focusing on my
                    Frontend skills. In the near future I would like to develop
                    towards <strong> Fullstack developer</strong> with
                    <strong> Blockchain</strong>.
                </p>
                <p>
                    Coding makes me feel very absorbed. Working on my projects
                    is a fun for me, but the most important every project is a
                    new piece of knowledge in my tech equipment.
                </p>
                <p>
                    Besides programming, I love every kind of physical activity.
                    I am also keen on astrophysics, economy and motorisation.
                </p>
            </div>
        </section>
    );
};

export default About;
