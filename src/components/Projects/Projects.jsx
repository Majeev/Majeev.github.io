import css from "./Projects.module.css"
import portfolio from "../../assets/portfolio.jpg"
import todo from "../../assets/todolist.jpg"
import pokedex from "../../assets/pokedex.jpg"
import {SiCss3, SiHtml5, SiJavascript} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {AiFillApi, AiFillGithub} from "react-icons/ai";


const Projects = () => {
    return (
        <section id="projects" className="flex__center column">
            <header className={css.projects__header}>
                <h2>Some of my hobbyist projects</h2>
                <h3>Experience</h3>
            </header>
            <div className={css.projects__container}>
                <div className={css.projects__card}>
                    <a href="#"><h4>Portfolio</h4></a>
                    <img src={portfolio} alt="Portfolio"/>
                    <div className={css.projects__technologies}>
                        <SiHtml5/>
                        <SiCss3/>
                        <SiJavascript/>
                        <FaReact/>
                        <a href= "https://github.com/Majeev/Majeev.github.io" target="_blank"><AiFillGithub /></a>
                    </div>
                </div>
                <div className={css.projects__card}>
                    <a href="https://majeev.github.io/React-To-Do-List/" target="_blank"><h4>Todo list</h4></a>
                    <img src={todo} alt="todo list"/>
                    <div className={css.projects__technologies}>
                        <SiHtml5/>
                        <SiCss3/>
                        <SiJavascript/>
                        <FaReact/>
                        <a href= "https://github.com/Majeev/React-To-Do-List" target="_blank"><AiFillGithub /></a>
                    </div>
                </div>
                <div className={css.projects__card}>
                    <a href="https://majeev.github.io/Pokedex/" target="_blank"><h4>Pokédex</h4></a>
                    <img src={pokedex} alt="pokedex"/>
                    <div className={css.projects__technologies}>
                        <SiHtml5/>
                        <SiCss3/>
                        <SiJavascript/>
                        <FaReact/>
                        <AiFillApi/>
                        <a href= "https://github.com/Majeev/Pokedex" target="_blank"><AiFillGithub /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects