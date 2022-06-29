import css from './Navbar.module.css'
import {RiHome3Line} from "react-icons/ri";
import {BsInfoCircle} from "react-icons/bs";
import {TbBriefcase, TbMessages} from "react-icons/tb";

const Navbar = () => {
    return(
        <nav className={css.nav_container}>
            <a className={css.nav_icon}> <RiHome3Line/></a>
            <a className={css.nav_icon}> <BsInfoCircle/></a>
            <a className={css.nav_icon}> <TbBriefcase/></a>
            <a className={css.nav_icon}> <TbMessages/></a>
        </nav>
    )
}
export default Navbar