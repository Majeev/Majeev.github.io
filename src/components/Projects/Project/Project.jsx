import React from 'react';
import css from './Project.module.css';

function Project({ project }) {
    return (
        <div
            className={`${css.project__container} w-4/5 p-4 my-10 mx-auto lg:w-3/5 lg:py-8 lg:px-0`}>
            <div
                className={`${css.project__content} grid justify-items-center gap-4`}>
                <img
                    className='m-10 w-4/5 max-w-2xl'
                    src={project.img}
                    alt={project.title}
                />
                <h4 className='font-bold text-center p-8'>{project.title}</h4>
                <p className='p-8'>{project.desc}</p>
                <div className='w-4/5 flex justify-around lg:w-1/2'>
                    {project.stack.map((icon, index) => (
                        <i className='text-4xl' key={index}>
                            {icon}
                        </i>
                    ))}
                </div>
                <div className='mt-20 flex'>
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
