import css from "./Navbar.module.css";
import { RiHome3Line } from "react-icons/ri";
import { BsGear, BsInfoCircle } from "react-icons/bs";
import { TbBriefcase, TbMessages } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [navColor, setNavColor] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 120) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <nav
      className={
        navColor ? css.nav__container : `${css.nav__container} ${css.nav__blur}`
      }
    >
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? css.nav_active : ""}
      >
        <RiHome3Line />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? css.nav_active : ""}
      >
        <BsInfoCircle />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? css.nav_active : ""}
      >
        <BsGear />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? css.nav_active : ""}
      >
        <TbBriefcase />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? css.nav_active : ""}
      >
        <TbMessages />
      </a>
    </nav>
  );
};
export default Navbar;
