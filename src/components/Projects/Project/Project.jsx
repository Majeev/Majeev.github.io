import React from 'react';
import css from './Project.module.css';

function Project({ project, icon }) {
    return (
        <a href={project.live}>
            <div className={css.projects__card}>
                <h4>{project.title}</h4>
                <img src={project.img} alt={project.title} />
                <div className={css.projects__technologies}>
                    {project.stack.map((icon) => icon)}
                    <a href={project.github} target='_blank'>
                        {icon}
                    </a>
                </div>
            </div>{' '}
        </a>
    );
}

export default Project;