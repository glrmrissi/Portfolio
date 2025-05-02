import { useRef } from "react";

const NavBar = () => {
  const btnTheme = useRef<HTMLButtonElement | null>(null);

  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
  }
  
  const clickedTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const changeTheme = currentTheme === "light" ? "dark" : "light";
    
    document.body.setAttribute("data-theme", changeTheme);
    localStorage.setItem("theme", changeTheme);

  };
  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#inicio" className="nav-link">
              Início
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projetos" className="nav-link">
              Projetos
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contato
            </a>
          </li>
          <li className="nav-link">
            <button ref={btnTheme} onClick={clickedTheme}>
              <i className="bi bi-circle-half theme-icon"></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
