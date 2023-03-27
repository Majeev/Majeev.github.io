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
        <nav className='mb-8'>
            <a className='skip-link' href='#about'>Skip to content</a>
            <div
                className={`${css.nav__container} border-b flex items-center px-8 py-4 md:px-24 md:py-0 `}>
                <div className='w-1/2'>
                    <img src={logo} alt='my logo' className='h-16 md:h-24'></img>
                </div>
                <div
                    className={`${css.nav__links_container} hidden items-center w-1/2 justify-end text-center whitespace-nowrap md:flex`}>
                    <NavSections />
                </div>
                <div
                    className={`${css.nav__burger_container} w-1/2 flex justify-end md:hidden`}>
                    <button
                        className={`flex-col transition-all duration-500 ${
                            burger &&
                            'bg-zinc-100 p-3 border-2 border-dashed border-slate'
                        }`}
                        onClick={handleBurger}>
                        <div className={css.burger_bar}></div>
                        <div className={css.burger_bar}></div>
                        <div className={css.burger_bar}></div>
                    </button>
                </div>
            </div>
            {burger && (
                <div className={`${css.nav__burger_content} bg-zinc-100`}>
                    <NavSections onClick={handleBurger} />
                </div>
            )}
        </nav>
    );
};
export default Navbar;
