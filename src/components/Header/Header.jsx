import { useState } from "react";
import css from "./Header.module.css";

const Header = () => {
  const [animation, setAnimation] = useState(true);

  const disableAnimation = () => {
    if (window.scrollY >= 1) {
      setAnimation(false);
    } else {
      setAnimation(true);
    }
  };

  window.addEventListener("scroll", disableAnimation);

  return (
    <header className={css.header__container}>
      <span>Hello, I am Jakub.</span>
      <h1>
        <strong>
          Frontend Developer with fervor that you are looking for!
        </strong>
      </h1>
      <p>
        Passion to create, tenacity at work. As a developer, I will help you
        bring your ideas into being.
      </p>
      <span
        className={
          animation
            ? css.header__scroll
            : `${css.header__scroll} ${css.header__noAnim}`
        }
      >
        SCROLL DOWN!
      </span>
    </header>
  );
};

export default Header;
