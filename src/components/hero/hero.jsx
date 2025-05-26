import styles from "./hero.module.css";
import Pulse from "../../assets/pulse.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.wrapperHero}>
        <div className={styles.heroContent}>
          <h2>Seu próximo carro pode estar aqui!</h2>
          <p>
            Encontre o carro perfeito para você aqui na Absolut Car, temos mais
            de 300 modelos de todas as marcas do mundo.
          </p>
          <div className={styles.Buttons}>
            {" "}
            <button className={styles.modernButton}>
              Confira Modelos
              <ArrowRight />
            </button>
            <button className={styles.modernButton}>
              Visite uma de nossas agências
              <ArrowRight />
            </button>
          </div>
        </div>
        {/* <img src={Pulse} alt="" /> */}
      </div>
    </section>
  );
};

export default Hero;
