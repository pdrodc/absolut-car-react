import { useState } from "react";
import styles from "./header.module.css";
import Logo from "../../assets/logo page.png";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";
import { Search } from "lucide-react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
       <div className={styles.Logo}>
          <img src={Logo} alt="" />
        </div>
      <div className={styles.wrapperHeader}>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img
            src={menuActive ? iconCloser : iconBars}
            id={styles.menuIcons}
            alt=""
          />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a href="">Início</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Seminovos</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Marcas</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Nossas Agências</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
