import React from 'react';
import css from './Project.module.css';

function Project({ project }) {
    return (
        <div className={css.project__container}>
            <div className={css.project__content}>
                <img src={project.img} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className={css.project__technologies}>
                    {project.stack.map((icon) => icon)}
                </div>
                <div className={css.project__links}>
                    {project.live && (
                        <a href={project.live} target='_blank'>
                            <button>Live</button>
                        </a>
                    )}
                    <a href={project.github} target='_blank'>
                        <button>Code</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
