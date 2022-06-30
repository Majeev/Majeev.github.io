import css from './Navbar.module.css'
import {RiHome3Line} from "react-icons/ri";
import {BsGear, BsInfoCircle} from "react-icons/bs";
import {TbBriefcase, TbMessages} from "react-icons/tb";
import {useState} from "react";

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')



    return(
        <nav className={css.nav_container}>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? css.nav_active : ''}> <RiHome3Line/></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? css.nav_active : ''}> <BsInfoCircle/></a>
            <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? css.nav_active : ''} > <BsGear/></a>
            <a onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? css.nav_active : ''}> <TbBriefcase/></a>
            <a onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? css.nav_active : ''}> <TbMessages/></a>
        </nav>
    )
}
export default Navbar