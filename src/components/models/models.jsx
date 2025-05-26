import styles from "./models.module.css";
import { Search } from "lucide-react";
import SUV from "../../assets/nivus.png";
import BYD from "../../assets/byd dolphin.png";
import Sedan from "../../assets/versa.png";
import Hatch from "../../assets/onix.png";
import Esportivo from "../../assets/911.png";

const Models = () => {
  return (
    <section className={styles.Models}>
      <div className={styles.wrapperModels}>
        <h2 className={styles.modelsTitle}>Escolha o tipo ideal para você</h2>
        <div className={styles.search}>
          <input type="text" placeholder="Qual carro você procura?" />
          <button className={styles.searchButton}>
            <Search />
          </button>
        </div>
        <div className={styles.modelsContent}>
          {" "}
          <p>Temos mais de 300 modelos disponíveis em nosso site e agências</p>
        </div>
        <div className={styles.modelsList}>
          <nav className={styles.navModels}>
            <div className={styles.modelItem}>
              <span className={styles.modelName}>SUVs</span>
              <img src={SUV} alt="" />
              <a href="">Ver Modelos</a>
            </div>
            <div className={styles.modelItem}>
              <span className={styles.modelName}>Elétricos</span>
              <img src={BYD} alt="" />
              <a href="">Ver Modelos</a>
            </div>
            <div className={styles.modelItem}>
              <span className={styles.modelName}>Sedans</span>
              <img src={Sedan} alt="" />
              <a href="">Ver Modelos</a>
            </div>
            <div className={styles.modelItem}>
              <span className={styles.modelName}>Hatchs</span>
              <img src={Hatch} alt="" />
              <a href="">Ver Modelos</a>
            </div>

            <div className={styles.modelItem} id="porsche">
              <span className={styles.modelName}>Esportivos</span>
              <img src={Esportivo} alt="" />
              <a href="">Ver Modelos</a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Models;
