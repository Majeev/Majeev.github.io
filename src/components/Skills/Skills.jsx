import css from './Skills.module.css';
import { skills } from './Skills.data';

const Skills = () => {
    return (
        <section
            id='skills'
            className='flex flex-col justify-center items-center'
            data-aos='fade-up'>
            <header className='text-center mb-14 mt-10'>
                <h2>Expertise</h2>
                <h3 className='hidden sm:inline'>Technologies and tools</h3>
                <h3 className='inline sm:hidden'>Technologies</h3>
            </header>
            <div className='flex flex-wrap justify-center w-full md:w-3/4'>
                {skills.map((item) => {
                    return (
                        <div
                            className={`${css.skills__item} flex flex-col-reverse w-1/4 max-w-xs m-10 text-center `}
                            key={item.name}>
                            <img
                                className='max-h-56 object-fill p-6 sm:p-8'
                                src={item.image}
                                alt={item.name}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default Skills;
