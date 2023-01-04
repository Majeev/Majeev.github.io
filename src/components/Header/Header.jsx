import css from "./Header.module.css"

const Header = () => {
    return (
            <header className={css.header__container}>
                    <span>Hello, I am Jakub.</span>
                    <h1><strong>Frontend Developer with passion that you are looking for!</strong></h1>
                    <p>Passion for creation, tenacity of work. As a developer, I will help you bring your ideas into being.</p>
                    <span className={css.header__scroll}>SCROLL DOWN!</span>
            </header>
    )
}

export default Header