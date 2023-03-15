import css from './Navbar.module.css';
import { useState } from 'react';
import { logo } from '../../assets/assets';
import NavSections from './NavSections';

const Navbar = () => {
    const [burger, setBurger] = useState(false);

    const handleBurger = () => {
        setBurger(!burger);
    };

    const handleResize = () => {
        window.innerWidth >= 768 && setBurger(false);
    };
    window.addEventListener('resize', handleResize);

    return (
        <nav className={css.nav}>
            <div className={css.nav__container}>
                <div className={css.nav__logo}>
                    <img src={logo} alt='my logo'></img>
                </div>
                <div className={css.nav__links_container}>
                    <NavSections />
                </div>
                <div className={css.nav__burger_container}>
                    <button
                        className={
                            !burger
                                ? css.nav__burger_menu
                                : css.nav__burger_menu_clicked
                        }
                        onClick={handleBurger}>
                        <div className={css.burger_bar}></div>
                        <div className={css.burger_bar}></div>
                        <div className={css.burger_bar}></div>
                    </button>
                </div>
            </div>
            {burger && (
                <div className={css.nav__burger_content}>
                    <NavSections onClick={handleBurger} />
                </div>
            )}
        </nav>
    );
};
export default Navbar;
