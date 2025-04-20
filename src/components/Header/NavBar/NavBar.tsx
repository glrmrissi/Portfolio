const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="#inicio" className="nav-link">Início</a></li>
                    <li><a href="#skills" className="nav-link">Habilidades</a></li>
                    <li><a href="#" className="nav-link">Projetos</a></li>
                    <li><a href="#" className="nav-link">Sobre mim</a></li>
                    <li className="nav-link"><i className="bi bi-circle-half"></i></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;