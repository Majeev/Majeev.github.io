import css from './Navbar.module.css';
import { RiHome3Line } from 'react-icons/ri';
import { BsGear, BsInfoCircle } from 'react-icons/bs';
import { TbBriefcase, TbMessages } from 'react-icons/tb';
import { useState } from 'react';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#');
    const [navColor, setNavBorder] = useState(true);
    const [mobile, setMobile] = useState(false);

    const changeNavBorder = () => {
        if (window.scrollY >= window.innerHeight / 3) {
            setNavBorder(false);
        } else {
            setNavBorder(true);
        }
    };

    window.addEventListener('scroll', changeNavBorder);

    const handleResize = () => {
        if (window.innerWidth <= 468) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    };

    window.addEventListener('resize', handleResize);

    return (
        <nav
            className={
                navColor
                    ? css.nav__container
                    : `${css.nav__container} ${css.nav__blur}`
            }>
            <a
                href='#'
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? css.nav_active : ''}>
                {mobile ? <RiHome3Line /> : 'Home'}
            </a>
            <a
                href='#about'
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? css.nav_active : ''}>
                {mobile ? <BsInfoCircle /> : 'About me'}
            </a>
            <a
                href='#skills'
                onClick={() => setActiveNav('#skills')}
                className={activeNav === '#skills' ? css.nav_active : ''}>
                {mobile ? <BsGear /> : 'Tech stack'}
            </a>
            <a
                href='#projects'
                onClick={() => setActiveNav('#projects')}
                className={activeNav === '#projects' ? css.nav_active : ''}>
                {mobile ? <TbBriefcase /> : 'Projects'}
            </a>
            <a
                href='#contact'
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? css.nav_active : ''}>
                {mobile ? <TbMessages /> : 'Contact'}
            </a>
        </nav>
    );
};
export default Navbar;
