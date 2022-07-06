import css from './Skills.module.css'


const Skills = () => {
    const gear = [
        {
            name: 'HTML',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        },
        {
            name: 'CSS',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        },
        {
            name: 'Javascript',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            name: 'React',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        },
        {
            name: 'Typescript',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
            name: 'Git',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
        },
        {
            name: 'Github',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
        },
        {
            name: 'Webstorm',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original-wordmark.svg"
        },
        {
            name: 'Photoshop',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
        },
        {
            name: 'AWS',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        },


    ]


    return (
        <section id='skills' className='flex__center column'>
            <header className={css.skills__header}>
                <h2>Expertise</h2>
                <h3>Technologies and tools</h3>
            </header>
            <div className={css.skills__container}>
                {gear.map((item) => {
                    return (<div className={css.skills__item} key={item.name}>
                        <img src={item.image} alt='programming languages section'/></div>)
                })}
            </div>
        </section>
    )
}
export default Skills
