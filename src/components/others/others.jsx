import styles from "./others.module.css";
import Sahara from "../../assets/sahara.png";
import R1250 from "../../assets/r 1250 gs.png";
import CBR from "../../assets/cbr 1000rr.png";
import Fazer from "../../assets/fazer.png";
import { ArrowRight } from "lucide-react";

const Motos = () => {
  return (
    <section className={styles.Others}>
      <div className={styles.wrapperOthers}>
        <div className={styles.othersContent}>
          <h2>Confira outras categorias aqui no site também</h2>
          <p>Tudo de acordo com suas necessidades</p>
        </div>
        <div className={styles.Buttons}>
          {" "}
          <button className={styles.modernButton2}>
            Motos
            <ArrowRight />
          </button>
          <button className={styles.modernButton}>
            Modelos Antigos
            <ArrowRight />
          </button>
          <button className={styles.modernButton3}>
            Especiais
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Motos;
