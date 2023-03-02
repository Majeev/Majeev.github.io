import { useState } from 'react';
import css from './Header.module.css';
import { meHeader } from '../../assets/assets';



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

    let slogans = [
        'Creating elegant and intuitive interfaces for the digital world.',
        'Bringing your ideas to life through beautiful design and code.',
        'Building bridges between users and technology.',
        'Transforming your vision into reality.',
        'Crafting digital experiences that engage and delight users.',
    ];

    const drawSlogan = () => {
        let number;
        number = Math.round(Math.random() * 10);
        if (number <= 4) {
            return number;
        }
        return drawSlogan();
    };
    const slogan = drawSlogan();

    return (
        <header>
            <div className={css.header__container}>
                <div className={css.header__text}>
                    <h1>{slogans[slogan]}</h1>
                </div>
                <div className={css.header__photo}>
                    <img src={meHeader} />
                </div>
            </div>

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
