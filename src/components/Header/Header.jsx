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
            <div className='items-center relative lg:flex'>
                <div className='w-full text-center lg:w-1/2'>
                    <h1 className='px-4 md:px-36'>{slogans[slogan]}</h1>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img
                        fetchpriority='high'
                        className={`${css.header__photo} relative z-10 p-4 my-8 mx-auto w-4/5 max-w-3xl`}
                        src={meHeader}
                        alt='This is me'
                    />
                </div>
            </div>

            <span
                className={`${css.header__scroll} ${
                    !animation && css.header__noAnim
                }`}>
                SCROLL DOWN!
            </span>
        </header>
    );
};

export default Header;
