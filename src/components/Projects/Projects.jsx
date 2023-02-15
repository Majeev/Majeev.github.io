import css from './Projects.module.css';
import { Project } from '.././index';
import { todo, pokedex, portfolio, football } from '../../assets/assets';
import { SiCss3, SiHtml5, SiJavascript, FaReact, AiFillGithub, FaBootstrap } from '../icons';

const Projects = () => {
    const gitIcon = <AiFillGithub />;

    const projects = [
        {
            title: 'Portfolio',
            img: portfolio,
            stack: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaReact />],
            live: '#',
            github: 'https://github.com/Majeev/Majeev.github.io',
        },
        {
            title: 'Todo List',
            img: todo,
            stack: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaReact />],
            live: 'https://majeev.github.io/React-To-Do-List/',
            github: 'https://github.com/Majeev/React-To-Do-List',
        },
        {
            title: 'Pokedex',
            img: pokedex,
            stack: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaReact />],
            live: 'https://majeev.github.io/Pokedex/',
            github: 'https://github.com/Majeev/Pokedex',
        },
        {
            title: 'Football App',
            img: football,
            stack: [<SiHtml5 />, <SiCss3 />, <FaBootstrap />, <SiJavascript />, <FaReact />],
            live: 'https://majeev.github.io/Pokedex/',
            github: 'https://github.com/Majeev/Pokedex',
        },
    
    ];

    return (
        <section
            id='projects'
            className='flex__center column'
            data-aos='fade-up'>
            <header className={css.projects__header}>
                <h2>Some of my hobbyist projects</h2>
                <h3>Experience</h3>
            </header>
            <div className={css.projects__container}>
                {projects.map((project) => (
                    <Project project={project} icon={gitIcon} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
