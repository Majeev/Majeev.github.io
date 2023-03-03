import css from './Projects.module.css';
import { Project } from '.././index';
import { projects } from './Projects.data'

const Projects = () => {

    return (
        <section
            id='projects'
            className='flex__center column'
            data-aos='fade-up'>
            <header className={css.projects__header}>
                <h2>Some of my hobbyist projects</h2>
                <h3>Experience</h3>
            </header>
            <div>
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
