import React from 'react';
import css from './Navbar.module.css';
import { useState } from 'react';

function NavSections({ onClick }) {
    const [activeNav, setActiveNav] = useState('Home');

    const eventsHandler = (e) => {
        setActiveNav(e.target.innerText);
        onClick();
    };

    return (
        <>
            <a
                href='#'
                onClick={eventsHandler}
                className={activeNav === 'Home' ? css.nav__active : ''}>
                Home
            </a>
            <a
                href='#about'
                onClick={eventsHandler}
                className={activeNav === 'About me' ? css.nav__active : ''}>
                About me
            </a>
            <a
                href='#projects'
                onClick={eventsHandler}
                className={activeNav === 'Projects' ? css.nav__active : ''}>
                Projects
            </a>
            <a
                href='#skills'
                onClick={eventsHandler}
                className={activeNav === 'Expertise' ? css.nav__active : ''}>
                Expertise
            </a>
            <a
                href='#contact'
                onClick={eventsHandler}
                className={activeNav === '#contact' ? css.nav__active : ''}>
                Contact
            </a>
        </>
    );
}

export default NavSections;
