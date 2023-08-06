import './Header.scss';

function Header() {
    return (
        <header className="header-container">
            <div className="logo">
                <h1>Aymeric DE LANGE</h1>
                <span>Développeur Frontend</span>
            </div>
            <nav>
                <a href="./#projects">Mes projets</a>
                <a href="./#stacks">Tools & Langages</a>
                <a href="./#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header