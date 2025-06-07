import styles from "./footer.module.css";
import Logo from "../../assets/logo page.png";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapperFooter}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.linksFooter}>
          <nav className={styles.linksFooterNav}>
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
            </ul>
          </nav>
        </div>
        <div className={styles.linksFooter}>
          <nav className={styles.linksFooterNav}>
            <ul className={styles.ulMenu}>
              <li className={styles.navLi}>
                <h3>Contato</h3>
              </li>
              <li className={styles.navLi}>
                <a href="">WhatsApp</a>
              </li>
              <li className={styles.navLi}>
                <a href="">Email</a>
              </li>
              <li className={styles.navLi}>
                <a href="">Telefone (21) 99999-9999</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.socialMedia}>
          <nav className={styles.socialMediaNav}>
            <ul className={styles.socialMediaUl}>
              <li>
                <a href="https://x.com/porrapedroo_" target="_blank">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pdrodc/" target="_blank">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="https://github.com/pdrodc" target="_blank">
                  <Github />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pedro-deolinda-5111a8350/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p>© 2025 Absolut Car. Todos os direitos reservados.</p>
          <p>Desenvolvido por Pedro Deolinda</p>
          <div className={styles.copyrightLinks}>
            {" "}
            <a href="">Política de privacidade</a>
            <a href="">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
