import { Project } from '.././index';
import { projects } from './Projects.data';

const Projects = () => {
    return (
        <section
            id='projects'
            className='flex flex-col justify-center align-center'
            data-aos='fade-up'>
            <header className='text-center'>
                <h2>Some of my hobbyist projects</h2>
                <h3>Experience</h3>
            </header>
            <div>
                {projects.map((project, index) => (
                    <Project project={project} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
