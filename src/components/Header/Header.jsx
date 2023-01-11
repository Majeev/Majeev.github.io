import { useState } from 'react';
import css from './Header.module.css';

const Header = () => {
    const [animation, setAnimation] = useState(true);

    const disableAnimation = () => {
        if (window.scrollY >= 500) {
            setAnimation(false);
        } else {
            setAnimation(true);
        }
    };

    window.addEventListener('scroll', disableAnimation);

    return (
        <header className={css.header__container}>
            <h1>Hello, I am Jakub.</h1>
            <span>
                <strong>
                    Frontend Developer with fervor that you are looking for!
                </strong>
            </span>
            <p>
                Passion to create, tenacity at work. As a developer, I will help
                you bring your ideas into <strong><i>being.</i></strong>
            </p>
            <span
                className={
                    animation
                        ? css.header__scroll
                        : `${css.header__scroll} ${css.header__noAnim}`
                }>
                SCROLL DOWN!
            </span>
        </header>
    );
};

export default Header;
