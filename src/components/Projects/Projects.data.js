import { todo, pokedex, portfolio, football, WIP } from '../../assets/assets';
import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    FaReact,
    FaBootstrap,
    SiTailwindcss,
    SiMongodb,
    SiTypescript,
    FaNode,
} from '../icons';

export const projects = [
    {
        title: 'Football App',
        img: football,
        desc: `App for Ekstraklasa League using Sportradar API.
        App allows user browse through all ekstraklasa matches from 3 different seasons.
        By selecting specific match, user can see more details about it (timeline, statistics)`,
        stack: [
            <SiHtml5 />,
            <SiCss3 />,
            <FaBootstrap />,
            <SiJavascript />,
            <FaReact />,
        ],
        live: null,
        github: 'https://github.com/Majeev/Sportradar-Coding-Academy',
    },
    {
        title: 'Portfolio',
        img: portfolio,
        desc: `A portfolio page is a showcase of my current work, accomplishments, and skills.
         It serves as a visual representation of my abilities and achievements, providing potential clients, employers, or collaborators with an overview of my expertise and experience.`,
        stack: [
            <SiHtml5 />,
            <SiCss3 />,
            <SiTailwindcss />,
            <SiJavascript />,
            <FaReact />,
        ],
        live: '#',
        github: 'https://github.com/Majeev/Majeev.github.io',
    },
    {
        title: 'Pokedex',
        img: pokedex,
        desc: `A Pokedex is a handheld electronic device used by trainers in the fictional world of Pokemon.
        Trainers use the Pokedex to gather information about Pokemon. 
        The Pokedex is an essential tool for trainers as they explore the world and try to catch 'em all!
        Built as a first encounter with Rest API`,
        stack: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaReact />],
        live: 'https://majeev.github.io/Pokedex/',
        github: 'https://github.com/Majeev/Pokedex',
    },
    {
        title: 'Todo List',
        img: todo,
        desc: `A todo application is a software tool that helps users manage their tasks, goals, and priorities in a streamlined and organized way.
         Very Basic project which in did at the beginning with React. App sorts task automatically by their priority`,
        stack: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaReact />],
        live: 'https://majeev.github.io/React-To-Do-List/',
        github: 'https://github.com/Majeev/React-To-Do-List',
    },
    // {
    //     title: 'Fullstack Banking App',
    //     img: WIP,
    //     stack: [
    //         <SiTypescript />,
    //         <FaReact />,
    //         <FaNode />,
    //         <SiMongodb />,
    //         <SiTailwindcss />,
    //     ],
    //     live: null,
    //     github: null,
    // },
];
